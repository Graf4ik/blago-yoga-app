import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, phone, question } = await req.json();

    if (!name || !phone || !question) {
        return new Response(
            JSON.stringify({ message: 'All fields are required' }),
            { status: 400 }
        );
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user,
            pass,
        },
    });

    try {
        console.log({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE,
            user,
            pass,
        });

        await transporter.verify();
        console.log('SMTP OK');

        await transporter.sendMail({
            from: `"BLAGO YOGA ART" <${user}>`,
            to: user,
            subject: 'Новый вопрос с сайта',
            html: `
        <h3>Новый вопрос</h3>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Телефон:</b> ${phone}</p>
        <p><b>Вопрос:</b> ${question}</p>
      `,
        });

        return Response.json({ success: true });
    } catch (e) {
        console.error('MAIL ERROR:', e);
        return new Response(
            JSON.stringify({ message: 'Mail error', error: String(e) }),
            { status: 500 }
        );
    }
}
