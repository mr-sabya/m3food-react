import { cache } from 'react';
import ContactClient from './ContactClient';


// আপনার দেওয়া ডাটা ফেচিং ফাংশন
const getSettings = cache(async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    try {
        const res = await fetch(`${API_URL}/settings`, {
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': API_KEY || ''
            },
            next: { revalidate: 3600 }
        });

        if (!res.ok) return null;
        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error("Settings fetch failed:", error);
        return null;
    }
});

export default async function ContactPage() {
    const settings = await getSettings();

    return <ContactClient settings={settings} />;
}