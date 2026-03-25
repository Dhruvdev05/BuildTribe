import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { ClerkProvider } from "@clerk/nextjs";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
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
    <ClerkProvider>
 <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className={`${plusJakarta.className} min-h-full flex flex-col`}>
        <Header />
        {children}
       <Footer />
        </body>
    </html>
    </ClerkProvider>
   
  );
}
