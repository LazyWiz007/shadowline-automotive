import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, countryCode, teamName, variant } = body;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const variantInfo = variant
            ? {
                  id: variant.id || "",
                  label: variant.label || "Helium 160",
                  price: variant.price || "",
                  subtext: variant.subtext || "",
              }
            : null;

        // 2. Log the request
        console.log("Booking Request Received:", {
            name,
            email,
            phone: `${countryCode} ${phone}`,
            teamName,
            variant: variantInfo ? `${variantInfo.label} (${variantInfo.price})` : "General Inquiry",
            timestamp: new Date().toISOString(),
        });

        // 3. Send Email via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                const subjectVariant = variantInfo ? ` [${variantInfo.label}]` : "";
                
                // Email to Sales Team
                const { error: resendError } = await resend.emails.send({
                    from: "Shadowline <noreply@zealics.com>",
                    to: "sales@zealics.com",
                    subject: `New Booking Request: ${name}${subjectVariant}`,
                    html: `
                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                            <div style="border-bottom: 2px solid #2A909B; padding-bottom: 12px; margin-bottom: 20px;">
                                <h2 style="color: #0f172a; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1.5px;">New Booking Request</h2>
                                <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Shadowline Automotive · Precision Track Engineering</p>
                            </div>

                            ${
                                variantInfo
                                    ? `
                            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2A909B; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                                <h3 style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #2A909B; font-weight: 700;">Selected Motorcycle Variant</h3>
                                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                                    <tr>
                                        <td style="padding: 4px 0; color: #64748b; width: 140px;"><strong>Model:</strong></td>
                                        <td style="padding: 4px 0; color: #0f172a; font-weight: 600;">Helium 160</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 4px 0; color: #64748b;"><strong>Variant:</strong></td>
                                        <td style="padding: 4px 0; color: #0f172a; font-weight: 700; font-size: 16px;">${variantInfo.label}</td>
                                    </tr>
                                    ${
                                        variantInfo.price
                                            ? `
                                    <tr>
                                        <td style="padding: 4px 0; color: #64748b;"><strong>Price:</strong></td>
                                        <td style="padding: 4px 0; color: #0f172a; font-weight: 700;">${variantInfo.price} <span style="font-size: 11px; font-weight: 400; color: #64748b;">(Ex-showroom)</span></td>
                                    </tr>`
                                            : ""
                                    }
                                    ${
                                        variantInfo.subtext
                                            ? `
                                    <tr>
                                        <td style="padding: 4px 0; color: #64748b;"><strong>Configuration:</strong></td>
                                        <td style="padding: 4px 0; color: #334155;">${variantInfo.subtext}</td>
                                    </tr>`
                                            : ""
                                    }
                                </table>
                            </div>
                            `
                                    : `
                            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 24px;">
                                <p style="margin: 0; color: #64748b; font-size: 13px;">General consultation booking (no specific variant selected).</p>
                            </div>
                            `
                            }

                            <div style="margin-bottom: 24px;">
                                <h3 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700;">Customer Details</h3>
                                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                                    <tr>
                                        <td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td>
                                        <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${name}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td>
                                        <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #2A909B; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td>
                                        <td style="padding: 6px 0; color: #0f172a;">${countryCode} ${phone}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0; color: #64748b;"><strong>Team Name:</strong></td>
                                        <td style="padding: 6px 0; color: #0f172a;">${teamName || "N/A"}</td>
                                    </tr>
                                </table>
                            </div>

                            <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; font-size: 11px; color: #94a3b8; text-align: center;">
                                Sent automatically from the Shadowline Automotive website
                            </div>
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

                // Customer Confirmation Receipt Email (sent asynchronously / non-blocking)
                try {
                    await resend.emails.send({
                        from: "Shadowline Automotive <noreply@zealics.com>",
                        to: email,
                        subject: `Booking Request Confirmed — Helium 160${subjectVariant}`,
                        html: `
                            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                                <div style="border-bottom: 2px solid #2A909B; padding-bottom: 12px; margin-bottom: 20px;">
                                    <h2 style="color: #0f172a; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1.5px;">Booking Request Received</h2>
                                    <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Shadowline Automotive · Precision Track Engineering</p>
                                </div>

                                <p style="color: #334155; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                                    Dear ${name},<br/><br/>
                                    Thank you for your interest in <strong>Shadowline Helium 160</strong>. We have successfully logged your booking request for the <strong>${variantInfo ? variantInfo.label : "Helium 160"}</strong>.
                                </p>

                                ${
                                    variantInfo
                                        ? `
                                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2A909B; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                                    <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #2A909B; font-weight: 700;">Your Selected Variant</p>
                                    <p style="margin: 0 0 4px 0; font-size: 18px; font-weight: 700; color: #0f172a;">${variantInfo.label}</p>
                                    ${variantInfo.price ? `<p style="margin: 0 0 6px 0; font-size: 16px; color: #2A909B; font-weight: 700;">${variantInfo.price} <span style="font-size: 11px; font-weight: 400; color: #64748b;">(Ex-showroom)</span></p>` : ""}
                                    ${variantInfo.subtext ? `<p style="margin: 0; font-size: 13px; color: #475569;">${variantInfo.subtext}</p>` : ""}
                                </div>
                                `
                                        : ""
                                }

                                <p style="color: #334155; font-size: 14px; line-height: 1.6;">
                                    Our team will get in touch with you shortly to schedule your consultation and guide you through the next steps.
                                </p>

                                <div style="border-top: 1px solid #e2e8f0; margin-top: 24px; padding-top: 14px; font-size: 11px; color: #94a3b8; text-align: center;">
                                    Shadowline Automotive · Precision Track Engineering
                                </div>
                            </div>
                        `,
                    });
                } catch (customerEmailErr) {
                    console.warn("Notice: Customer confirmation email could not be delivered:", customerEmailErr);
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
