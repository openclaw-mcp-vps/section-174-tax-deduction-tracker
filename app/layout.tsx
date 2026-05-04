import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Section 174 Tax Deduction Tracker",
  description: "Calculate lost Section 174 deductions for software companies. Track R&D expenses, calculate tax impact, and generate compliance reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fdf40d3f-cce1-43a0-b8b9-20a1a025705d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
