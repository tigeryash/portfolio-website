import { siteConfig } from "@/lib/site";

// Evaluated once when the page is built, not on every render.
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} {siteConfig.shortName}. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with Next.js (App Router
        &amp; Server Actions), React, TypeScript, Tailwind CSS, Framer Motion, React Email &amp;
        Resend, hosted on Vercel.
      </p>
    </footer>
  );
}
