import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Companion | Resources",
  description: "Resources and information about Companion",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        {children}
      </main>
      <Footer />
    </>
  );
} 