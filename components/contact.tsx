"use client";

import { useTransition, type FormEvent } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { siteConfig } from "@/lib/site";
import SubmitBtn from "./submit-btn";
import { toast } from "react-hot-toast";

const fieldClass = `rounded-lg borderBlack bg-white transition-all placeholder:text-gray-500
  dark:bg-white/10 dark:focus:bg-white/20 dark:text-white dark:placeholder:text-white/70`;

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.8);
  const [isPending, startTransition] = useTransition();

  // Handled manually (not via form `action`) so React doesn't clear the
  // visitor's message when sending fails.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await sendEmail(formData);

      if ("error" in result) {
        toast.error(result.error);
        return;
      }
      toast.success("Email sent successfully");
      form.reset();
    });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="senderEmail" className="sr-only">
          Your email
        </label>
        <input
          id="senderEmail"
          name="senderEmail"
          type="email"
          autoComplete="email"
          required
          maxLength={500}
          className={`h-14 px-4 ${fieldClass}`}
          placeholder="Your Email"
        />
        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          className={`my-3 h-52 p-4 ${fieldClass}`}
          placeholder="Your Message"
        />
        {/* Honeypot for spam bots; hidden from people and assistive tech. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <SubmitBtn pending={isPending} />
      </form>
    </motion.section>
  );
}
