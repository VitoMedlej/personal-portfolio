
import nodemailer from 'nodemailer';

interface EmailOptions {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_HOST,
            port: Number(process.env.NEXT_PUBLIC_PORT) ,
            secure: true,
            auth: {
                user: `${process.env.NEXT_PUBLIC_USER}`,
                pass: `${process.env.NEXT_PUBLIC_PASS}`,
            },
        });

        const info = await transporter.sendMail(options);
        console.log("Email sent: %s", info.messageId);
        console.log('options: ', options);
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}