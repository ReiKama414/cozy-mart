"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		category: "",
		message: "",
	});

	const contactMethods = [
		{
			icon: Mail,
			title: "Email Support",
			description: "Get help via email within 24 hours",
			contact: "support@cozy.com",
			available: "24/7",
			color: "text-blue-600",
			bg: "bg-blue-100",
		},
		{
			icon: Phone,
			title: "Phone Support",
			description: "Speak directly with our team",
			contact: "+1 (414) 123-4567",
			available: "9:00 AM - 6:00 PM JST",
			color: "text-green-600",
			bg: "bg-green-100",
		},
		{
			icon: MessageCircle,
			title: "Live Chat",
			description: "Instant help through live chat",
			contact: "Available on website",
			available: "9:00 AM - 9:00 PM JST",
			color: "text-purple-600",
			bg: "bg-purple-100",
		},
	];

	const faqCategories = [
		{
			title: "Orders & Shipping",
			questions: [
				"How can I track my order?",
				"What are your shipping options?",
				"Can I change my shipping address?",
				"When will my order arrive?",
			],
		},
		{
			title: "Returns & Exchanges",
			questions: [
				"How do I return an item?",
				"What is your return policy?",
				"Can I exchange for a different size?",
				"How long do refunds take?",
			],
		},
		{
			title: "Products & Stock",
			questions: [
				"When will items be back in stock?",
				"How do I care for my products?",
				"Are your products eco-friendly?",
				"Do you offer gift wrapping?",
			],
		},
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
						<Headphones className="h-5 w-5 text-blue-600" />
						<span className="text-blue-700 font-semibold">Customer Support</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">💬 We're Here to Help</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Have a question or need assistance? Our friendly support team is ready to help you with anything you need.
						We're committed to making your experience as cozy as possible!
					</p>
				</motion.div>

				{/* Contact Methods */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
					{contactMethods.map((method, index) => (
						<Card key={index} className="card-hover">
							<CardContent className="p-6 text-center">
								<div className={`w-16 h-16 ${method.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
									<method.icon className={`h-8 w-8 ${method.color}`} />
								</div>
								<h3 className="font-semibold text-lg mb-2">{method.title}</h3>
								<p className="text-muted-foreground text-sm mb-3">{method.description}</p>
								<div className="space-y-1">
									<p className="font-medium">{method.contact}</p>
									<p className="text-sm text-muted-foreground flex items-center justify-center">
										<Clock className="h-4 w-4 mr-1" />
										{method.available}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
						<Card>
							<CardContent className="p-8">
								<h2 className="text-2xl font-bold mb-6 flex items-center">
									<Send className="mr-2 h-6 w-6 text-primary" />
									Send us a Message
								</h2>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="name">Name *</Label>
											<Input
												id="name"
												value={formData.name}
												onChange={(e) => handleInputChange("name", e.target.value)}
												className="rounded-full"
												required
											/>
										</div>
										<div>
											<Label htmlFor="email">Email *</Label>
											<Input
												id="email"
												type="email"
												value={formData.email}
												onChange={(e) => handleInputChange("email", e.target.value)}
												className="rounded-full"
												required
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="category">Category</Label>
										<Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
											<SelectTrigger className="rounded-full">
												<SelectValue placeholder="Select a category" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="order">Order Inquiry</SelectItem>
												<SelectItem value="product">Product Question</SelectItem>
												<SelectItem value="return">Return/Exchange</SelectItem>
												<SelectItem value="technical">Technical Support</SelectItem>
												<SelectItem value="feedback">Feedback</SelectItem>
												<SelectItem value="other">Other</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div>
										<Label htmlFor="subject">Subject *</Label>
										<Input
											id="subject"
											value={formData.subject}
											onChange={(e) => handleInputChange("subject", e.target.value)}
											className="rounded-full"
											required
										/>
									</div>

									<div>
										<Label htmlFor="message">Message *</Label>
										<Textarea
											id="message"
											value={formData.message}
											onChange={(e) => handleInputChange("message", e.target.value)}
											className="rounded-lg min-h-[120px]"
											placeholder="Please describe your question or concern in detail..."
											required
										/>
									</div>

									<Button type="submit" className="w-full rounded-full" size="lg">
										<Send className="mr-2 h-5 w-5" />
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div>

					{/* FAQ and Additional Info */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className="space-y-8">
						{/* Store Location */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4 flex items-center">
									<MapPin className="mr-2 h-5 w-5 text-primary" />
									Visit Our Store
								</h3>
								<div className="space-y-3">
									<div>
										<p className="font-medium">CozyMart Flagship Store</p>
										<p className="text-muted-foreground">414 Sakura Street, Tokyo, Japan</p>
										<p className="text-muted-foreground">Tokyo 150-0001, Japan</p>
									</div>
									<div>
										<p className="font-medium">Store Hours:</p>
										<p className="text-muted-foreground">Mon-Sat: 10:00 AM - 8:00 PM</p>
										<p className="text-muted-foreground">Sunday: 11:00 AM - 7:00 PM</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Quick FAQ */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4">Quick FAQ</h3>
								<div className="space-y-4">
									{faqCategories.map((category, index) => (
										<div key={index}>
											<h4 className="font-medium mb-2">{category.title}</h4>
											<ul className="space-y-1">
												{category.questions.slice(0, 2).map((question, qIndex) => (
													<li key={qIndex} className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
														• {question}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
								<Button variant="outline" className="w-full mt-4 rounded-full">
									View All FAQs
								</Button>
							</CardContent>
						</Card>

						{/* Response Time */}
						<Card className="bg-gradient-to-r from-green-50 to-blue-50">
							<CardContent className="p-6 text-center">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Heart className="h-8 w-8 text-green-600" />
								</div>
								<h3 className="font-semibold text-lg mb-2">We Care About You</h3>
								<p className="text-muted-foreground mb-4">
									Our average response time is under 2 hours during business hours. We're committed to providing you
									with the best support experience.
								</p>
								<div className="grid grid-cols-2 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-green-600">&lt; 2hrs</div>
										<div className="text-sm text-muted-foreground">Response Time</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-green-600">98%</div>
										<div className="text-sm text-muted-foreground">Satisfaction Rate</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
