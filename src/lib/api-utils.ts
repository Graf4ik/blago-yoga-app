import { RequestPayload } from "@/components/ContactSidebar/types";

export const sendContactForm = async (data: RequestPayload) => {
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Ошибка отправки');
    return res.json();
};
