import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/modals/DemoModal";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cozy - Your Comfort Shopping Destination",
	description:
		"Discover cozy comfort for every corner of your life with our curated collection of home essentials, lifestyle products, and comfort-focused items.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />

				<DemoModal />
				<CookieBanner />
			</body>
		</html>
	);
}
