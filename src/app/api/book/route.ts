import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, countryCode, teamName } = body;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // 2. Log the request
        console.log("Booking Request Received:", {
            name,
            email,
            phone: `${countryCode} ${phone}`,
            teamName,
            timestamp: new Date().toISOString(),
        });

        // 3. Send Email via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                const { error: resendError } = await resend.emails.send({
                    from: "Shadowline <noreply@zealics.com>", // Replace with your verified domain in production
                    to: "sales@zealics.com",
                    subject: `New Booking Request: ${name}`,
                    html: `
                        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                            <h2 style="color: #2A909B; text-transform: uppercase; letter-spacing: 2px;">New Booking Request</h2>
                            <hr style="border: 0; border-top: 1px solid #eee;" />
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
                            <p><strong>Team Name:</strong> ${teamName || "N/A"}</p>
                            <hr style="border: 0; border-top: 1px solid #eee;" />
                            <p style="font-size: 12px; color: #666;">This request was sent from the Shadowline Automotive website.</p>
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
                console.error("Email sending exception:", emailError);
                return NextResponse.json(
                    { error: `Email service error: ${emailError.message}` },
                    { status: 500 }
                );
            }
        } else {
            console.warn("RESEND_API_KEY is missing. Email not sent.");
        }

        return NextResponse.json({ success: true, message: "Booking confirmed" });
    } catch (error) {
        console.error("Booking API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
