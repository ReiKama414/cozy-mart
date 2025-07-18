"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, Cookie, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPage = () => {
	const sections = [
		{
			title: "Information We Collect",
			icon: Database,
			content: [
				"Personal information you provide (name, email, address, phone)",
				"Payment information (processed securely by third-party providers)",
				"Account preferences and shopping history",
				"Device information and browsing behavior",
				"Location data (with your permission)",
				"Communication preferences and feedback",
			],
		},
		{
			title: "How We Use Your Information",
			icon: Eye,
			content: [
				"Process and fulfill your orders",
				"Provide customer support and respond to inquiries",
				"Send order confirmations and shipping updates",
				"Personalize your shopping experience",
				"Improve our products and services",
				"Send marketing communications (with consent)",
			],
		},
		{
			title: "Information Sharing",
			icon: Shield,
			content: [
				"We do not sell your personal information to third parties",
				"Trusted service providers who help operate our business",
				"Payment processors for secure transaction handling",
				"Shipping partners for order delivery",
				"Legal compliance when required by law",
				"Business transfers (with proper notification)",
			],
		},
		{
			title: "Data Security",
			icon: Lock,
			content: [
				"Industry-standard encryption for data transmission",
				"Secure servers with regular security updates",
				"Limited access to personal information",
				"Regular security audits and monitoring",
				"Secure payment processing (PCI DSS compliant)",
				"Employee training on data protection",
			],
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
						<Shield className="h-5 w-5 text-blue-600" />
						<span className="text-blue-700 font-semibold">Privacy Policy</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">🔒 Your Privacy Matters</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						We are committed to protecting your privacy and ensuring the security of your personal information. This
						policy explains how we collect, use, and protect your data.
					</p>

					<p className="text-sm text-muted-foreground mt-4">Last updated: January 2024</p>
				</motion.div>

				<div className="space-y-8">
					{sections.map((section, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<Card>
								<CardContent className="p-8">
									<div className="flex items-center space-x-3 mb-6">
										<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
											<section.icon className="h-6 w-6 text-primary" />
										</div>
										<h2 className="text-2xl font-bold">{section.title}</h2>
									</div>
									<ul className="space-y-3">
										{section.content.map((item, itemIndex) => (
											<li key={itemIndex} className="flex items-start space-x-3">
												<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
												<span className="text-muted-foreground">{item}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mt-12">
					<Card className="bg-gradient-to-r from-primary/10 to-accent/10">
						<CardContent className="p-8 text-center">
							<Mail className="h-12 w-12 text-primary mx-auto mb-4" />
							<h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
							<p className="text-muted-foreground mb-6">
								If you have any questions about this privacy policy or how we handle your data, please don't hesitate to
								contact us.
							</p>
							<p className="text-sm text-muted-foreground">Email: privacy@cozy.com | Phone: +1 (414) 123-4567</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default PrivacyPage;
