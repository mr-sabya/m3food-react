import { MessageCircle } from 'lucide-react'
import React from 'react'

export default function BottomBar() {
    return (
        <a
            href="https://wa.me/8801520101590"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50 flex items-center justify-center"
        >
            <MessageCircle size={32} />
        </a>
    )
}
