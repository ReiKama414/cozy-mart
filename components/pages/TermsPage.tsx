"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ShoppingCart, CreditCard, Truck, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TermsPage = () => {
	const sections = [
		{
			title: "Account Terms",
			icon: FileText,
			content: [
				"You must be 18 years or older to create an account",
				"Provide accurate and complete information during registration",
				"Keep your account credentials secure and confidential",
				"You are responsible for all activities under your account",
				"Notify us immediately of any unauthorized use",
				"We reserve the right to suspend accounts that violate our terms",
			],
		},
		{
			title: "Orders and Payments",
			icon: CreditCard,
			content: [
				"All orders are subject to acceptance and availability",
				"Prices are subject to change without notice",
				"Payment must be received before order processing",
				"We accept major credit cards and digital payment methods",
				"Orders may be cancelled if payment cannot be processed",
				"Promotional codes cannot be combined unless specified",
			],
		},
		{
			title: "Shipping and Delivery",
			icon: Truck,
			content: [
				"Delivery times are estimates and not guaranteed",
				"Risk of loss transfers to you upon delivery",
				"We are not responsible for delays caused by shipping carriers",
				"Additional fees may apply for remote or international deliveries",
				"Damaged items must be reported within 48 hours of delivery",
				"Signature may be required for high-value items",
			],
		},
		{
			title: "Returns and Refunds",
			icon: ShoppingCart,
			content: [
				"Items may be returned within 30 days of delivery",
				"Items must be unused and in original packaging",
				"Return shipping costs are the responsibility of the customer",
				"Refunds will be processed to the original payment method",
				"Personalized items and gift cards are non-returnable",
				"Processing time for refunds is 5-7 business days",
			],
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
						<FileText className="h-5 w-5 text-orange-600" />
						<span className="text-orange-700 font-semibold">Terms of Service</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">📋 Terms of Service</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Please read these terms carefully before using our services. By using CozyMart, you agree to be bound by
						these terms and conditions.
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
					<Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
						<CardContent className="p-8 text-center">
							<AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
							<h3 className="text-2xl font-bold mb-4">Important Notice</h3>
							<p className="text-muted-foreground mb-4">
								These terms may be updated from time to time. Continued use of our services constitutes acceptance of
								any changes. We will notify users of significant changes.
							</p>
							<p className="text-sm text-muted-foreground">
								For questions about these terms, contact us at legal@cozymart.com
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default TermsPage;
