"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form<onboarding@resend.dev>",
      to: "jlabradorchacon@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  }
};

//test resend -----
// resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "youremail",
//     subject: "Message from contact form",
//     text: "Hello world!"
// })
