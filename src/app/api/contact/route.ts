import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Send Email via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                const { error: resendError } = await resend.emails.send({
                    from: "Shadowline Contact <noreply@zealics.com>", // Using verified domain
                    to: "sales@zealics.com",
                    subject: `Contact Form: ${subject || "General Inquiry"}`,
                    html: `
                        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                            <h2 style="color: #2A909B; text-transform: uppercase; letter-spacing: 2px;">New Contact Message</h2>
                            <hr style="border: 0; border-top: 1px solid #eee;" />
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
                            <hr style="border: 0; border-top: 1px solid #eee;" />
                            <p><strong>Message:</strong></p>
                            <p style="white-space: pre-wrap;">${message}</p>
                            <hr style="border: 0; border-top: 1px solid #eee;" />
                            <p style="font-size: 12px; color: #666;">This message was sent from the Shadowline Automotive contact page.</p>
                        </div>
                    `,
                });

                if (resendError) {
                    console.error("Resend API returned an error:", resendError);
                    return NextResponse.json(
                        { error: `Email delivery failed: ${resendError.message}` },
                        { status: 500 }
                    );
                }
            } catch (emailError: any) {
                console.error("Contact Email exception:", emailError);
                return NextResponse.json(
                    { error: `Email service error: ${emailError.message}` },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
