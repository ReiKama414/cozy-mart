"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Package, Clock, CheckCircle, AlertCircle, Truck, CreditCard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ReturnsPage = () => {
	const [orderNumber, setOrderNumber] = useState("");
	const [email, setEmail] = useState("");

	const returnProcess = [
		{
			step: 1,
			title: "Initiate Return",
			description: "Start your return request online or contact our support team",
			icon: FileText,
			color: "text-blue-600",
			bg: "bg-blue-100",
		},
		{
			step: 2,
			title: "Pack Your Items",
			description: "Carefully pack items in original packaging with all accessories",
			icon: Package,
			color: "text-orange-600",
			bg: "bg-orange-100",
		},
		{
			step: 3,
			title: "Ship Back to Us",
			description: "Use our prepaid return label or drop off at designated locations",
			icon: Truck,
			color: "text-green-600",
			bg: "bg-green-100",
		},
		{
			step: 4,
			title: "Receive Refund",
			description: "Get your refund within 5-7 business days after we receive your return",
			icon: CreditCard,
			color: "text-purple-600",
			bg: "bg-purple-100",
		},
	];

	const returnPolicies = [
		{
			category: "Home & Living",
			items: ["Pillows", "Blankets", "Rugs", "Decor"],
			period: "30 days",
			conditions: "Unused, original packaging",
			icon: "🏠",
		},
		{
			category: "Kitchen & Dining",
			items: ["Mugs", "Plates", "Tea Sets", "Utensils"],
			period: "30 days",
			conditions: "Unused, original packaging",
			icon: "🍽️",
		},
		{
			category: "Fashion",
			items: ["Slippers", "Accessories"],
			period: "30 days",
			conditions: "Unworn, tags attached",
			icon: "👗",
		},
		{
			category: "Electronics",
			items: ["Lamps", "Gadgets"],
			period: "14 days",
			conditions: "Original packaging, all accessories",
			icon: "💡",
		},
	];

	const faqItems = [
		{
			question: "How long do I have to return an item?",
			answer:
				"Most items can be returned within 30 days of delivery. Electronics have a 14-day return window. Check your order confirmation for specific details.",
		},
		{
			question: "Do I need to pay for return shipping?",
			answer:
				"We provide free return shipping for most items. You'll receive a prepaid return label with your return authorization.",
		},
		{
			question: "When will I receive my refund?",
			answer:
				"Refunds are processed within 5-7 business days after we receive and inspect your returned items. The refund will go back to your original payment method.",
		},
		{
			question: "Can I exchange an item instead of returning it?",
			answer:
				"Yes! You can exchange items for a different size, color, or similar product. Contact our support team to arrange an exchange.",
		},
		{
			question: "What if my item arrived damaged?",
			answer:
				"If your item arrived damaged or defective, contact us immediately. We'll arrange a free return and send a replacement or full refund.",
		},
		{
			question: "Are there any items that cannot be returned?",
			answer:
				"Personalized items, gift cards, and items marked as final sale cannot be returned. Food items and hygiene products also have restrictions.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
						<RotateCcw className="h-5 w-5 text-green-600" />
						<span className="text-green-700 font-semibold">Returns & Exchanges</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">🔄 Easy Returns & Exchanges</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Not completely satisfied? No worries! We offer hassle-free returns and exchanges to ensure you're completely
						happy with your cozy purchases.
					</p>
				</motion.div>

				{/* Quick Return Form */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-16">
					<Card className="max-w-2xl mx-auto">
						<CardContent className="p-8">
							<h2 className="text-2xl font-bold text-center mb-6">🚀 Start Your Return</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
								<div>
									<Label htmlFor="order-number">Order Number</Label>
									<Input
										id="order-number"
										placeholder="e.g., CM-2024-001234"
										value={orderNumber}
										onChange={(e) => setOrderNumber(e.target.value)}
										className="rounded-full"
									/>
								</div>
								<div>
									<Label htmlFor="email">Email Address</Label>
									<Input
										id="email"
										type="email"
										placeholder="your@email.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="rounded-full"
									/>
								</div>
							</div>
							<Button className="w-full rounded-full" size="lg">
								<RotateCcw className="mr-2 h-5 w-5" />
								Start Return Process
							</Button>
						</CardContent>
					</Card>
				</motion.div>

				{/* Return Process */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">📋 How Returns Work</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{returnProcess.map((step, index) => (
							<Card key={index} className="card-hover relative">
								<CardContent className="p-6 text-center">
									<div className={`w-16 h-16 ${step.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
										<step.icon className={`h-8 w-8 ${step.color}`} />
									</div>
									<div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
										{step.step}
									</div>
									<h3 className="font-semibold text-lg mb-2">{step.title}</h3>
									<p className="text-sm text-muted-foreground">{step.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Tabs for detailed information */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mb-16">
					<Tabs defaultValue="policy" className="w-full">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="policy">Return Policy</TabsTrigger>
							<TabsTrigger value="timeline">Timeline</TabsTrigger>
							<TabsTrigger value="faq">FAQ</TabsTrigger>
						</TabsList>

						<TabsContent value="policy" className="mt-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{returnPolicies.map((policy, index) => (
									<Card key={index}>
										<CardContent className="p-6">
											<div className="flex items-center space-x-3 mb-4">
												<span className="text-2xl">{policy.icon}</span>
												<h3 className="font-semibold text-lg">{policy.category}</h3>
											</div>
											<div className="space-y-3">
												<div>
													<span className="font-medium">Items: </span>
													<span className="text-muted-foreground">{policy.items.join(", ")}</span>
												</div>
												<div className="flex items-center space-x-2">
													<Clock className="h-4 w-4 text-green-600" />
													<span className="font-medium">{policy.period} return window</span>
												</div>
												<div className="flex items-center space-x-2">
													<CheckCircle className="h-4 w-4 text-blue-600" />
													<span className="text-sm text-muted-foreground">{policy.conditions}</span>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="timeline" className="mt-8">
							<Card>
								<CardContent className="p-8">
									<h3 className="text-xl font-bold mb-6 text-center">⏰ Return Timeline</h3>
									<div className="space-y-6">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
												<span className="font-bold text-blue-600">1</span>
											</div>
											<div>
												<h4 className="font-semibold">Day 1: Return Request</h4>
												<p className="text-muted-foreground">
													Submit your return request online or via customer service
												</p>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
												<span className="font-bold text-orange-600">2-3</span>
											</div>
											<div>
												<h4 className="font-semibold">Days 2-3: Package & Ship</h4>
												<p className="text-muted-foreground">Pack your items and ship using our prepaid label</p>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
												<span className="font-bold text-green-600">5-7</span>
											</div>
											<div>
												<h4 className="font-semibold">Days 5-7: Processing</h4>
												<p className="text-muted-foreground">We receive and inspect your return</p>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
												<span className="font-bold text-purple-600">7-14</span>
											</div>
											<div>
												<h4 className="font-semibold">Days 7-14: Refund</h4>
												<p className="text-muted-foreground">Refund processed to your original payment method</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="faq" className="mt-8">
							<div className="space-y-4">
								{faqItems.map((item, index) => (
									<Card key={index}>
										<CardContent className="p-6">
											<h4 className="font-semibold mb-2 flex items-center">
												<AlertCircle className="h-4 w-4 mr-2 text-primary" />
												{item.question}
											</h4>
											<p className="text-muted-foreground pl-6">{item.answer}</p>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</motion.div>

				{/* Contact Support */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
					<Card className="bg-gradient-to-r from-blue-50 to-green-50">
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Need Help with Your Return? 🤝</h3>
							<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
								Our customer service team is here to make your return experience as smooth as possible. Don't hesitate
								to reach out if you have any questions!
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" className="rounded-full">
									Contact Support
								</Button>
								<Button size="lg" variant="outline" className="rounded-full">
									Live Chat
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default ReturnsPage;
