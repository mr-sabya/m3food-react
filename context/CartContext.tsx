"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface CartContextType {
    cartCount: number;
    totalAmount: number;
    isAdding: boolean;
    // Added 'price' to the function signature
    addToCart: (productId: number, price: number, quantity?: number, options?: any) => Promise<boolean>;
    updateQuantity: (cartItemId: number, action: 'increase' | 'decrease') => Promise<void>;
    removeItem: (cartItemId: number) => Promise<void>;
    refreshCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartCount, setCartCount] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const getHeaders = useCallback((isJson = false) => {
        const headers: HeadersInit = {
            'Accept': 'application/json',
            'X-API-KEY': API_KEY || '',
        };
        if (isJson) headers['Content-Type'] = 'application/json';
        return headers;
    }, [API_KEY]);

    const fetchCartData = useCallback(async (currentSessionId: string) => {
        if (!API_URL) return;
        try {
            const res = await fetch(`${API_URL}/cart?session_id=${currentSessionId}`, {
                method: 'GET',
                headers: getHeaders()
            });
            const result = await res.json();
            if (result.success) {
                setCartCount(result.count || 0);
                setTotalAmount(result.total_amount || 0);
            }
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    }, [API_URL, getHeaders]);

    useEffect(() => {
        setMounted(true);
        let sId = localStorage.getItem('cart_session_id');
        if (!sId) {
            sId = Math.random().toString(36).substring(2, 15) + Date.now();
            localStorage.setItem('cart_session_id', sId);
        }
        setSessionId(sId);
        fetchCartData(sId);
    }, [fetchCartData]);

    // --- ADD TO CART (Now includes price) ---
    const addToCart = async (productId: number, price: number, quantity: number = 1, options: any = null): Promise<boolean> => {
        if (!API_URL || !sessionId) return false;
        console.log("Adding to cart:", { productId, price, quantity, options, sessionId });

        setIsAdding(true);
        try {
            const res = await fetch(`${API_URL}/cart/add`, {
                method: 'POST',
                headers: getHeaders(true),
                body: JSON.stringify({
                    product_id: productId,
                    price: price, // <--- Added this
                    quantity: quantity,
                    session_id: sessionId,
                    options: options
                })
            });

            const result = await res.json();

            if (result.success) {
                setCartCount(result.count);
                return true;
            } else {
                console.error("Cart Error:", result.errors || result.message);
                return false;
            }
        } catch (error) {
            console.error("Network Error:", error);
            return false;
        } finally {
            setIsAdding(false);
        }
    };

    const updateQuantity = async (cartItemId: number, action: 'increase' | 'decrease') => {
        if (!API_URL || !sessionId) return;
        try {
            const res = await fetch(`${API_URL}/cart/update-quantity`, {
                method: 'PATCH',
                headers: getHeaders(true),
                body: JSON.stringify({
                    cart_item_id: cartItemId,
                    action: action,
                    session_id: sessionId
                })
            });
            const result = await res.json();
            if (result.success) fetchCartData(sessionId);
        } catch (error) {
            console.error("Update error:", error);
        }
    };

    const removeItem = async (cartItemId: number) => {
        if (!API_URL || !sessionId) return;
        try {
            const res = await fetch(`${API_URL}/cart/remove/${cartItemId}?session_id=${sessionId}`, {
                method: 'DELETE',
                headers: getHeaders()
            });
            const result = await res.json();
            if (result.success) fetchCartData(sessionId);
        } catch (error) {
            console.error("Remove error:", error);
        }
    };

    if (!mounted) return null;

    return (
        <CartContext.Provider value={{
            cartCount,
            totalAmount,
            isAdding,
            addToCart,
            updateQuantity,
            removeItem,
            refreshCart: () => sessionId && fetchCartData(sessionId)
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};