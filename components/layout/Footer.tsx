"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Leaf, Shield, Truck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
	const footerLinks = {
		shop: [
			{ name: "New Arrivals", href: "/new" },
			{ name: "Best Sellers", href: "/bestsellers" },
			{ name: "Sale Items", href: "/sale" },
			{ name: "Gift Cards", href: "/gift-cards" },
		],
		customer: [
			{ name: "Contact Us", href: "/contact" },
			{ name: "Size Guide", href: "/size-guide" },
			{ name: "Returns", href: "/returns" },
			{ name: "Shipping Info", href: "/shipping" },
		],
		company: [
			{ name: "About Us", href: "/about" },
			{ name: "Careers", href: "/careers" },
			{ name: "Press", href: "/press" },
			{ name: "Sustainability", href: "/sustainability" },
		],
	};

	const features = [
		{
			icon: Truck,
			title: "Free Shipping",
			description: "On orders over ¥3,000",
		},
		{
			icon: Shield,
			title: "Secure Payment",
			description: "100% secure checkout",
		},
		{
			icon: Gift,
			title: "Gift Wrapping",
			description: "Free beautiful packaging",
		},
		{
			icon: Leaf,
			title: "Eco Friendly",
			description: "Sustainable materials",
		},
	];

	return (
		<footer className="bg-gradient-to-b from-background to-muted/30 border-t">
			{/* Features section */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
								<feature.icon className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">{feature.title}</h3>
							<p className="text-sm text-muted-foreground">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>

			<Separator />

			{/* Newsletter section */}
			<div className="container mx-auto px-4 py-12">
				<div className="text-center max-w-2xl mx-auto">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Stay in the Loop 💌</h2>
						<p className="text-muted-foreground mb-6">
							Get the latest updates on new arrivals, exclusive offers, and cozy lifestyle tips!
						</p>

						<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
							<Input placeholder="Enter your email" className="flex-1 rounded-full" />
							<Button className="rounded-full px-8">Subscribe</Button>
						</div>
					</motion.div>
				</div>
			</div>

			<Separator />

			{/* Main footer content */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
					{/* Brand section */}
					<div className="lg:col-span-2">
						<Link href="/" className="flex items-center space-x-2 mb-4">
							<div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
								<span className="text-lg font-bold text-white">🌸</span>
							</div>
							<span className="text-xl font-bold text-gradient">Cozy</span>
						</Link>

						<p className="text-muted-foreground mb-6 max-w-md">
							Bringing comfort and joy to your everyday life with carefully curated products that make your space more
							cozy and beautiful.
						</p>

						<div className="space-y-2 text-sm">
							<div className="flex items-center space-x-2">
								<MapPin className="h-4 w-4 text-primary" />
								<span>414 Sakura Street, Tokyo, Japan</span>
							</div>
							<div className="flex items-center space-x-2">
								<Phone className="h-4 w-4 text-primary" />
								<span>+1 (414) 123-4567</span>
							</div>
							<div className="flex items-center space-x-2">
								<Mail className="h-4 w-4 text-primary" />
								<span>hello@cozy.com</span>
							</div>
							<div className="flex items-center space-x-2">
								<Link href="/privacy" className="text-primary hover:underline">
									Privacy Policy
								</Link>
								<Link href="/terms" className="text-primary hover:underline">
									Terms of Service
								</Link>
							</div>
						</div>
					</div>

					{/* Links sections */}
					<div>
						<h3 className="font-semibold mb-4">Shop</h3>
						<ul className="space-y-2">
							{footerLinks.shop.map((link) => (
								<li key={link.name}>
									<Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Customer Care</h3>
						<ul className="space-y-2">
							{footerLinks.customer.map((link) => (
								<li key={link.name}>
									<Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Company</h3>
						<ul className="space-y-2">
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<Separator />

			{/* Bottom section */}
			<div className="container mx-auto px-4 py-6">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="flex items-center space-x-1 text-sm text-muted-foreground">
						<span>© {new Date().getFullYear()} Cozy by </span>
						<Link
							href="https://reikama-414-site-v3.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="ReiKama414"
							className="underline underline-offset-2 text-primary hover:opacity-75 transition duration-200">
							ReiKama414
						</Link>
						. All rights reserved.
					</div>

					<div className="flex items-center space-x-4">
						<Button variant="ghost" size="icon">
							<Instagram className="h-5 w-5" />
						</Button>
						<Button variant="ghost" size="icon">
							<Twitter className="h-5 w-5" />
						</Button>
						<Button variant="ghost" size="icon">
							<Facebook className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
