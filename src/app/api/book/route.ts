import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, countryCode, teamName, turnstileToken } = body;

        // Basic validation
        if (!name || !email || !phone || !turnstileToken) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // 1. Verify Turnstile Token
        const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
        
        // Use a dummy secret for local testing if the real secret isn't provided
        const secret = process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA"; 
        
        const verifyRes = await fetch(verifyEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(turnstileToken)}`,
        });

        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            console.error("Turnstile verification failed:", verifyData);
            return NextResponse.json(
                { error: "Security check failed. Please try again." },
                { status: 403 }
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
                await resend.emails.send({
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
            } catch (emailError) {
                console.error("Email sending failed:", emailError);
                // We don't return an error to the user yet, but we log it
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
