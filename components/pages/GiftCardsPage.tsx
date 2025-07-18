"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Heart, Star, CreditCard, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const GiftCardsPage = () => {
	const [selectedAmount, setSelectedAmount] = useState(5000);
	const [customAmount, setCustomAmount] = useState("");
	const [recipientEmail, setRecipientEmail] = useState("");
	const [senderName, setSenderName] = useState("");
	const [message, setMessage] = useState("");
	const [selectedDesign, setSelectedDesign] = useState("cozy");

	const predefinedAmounts = [1000, 3000, 5000, 10000, 20000];

	const giftCardDesigns = [
		{
			id: "cozy",
			name: "Cozy Comfort",
			image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400",
			gradient: "from-blush-100 to-sage-100",
		},
		{
			id: "modern",
			name: "Modern Minimalist",
			image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
			gradient: "from-gray-100 to-blue-100",
		},
		{
			id: "festive",
			name: "Festive Joy",
			image: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400",
			gradient: "from-red-100 to-green-100",
		},
		{
			id: "elegant",
			name: "Elegant Gold",
			image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400",
			gradient: "from-yellow-100 to-orange-100",
		},
	];

	const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2 mb-4">
						<Gift className="h-5 w-5 text-pink-600" />
						<span className="text-pink-700 font-semibold">Gift Cards</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">🎁 Perfect Gifts for Everyone</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Give the gift of comfort and choice! Our digital gift cards are perfect for any occasion and can be used on
						any item in our cozy collection.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Gift Card Customization */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
						{/* Amount Selection */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4 flex items-center">
									<CreditCard className="mr-2 h-5 w-5 text-primary" />
									Choose Amount
								</h3>

								<div className="grid grid-cols-3 gap-3 mb-4">
									{predefinedAmounts.map((amount) => (
										<Button
											key={amount}
											variant={selectedAmount === amount && !customAmount ? "default" : "outline"}
											onClick={() => {
												setSelectedAmount(amount);
												setCustomAmount("");
											}}
											className="rounded-full">
											¥{amount.toLocaleString()}
										</Button>
									))}
								</div>

								<div className="space-y-2">
									<Label htmlFor="custom-amount">Custom Amount</Label>
									<Input
										id="custom-amount"
										type="number"
										placeholder="Enter custom amount"
										value={customAmount}
										onChange={(e) => setCustomAmount(e.target.value)}
										className="rounded-full"
									/>
								</div>
							</CardContent>
						</Card>

						{/* Design Selection */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4">Choose Design</h3>
								<div className="grid grid-cols-2 gap-4">
									{giftCardDesigns.map((design) => (
										<button
											key={design.id}
											onClick={() => setSelectedDesign(design.id)}
											className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
												selectedDesign === design.id ? "border-primary" : "border-transparent"
											}`}>
											<div
												className={`aspect-video bg-gradient-to-br ${design.gradient} p-4 flex items-center justify-center`}>
												<span className="font-semibold text-sm">{design.name}</span>
											</div>
											{selectedDesign === design.id && (
												<div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
													<span className="text-white text-xs">✓</span>
												</div>
											)}
										</button>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Recipient Information */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4 flex items-center">
									<Mail className="mr-2 h-5 w-5 text-primary" />
									Recipient Details
								</h3>

								<div className="space-y-4">
									<div>
										<Label htmlFor="recipient-email">Recipient Email</Label>
										<Input
											id="recipient-email"
											type="email"
											placeholder="recipient@example.com"
											value={recipientEmail}
											onChange={(e) => setRecipientEmail(e.target.value)}
											className="rounded-full"
										/>
									</div>

									<div>
										<Label htmlFor="sender-name">Your Name</Label>
										<Input
											id="sender-name"
											placeholder="Your name"
											value={senderName}
											onChange={(e) => setSenderName(e.target.value)}
											className="rounded-full"
										/>
									</div>

									<div>
										<Label htmlFor="message">Personal Message (Optional)</Label>
										<Textarea
											id="message"
											placeholder="Write a heartfelt message..."
											value={message}
											onChange={(e) => setMessage(e.target.value)}
											className="rounded-lg"
											rows={3}
										/>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Delivery Options */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4">Delivery Options</h3>
								<Select defaultValue="instant">
									<SelectTrigger className="rounded-full">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="instant">Send Instantly</SelectItem>
										<SelectItem value="scheduled">Schedule for Later</SelectItem>
									</SelectContent>
								</Select>
							</CardContent>
						</Card>
					</motion.div>

					{/* Preview and Purchase */}
					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
						{/* Gift Card Preview */}
						<Card className="overflow-hidden">
							<CardContent className="p-0">
								<div
									className={`bg-gradient-to-br ${
										giftCardDesigns.find((d) => d.id === selectedDesign)?.gradient
									} p-8 text-center relative`}>
									<div className="absolute top-4 right-4">
										<Badge className="bg-white/20 text-gray-700">Gift Card</Badge>
									</div>

									<div className="mb-6">
										<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
											<Gift className="h-8 w-8 text-gray-700" />
										</div>
										<h3 className="text-2xl font-bold text-gray-800 mb-2">CozyMart</h3>
										<p className="text-gray-600">Gift Card</p>
									</div>

									<div className="bg-white/30 rounded-lg p-4 mb-6">
										<div className="text-3xl font-bold text-gray-800">¥{finalAmount.toLocaleString()}</div>
									</div>

									{senderName && <p className="text-sm text-gray-600">From: {senderName}</p>}

									{message && (
										<div className="mt-4 p-3 bg-white/20 rounded-lg">
											<p className="text-sm text-gray-700 italic">"{message}"</p>
										</div>
									)}
								</div>
							</CardContent>
						</Card>

						{/* Purchase Summary */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4">Order Summary</h3>

								<div className="space-y-3 mb-6">
									<div className="flex justify-between">
										<span>Gift Card Value</span>
										<span>¥{finalAmount.toLocaleString()}</span>
									</div>
									<div className="flex justify-between">
										<span>Processing Fee</span>
										<span className="text-green-600">Free</span>
									</div>
									<div className="border-t pt-3">
										<div className="flex justify-between font-bold text-lg">
											<span>Total</span>
											<span className="text-primary">¥{finalAmount.toLocaleString()}</span>
										</div>
									</div>
								</div>

								<Button
									className="w-full rounded-full mb-4"
									size="lg"
									disabled={!recipientEmail || !senderName || finalAmount < 500}>
									<Gift className="mr-2 h-5 w-5" />
									Purchase Gift Card
								</Button>

								<div className="text-center text-sm text-muted-foreground">
									<p>🔒 Secure payment • 📧 Instant delivery</p>
									<p className="mt-1">Gift cards never expire and can be used on any item</p>
								</div>
							</CardContent>
						</Card>

						{/* Features */}
						<Card>
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4">Why Choose Our Gift Cards?</h3>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
											<span className="text-green-600">✓</span>
										</div>
										<div className="flex-1">
											<p className="text-sm text-gray-700">Instant delivery via email for last-minute gifts</p>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
											<span className="text-green-600">✓</span>
										</div>
										<div className="flex-1">
											<p className="text-sm text-gray-700">Secure payment with Stripe</p>
										</div>
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

export default GiftCardsPage;