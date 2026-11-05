import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, event_date, category_interest, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    // Gmail SMTP Transporter with App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ddkhank13@gmail.com",
        pass: "bpqtghfthiyknjop",
      },
    });

    const mailOptions = {
      from: `"ak Creation's Studio" <ddkhank13@gmail.com>`,
      to: "Akcreationsdesigner@gmail.com",
      cc: "danishkkhan13@gmail.com",
      replyTo: email || undefined,
      subject: `✨ New Client Inquiry from ${name} - ak Creation's`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0d7c9; border-radius: 12px; overflow: hidden;">
          <div style="background: #0F1E36; padding: 24px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">ak Creation's</h1>
            <p style="margin: 6px 0 0; color: #C5A059; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px;">Aasiya Khan Haute Couture & Bridal Studio</p>
          </div>
          
          <div style="padding: 28px 24px; color: #111A29;">
            <h2 style="font-size: 18px; color: #0F1E36; margin-top: 0; border-bottom: 2px solid #C5A059; padding-bottom: 8px;">New Appointment / Inquiry Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 35%; font-size: 14px;"><strong>Client Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111A29; font-size: 15px;"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;"><strong>WhatsApp / Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1F8246; font-size: 15px;">
                  <a href="https://wa.me/91${phone.replace(/\D/g, "")}" style="color: #1F8246; font-weight: bold; text-decoration: none;">
                    +91 ${phone} 💬 (Click to chat)
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111A29; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #0F1E36; text-decoration: none;">${email || "Not provided"}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;"><strong>Occasion / Date:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111A29; font-size: 14px;">${event_date || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;"><strong>Outfit Selection:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E36; font-weight: bold; font-size: 14px;">${category_interest || "General Inquiry"}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #FAF8F5; border-left: 4px solid #C5A059; border-radius: 4px;">
              <p style="margin: 0 0 6px; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;"><strong>Client Message / Notes:</strong></p>
              <p style="margin: 0; font-size: 14px; color: #222; line-height: 1.6; white-space: pre-line;">${message || "No special message provided."}</p>
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="https://wa.me/91${phone.replace(/\D/g, "")}" style="display: inline-block; background: #1F8246; color: #ffffff; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px; letter-spacing: 1px;">
                Reply to Client on WhatsApp
              </a>
            </div>
          </div>

          <div style="background: #FAF8F5; padding: 16px; text-align: center; border-top: 1px solid #e0d7c9; font-size: 11px; color: #888;">
            Sent automatically from your portfolio website: aasiya-khan-couture.vercel.app
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (err: unknown) {
    console.error("Nodemailer Error:", err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Failed to send email." },
      { status: 500 }
    );
  }
}
