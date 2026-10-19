"use server";

import { Resend } from "resend";
import { validateString, validateEmail, getErrorMessage } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import ContactFormEmail from "@/email/contact-form-email";

const SEND_FAILED_MESSAGE = `Sorry, your message couldn't be sent. Please email me directly at ${siteConfig.email}.`;

type SendEmailResult = { success: true } | { error: string };

export const sendEmail = async (formData: FormData): Promise<SendEmailResult> => {
  // Honeypot: real visitors never see this field, so anything in it is a bot.
  // Pretend it worked so bots don't learn to skip it.
  if (formData.get("company")) {
    return { success: true };
  }

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateEmail(senderEmail)) {
    return { error: "Please enter a valid email address." };
  }

  if (!validateString(message, 5000)) {
    return { error: "Please enter a message (up to 5000 characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("sendEmail: RESEND_API_KEY is not set");
    return { error: SEND_FAILED_MESSAGE };
  }

  try {
    const resend = new Resend(apiKey);
    // Resend reports API failures in `error` instead of throwing.
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: siteConfig.email,
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: ContactFormEmail({ message, senderEmail }),
    });

    if (error) {
      console.error("sendEmail: Resend rejected the email", error);
      return { error: SEND_FAILED_MESSAGE };
    }
  } catch (error: unknown) {
    console.error("sendEmail: request to Resend failed", getErrorMessage(error));
    return { error: SEND_FAILED_MESSAGE };
  }

  return { success: true };
};
