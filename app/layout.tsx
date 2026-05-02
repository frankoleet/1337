import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artbufin | Картины в единственном экземпляре",
  description:
    "Авторские картины и рисунки, созданные вручную. Каждая работа существует в одном экземпляре.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  var theme = localStorage.getItem("artbufin-theme") || "dark";
  document.documentElement.setAttribute("data-theme", theme);
} catch (_) {
  document.documentElement.setAttribute("data-theme", "dark");
}
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
