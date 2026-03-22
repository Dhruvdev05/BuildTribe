import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BuildTribe-share your Creations, connect with builders",
  description: "BuildTribe is a community of builders and makers who are passionate about building and sharing their projects. We believe in the power of collaboration and learning from each other. Join us to share your projects, get feedback, and connect with other builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>BuildTribe</header>
        {children}
       <footer>BuildTribe</footer> 
        </body>
    </html>
  );
}
