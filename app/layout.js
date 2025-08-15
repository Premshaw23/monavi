import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Header } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monavi – Empowering Doctors. Enhancing Patient Care.",
  description:
    "Monavi is a modern healthcare platform that connects doctors and patients seamlessly. Discover innovation, accessibility, and secure healthcare solutions.",
  keywords:
    "Healthcare, Digital Health, Monavi, Doctors, Patient Care, HIPAA, Medical Innovation, Startup, Health Tech",
  author: "Monavi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          {/* Basic SEO */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />

          {/* Open Graph for Social Sharing */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://monavi.in" />
          <meta property="og:image" content="/social-share.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="/social-share.png" />

          {/* Favicons */}
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Theme Color */}
          <meta name="theme-color" content="#00bba7" />
        </Head>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            success: { style: { background: "green", color: "white" } },
            error: { style: { background: "red", color: "white" } },
          }}
        />

        {/* Main Content */}
        <Header />
        {children}
      </body>
    </html>
  );
}
