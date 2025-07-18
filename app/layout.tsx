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
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	themeColor: "#f0f0f0",
	openGraph: {
		title: "Cozy - Your Comfort Shopping Destination",
		description:
			"Discover cozy comfort for every corner of your life with our curated collection of home essentials, lifestyle products, and comfort-focused items.",
		url: "https://cozy-mart.vercel.app",
		siteName: "Cozy",
		images: [
			{
				url: "https://cozy-mart.vercel.app/logo-transparent.png",
				width: 1200,
				height: 630,
				alt: "Cozy - Your Comfort Shopping Destination",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Cozy - Your Comfort Shopping Destination",
		description:
			"Discover cozy comfort for every corner of your life with our curated collection of home essentials, lifestyle products, and comfort-focused items.",
		site: "@cozy_mart",
		creator: "@cozy_mart",
		images: ["https://cozy-mart.com/logo-transparent.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	appleWebApp: {
		title: "Cozy",
		statusBarStyle: "default",
		startupImage: [
			{
				url: "https://cozy-mart.vercel.app/logo-transparent.png",
			},
		],
	},
	viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
	manifest: "/manifest.json",
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
