import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Research Center",
  description: "MyResearchCenter.com Domain for sale",
  keywords: "buy domain, domain for sale, premium domain, domain marketplace, brandable domain, domain auction, domain investment, domain name, digital assets, online business, research center, research resources, academic research, scientific studies, research tools"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
