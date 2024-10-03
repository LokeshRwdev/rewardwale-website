import type { Metadata } from "next";
import { Header, Footer } from '@/components/layout';
import {
  Noto_Sans,
  Roboto,
  Open_Sans,
  Merriweather_Sans,
} from "@next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import ThemeDataProvider from "@/context/theme-data-provider";

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const merriweatherSans = Merriweather_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rewardwale",
  description: "Sharing experiences gets Rewarding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.className} ${roboto.className} ${openSans.className} ${merriweatherSans.className}`}
      >
         <Header />
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>
            <div className="container mx-auto max-w-3xl">{children}</div>
          </ThemeDataProvider>
        </NextThemesProvider>
        <Footer />
      </body>
    </html>
  );
}
