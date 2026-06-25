import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/layout/ScrollProgress";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "whitepace — Get More Done with whitepace",
    template: "%s | whitepace",
  },
  description:
    "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
  metadataBase: new URL("https://whitepace.example.com"),
  openGraph: {
    title: "whitepace — Get More Done with whitepace",
    description:
      "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
    type: "website",
    siteName: "whitepace",
  },
  twitter: {
    card: "summary_large_image",
    title: "whitepace — Get More Done with whitepace",
    description:
      "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${sora.variable} ${inter.variable} antialiased bg-paper text-ink-900`}>
      <a  
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}