
import { QuoteFormData } from "@/types";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";



export async function POST(request: Request) {
    
    try {
        const body: QuoteFormData = await request.json();
        const {
            name,
            company,
            email,
            phone,
            whatsapp,
            GSM,
            quantity,
            category,
            fabric,
            yarn,
            ratio,
        } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: "New Quote Request",
            html: `
                <h3>New Quote Request</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || "-"}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>WhatsApp:</strong> ${whatsapp || "-"}</p>
                <p><strong>GSM:</strong> ${GSM}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Category:</strong> ${category || "-"}</p>
                <p><strong>Fabric:</strong> ${fabric || "-"}</p>
                <p><strong>Yarn:</strong> ${yarn || "-"}</p>
                <p><strong>Ratio:</strong> ${ratio}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}
