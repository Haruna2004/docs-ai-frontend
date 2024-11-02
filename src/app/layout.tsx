import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Paystack Doc AI",
  description: "Ask Paystack documentation question",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
