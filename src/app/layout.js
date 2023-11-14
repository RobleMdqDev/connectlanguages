import "./globals.css";

import {Inter} from "next/font/google";
import {PrismicPreview} from "@prismicio/next";
import {createClient, repositoryName} from "@/prismicio";

import {Header} from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({children}) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="overflow-x-hidden antialiased h-full">
        {/* @ts-expect-error Async Server Component */}
        <Header settings={settings} navigation={navigation} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
