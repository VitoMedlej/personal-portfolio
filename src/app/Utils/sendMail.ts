
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
            host: "mail.smtp2go.com",
            port: 8465 ,
            secure: true,
            auth: {
                user: "vitomedlej.com",
                pass: "vitomedlej",
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