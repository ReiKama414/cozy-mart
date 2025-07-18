"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, Shirt, Home, Coffee, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const SizeGuidePage = () => {
	const [selectedCategory, setSelectedCategory] = useState("home");

	const sizeCategories = [
		{
			id: "home",
			name: "Home & Living",
			icon: Home,
			color: "text-blue-600",
			bg: "bg-blue-100",
		},
		{
			id: "kitchen",
			name: "Kitchen & Dining",
			icon: Coffee,
			color: "text-green-600",
			bg: "bg-green-100",
		},
		{
			id: "decor",
			name: "Decor & Art",
			icon: Palette,
			color: "text-purple-600",
			bg: "bg-purple-100",
		},
		{
			id: "fashion",
			name: "Fashion",
			icon: Shirt,
			color: "text-pink-600",
			bg: "bg-pink-100",
		},
	];

	const homeSizes = {
		pillows: [
			{ size: "Small", dimensions: "30cm × 30cm", description: "Perfect for accent pillows" },
			{ size: "Medium", dimensions: "45cm × 45cm", description: "Standard throw pillow size" },
			{ size: "Large", dimensions: "60cm × 60cm", description: "Statement floor pillows" },
		],
		blankets: [
			{ size: "Throw", dimensions: "130cm × 150cm", description: "Single person coverage" },
			{ size: "Twin", dimensions: "150cm × 200cm", description: "Single bed size" },
			{ size: "Queen", dimensions: "200cm × 230cm", description: "Double bed size" },
			{ size: "King", dimensions: "230cm × 260cm", description: "Large bed size" },
		],
		rugs: [
			{ size: "Small", dimensions: "60cm × 90cm", description: "Accent rug for small spaces" },
			{ size: "Medium", dimensions: "120cm × 180cm", description: "Living room centerpiece" },
			{ size: "Large", dimensions: "200cm × 300cm", description: "Room-defining statement piece" },
		],
	};

	const kitchenSizes = {
		mugs: [
			{ size: "Espresso", dimensions: "60ml", description: "Perfect for strong coffee" },
			{ size: "Standard", dimensions: "250ml", description: "Regular coffee or tea" },
			{ size: "Large", dimensions: "400ml", description: "Generous morning cup" },
		],
		plates: [
			{ size: "Dessert", dimensions: "18cm diameter", description: "Small plates for desserts" },
			{ size: "Salad", dimensions: "22cm diameter", description: "Side dishes and salads" },
			{ size: "Dinner", dimensions: "28cm diameter", description: "Main course plates" },
		],
	};

	const fashionSizes = {
		slippers: [
			{ size: "S (22-23cm)", dimensions: "EU 35-36", description: "Small feet" },
			{ size: "M (24-25cm)", dimensions: "EU 37-38", description: "Medium feet" },
			{ size: "L (26-27cm)", dimensions: "EU 39-40", description: "Large feet" },
			{ size: "XL (28-29cm)", dimensions: "EU 41-42", description: "Extra large feet" },
		],
	};

	const measurementTips = [
		{
			title: "Use a Soft Measuring Tape",
			description: "For the most accurate measurements, use a flexible measuring tape rather than a rigid ruler.",
			icon: "📏",
		},
		{
			title: "Measure Twice",
			description: "Always double-check your measurements to ensure accuracy before making a purchase.",
			icon: "✅",
		},
		{
			title: "Consider Your Space",
			description: "Think about how the item will fit in your space and leave room for comfortable movement.",
			icon: "🏠",
		},
		{
			title: "Check Product Details",
			description: "Always refer to individual product pages for specific sizing information and variations.",
			icon: "📋",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
						<Ruler className="h-5 w-5 text-orange-600" />
						<span className="text-orange-700 font-semibold">Size Guide</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">📐 Find Your Perfect Fit</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Our comprehensive size guide helps you choose the perfect dimensions for all your cozy essentials. From
						pillows to mugs, we've got you covered!
					</p>
				</motion.div>

				{/* Category Tabs */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-12">
					<Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
						<TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
							{sizeCategories.map((category) => (
								<TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
									<category.icon className="h-4 w-4" />
									<span className="hidden sm:inline">{category.name}</span>
								</TabsTrigger>
							))}
						</TabsList>

						{/* Home & Living Sizes */}
						<TabsContent value="home" className="space-y-8">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-4 flex items-center">🛏️ Pillows & Cushions</h3>
										<div className="space-y-3">
											{homeSizes.pillows.map((item, index) => (
												<div key={index} className="border-b pb-3 last:border-b-0">
													<div className="flex justify-between items-start mb-1">
														<span className="font-medium">{item.size}</span>
														<Badge variant="secondary">{item.dimensions}</Badge>
													</div>
													<p className="text-sm text-muted-foreground">{item.description}</p>
												</div>
											))}
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-4 flex items-center">🛋️ Blankets & Throws</h3>
										<div className="space-y-3">
											{homeSizes.blankets.map((item, index) => (
												<div key={index} className="border-b pb-3 last:border-b-0">
													<div className="flex justify-between items-start mb-1">
														<span className="font-medium">{item.size}</span>
														<Badge variant="secondary">{item.dimensions}</Badge>
													</div>
													<p className="text-sm text-muted-foreground">{item.description}</p>
												</div>
											))}
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-4 flex items-center">Rugs & Mats</h3>
										<div className="space-y-3">
											{homeSizes.rugs.map((item, index) => (
												<div key={index} className="border-b pb-3 last:border-b-0">
													<div className="flex justify-between items-start mb-1">
														<span className="font-medium">{item.size}</span>
														<Badge variant="secondary">{item.dimensions}</Badge>
													</div>
													<p className="text-sm text-muted-foreground">{item.description}</p>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						{/* Kitchen & Dining Sizes */}
						<TabsContent value="kitchen" className="space-y-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-4 flex items-center">☕ Mugs & Cups</h3>
										<div className="space-y-3">
											{kitchenSizes.mugs.map((item, index) => (
												<div key={index} className="border-b pb-3 last:border-b-0">
													<div className="flex justify-between items-start mb-1">
														<span className="font-medium">{item.size}</span>
														<Badge variant="secondary">{item.dimensions}</Badge>
													</div>
													<p className="text-sm text-muted-foreground">{item.description}</p>
												</div>
											))}
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-4 flex items-center">🍽️ Plates & Bowls</h3>
										<div className="space-y-3">
											{kitchenSizes.plates.map((item, index) => (
												<div key={index} className="border-b pb-3 last:border-b-0">
													<div className="flex justify-between items-start mb-1">
														<span className="font-medium">{item.size}</span>
														<Badge variant="secondary">{item.dimensions}</Badge>
													</div>
													<p className="text-sm text-muted-foreground">{item.description}</p>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						{/* Fashion Sizes */}
						<TabsContent value="fashion" className="space-y-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Card>
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-4 flex items-center">🥿 Slippers & Footwear</h3>
										<div className="space-y-3">
											{fashionSizes.slippers.map((item, index) => (
												<div key={index} className="border-b pb-3 last:border-b-0">
													<div className="flex justify-between items-start mb-1">
														<span className="font-medium">{item.size}</span>
														<Badge variant="secondary">{item.dimensions}</Badge>
													</div>
													<p className="text-sm text-muted-foreground">{item.description}</p>
												</div>
											))}
										</div>
									</CardContent>
								</Card>

								<Card className="bg-gradient-to-br from-pink-50 to-purple-50">
									<CardContent className="p-6">
										<h3 className="font-semibold text-lg mb-4">👣 How to Measure Your Feet</h3>
										<div className="space-y-3 text-sm">
											<div className="flex items-start space-x-2">
												<span className="font-bold text-primary">1.</span>
												<span>Place your foot on a piece of paper</span>
											</div>
											<div className="flex items-start space-x-2">
												<span className="font-bold text-primary">2.</span>
												<span>Mark the heel and longest toe</span>
											</div>
											<div className="flex items-start space-x-2">
												<span className="font-bold text-primary">3.</span>
												<span>Measure the distance between marks</span>
											</div>
											<div className="flex items-start space-x-2">
												<span className="font-bold text-primary">4.</span>
												<span>Compare with our size chart above</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						{/* Decor Sizes */}
						<TabsContent value="decor" className="space-y-8">
							<Card>
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<Palette className="h-8 w-8 text-purple-600" />
									</div>
									<h3 className="font-semibold text-lg mb-4">🎨 Decor & Art Sizing</h3>
									<p className="text-muted-foreground mb-6">
										Our decor items come in various artistic sizes. Each product page contains specific dimensions and
										placement suggestions to help you create the perfect aesthetic in your space.
									</p>
									<Button variant="outline" className="rounded-full">
										Browse Decor Collection
									</Button>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</motion.div>

				{/* Measurement Tips */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mb-12">
					<h2 className="text-2xl font-bold text-center mb-8">💡 Measurement Tips</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{measurementTips.map((tip, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6 text-center">
									<div className="text-3xl mb-3">{tip.icon}</div>
									<h3 className="font-semibold mb-2">{tip.title}</h3>
									<p className="text-sm text-muted-foreground">{tip.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Help Section */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
					<Card className="bg-gradient-to-r from-blue-50 to-purple-50">
						<CardContent className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Still Need Help? 🤔</h3>
							<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
								If you're unsure about sizing or have specific questions about any of our products, our friendly
								customer service team is here to help you find the perfect fit!
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

export default SizeGuidePage;
