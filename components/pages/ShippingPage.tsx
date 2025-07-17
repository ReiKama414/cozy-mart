"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Clock, MapPin, Shield, Zap, Globe, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ShippingPage = () => {
	const shippingOptions = [
		{
			name: "Standard Shipping",
			price: "¥500",
			time: "3-5 business days",
			description: "Reliable delivery for everyday orders",
			icon: Package,
			color: "text-blue-600",
			bg: "bg-blue-100",
			features: ["Tracking included", "Signature not required", "Most popular choice"],
		},
		{
			name: "Express Shipping",
			price: "¥1,200",
			time: "1-2 business days",
			description: "Fast delivery when you need it quickly",
			icon: Zap,
			color: "text-orange-600",
			bg: "bg-orange-100",
			features: ["Priority handling", "Tracking included", "Signature required"],
		},
		{
			name: "Free Shipping",
			price: "Free",
			time: "5-7 business days",
			description: "Free on orders over ¥3,000",
			icon: Gift,
			color: "text-green-600",
			bg: "bg-green-100",
			features: ["No minimum for members", "Eco-friendly packaging", "Tracking included"],
		},
		{
			name: "Same Day Delivery",
			price: "¥2,000",
			time: "Same day",
			description: "Available in Tokyo metropolitan area",
			icon: Truck,
			color: "text-purple-600",
			bg: "bg-purple-100",
			features: ["Order by 2 PM", "Tokyo area only", "Premium service"],
		},
	];

	const internationalShipping = [
		{
			region: "Asia Pacific",
			countries: ["South Korea", "Taiwan", "Hong Kong", "Singapore"],
			time: "5-10 business days",
			price: "From ¥2,500",
		},
		{
			region: "North America",
			countries: ["United States", "Canada"],
			time: "7-14 business days",
			price: "From ¥3,500",
		},
		{
			region: "Europe",
			countries: ["United Kingdom", "Germany", "France", "Netherlands"],
			time: "10-15 business days",
			price: "From ¥4,000",
		},
		{
			region: "Oceania",
			countries: ["Australia", "New Zealand"],
			time: "8-12 business days",
			price: "From ¥3,000",
		},
	];

	const packagingFeatures = [
		{
			title: "Eco-Friendly Materials",
			description: "Recyclable and biodegradable packaging materials",
			icon: "🌱",
		},
		{
			title: "Protective Packaging",
			description: "Items carefully wrapped to prevent damage during transit",
			icon: "🛡️",
		},
		{
			title: "Beautiful Presentation",
			description: "Unboxing experience designed to bring joy",
			icon: "✨",
		},
		{
			title: "Gift Wrapping",
			description: "Free gift wrapping available for special occasions",
			icon: "🎁",
		},
	];

	const trackingSteps = [
		{
			status: "Order Confirmed",
			description: "Your order has been received and is being prepared",
			icon: "📋",
		},
		{
			status: "Processing",
			description: "Items are being picked and packed in our warehouse",
			icon: "📦",
		},
		{
			status: "Shipped",
			description: "Your package is on its way to you",
			icon: "🚚",
		},
		{
			status: "Out for Delivery",
			description: "Package is with the delivery driver",
			icon: "🏃‍♂️",
		},
		{
			status: "Delivered",
			description: "Package has been successfully delivered",
			icon: "✅",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
						<Truck className="h-5 w-5 text-blue-600" />
						<span className="text-blue-700 font-semibold">Shipping Information</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">🚚 Fast & Reliable Shipping</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						We deliver your cozy essentials quickly and safely, with multiple shipping options to fit your needs. Track
						your order every step of the way!
					</p>
				</motion.div>

				{/* Shipping Options */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">📦 Shipping Options</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{shippingOptions.map((option, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6">
									<div className={`w-16 h-16 ${option.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
										<option.icon className={`h-8 w-8 ${option.color}`} />
									</div>
									<h3 className="font-semibold text-lg text-center mb-2">{option.name}</h3>
									<div className="text-center mb-3">
										<span className="text-2xl font-bold text-primary">{option.price}</span>
										<p className="text-sm text-muted-foreground">{option.time}</p>
									</div>
									<p className="text-sm text-muted-foreground text-center mb-4">{option.description}</p>
									<div className="space-y-2">
										{option.features.map((feature, fIndex) => (
											<div key={fIndex} className="flex items-center text-xs">
												<div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
												<span>{feature}</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Tabs for detailed information */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16">
					<Tabs defaultValue="domestic" className="w-full">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="domestic">Domestic</TabsTrigger>
							<TabsTrigger value="international">International</TabsTrigger>
							<TabsTrigger value="tracking">Tracking</TabsTrigger>
							<TabsTrigger value="packaging">Packaging</TabsTrigger>
						</TabsList>

						<TabsContent value="domestic" className="mt-8">
							<Card>
								<CardContent className="p-8">
									<h3 className="text-xl font-bold mb-6 flex items-center">
										<MapPin className="mr-2 h-6 w-6 text-primary" />
										Domestic Shipping (Japan)
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div>
											<h4 className="font-semibold mb-4">🏙️ Major Cities</h4>
											<ul className="space-y-2 text-sm">
												<li className="flex justify-between">
													<span>Tokyo, Osaka, Kyoto</span>
													<Badge variant="secondary">1-2 days</Badge>
												</li>
												<li className="flex justify-between">
													<span>Yokohama, Kobe, Nagoya</span>
													<Badge variant="secondary">2-3 days</Badge>
												</li>
												<li className="flex justify-between">
													<span>Fukuoka, Sapporo</span>
													<Badge variant="secondary">3-4 days</Badge>
												</li>
											</ul>
										</div>
										<div>
											<h4 className="font-semibold mb-4">🏔️ Remote Areas</h4>
											<ul className="space-y-2 text-sm">
												<li className="flex justify-between">
													<span>Okinawa</span>
													<Badge variant="secondary">4-6 days</Badge>
												</li>
												<li className="flex justify-between">
													<span>Hokkaido (rural)</span>
													<Badge variant="secondary">3-5 days</Badge>
												</li>
												<li className="flex justify-between">
													<span>Mountain regions</span>
													<Badge variant="secondary">4-7 days</Badge>
												</li>
											</ul>
										</div>
									</div>
									<div className="mt-6 p-4 bg-green-50 rounded-lg">
										<p className="text-sm text-green-700">
											💡 <strong>Pro Tip:</strong> Orders placed before 2 PM on weekdays are processed the same day!
										</p>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="international" className="mt-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{internationalShipping.map((region, index) => (
									<Card key={index}>
										<CardContent className="p-6">
											<div className="flex items-center space-x-2 mb-4">
												<Globe className="h-5 w-5 text-primary" />
												<h4 className="font-semibold text-lg">{region.region}</h4>
											</div>
											<div className="space-y-3">
												<div>
													<span className="font-medium">Countries: </span>
													<span className="text-muted-foreground text-sm">{region.countries.join(", ")}</span>
												</div>
												<div className="flex items-center space-x-2">
													<Clock className="h-4 w-4 text-blue-600" />
													<span className="text-sm">{region.time}</span>
												</div>
												<div className="flex items-center space-x-2">
													<Package className="h-4 w-4 text-green-600" />
													<span className="text-sm font-medium">{region.price}</span>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
							<Card className="mt-6">
								<CardContent className="p-6">
									<h4 className="font-semibold mb-4 flex items-center">
										<Shield className="mr-2 h-5 w-5 text-primary" />
										International Shipping Notes
									</h4>
									<ul className="space-y-2 text-sm text-muted-foreground">
										<li>• Customs duties and taxes may apply and are the responsibility of the recipient</li>
										<li>• Delivery times may vary due to customs processing</li>
										<li>• Some items may have shipping restrictions to certain countries</li>
										<li>• Free shipping promotions apply to domestic orders only</li>
									</ul>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="tracking" className="mt-8">
							<Card>
								<CardContent className="p-8">
									<h3 className="text-xl font-bold mb-6 text-center">📍 Track Your Order</h3>
									<div className="space-y-6">
										{trackingSteps.map((step, index) => (
											<div key={index} className="flex items-center space-x-4">
												<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
													<span className="text-2xl">{step.icon}</span>
												</div>
												<div className="flex-1">
													<h4 className="font-semibold">{step.status}</h4>
													<p className="text-muted-foreground text-sm">{step.description}</p>
												</div>
												{index < trackingSteps.length - 1 && <div className="w-px h-8 bg-border ml-6" />}
											</div>
										))}
									</div>
									<div className="mt-8 text-center">
										<Button className="rounded-full px-8">Track Your Order</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="packaging" className="mt-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								{packagingFeatures.map((feature, index) => (
									<Card key={index}>
										<CardContent className="p-6 text-center">
											<div className="text-4xl mb-3">{feature.icon}</div>
											<h4 className="font-semibold mb-2">{feature.title}</h4>
											<p className="text-sm text-muted-foreground">{feature.description}</p>
										</CardContent>
									</Card>
								))}
							</div>
							<Card className="bg-gradient-to-r from-green-50 to-blue-50">
								<CardContent className="p-8 text-center">
									<h4 className="text-xl font-bold mb-4">🌍 Our Commitment to Sustainability</h4>
									<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
										We use minimal, recyclable packaging materials and partner with carbon-neutral shipping providers
										whenever possible. Every package is designed to protect your items while protecting our planet.
									</p>
									<Button variant="outline" className="rounded-full">
										Learn More About Our Sustainability
									</Button>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</motion.div>

				{/* Contact Support */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
					<Card className="bg-gradient-to-r from-blue-50 to-purple-50">
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Questions About Shipping? 📞</h3>
							<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
								Our shipping team is here to help! Whether you need to change your delivery address, upgrade your
								shipping speed, or track a package, we're just a message away.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" className="rounded-full">
									Contact Shipping Support
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

export default ShippingPage;
