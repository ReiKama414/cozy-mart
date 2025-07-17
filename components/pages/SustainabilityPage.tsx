"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, Package, Truck, Heart, Target, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SustainabilityPage = () => {
	const initiatives = [
		{
			icon: Package,
			title: "Eco-Friendly Packaging",
			description: "Biodegradable and recyclable materials for all shipments",
			impact: "60% reduction in packaging waste",
			color: "text-green-600",
			bg: "bg-green-100",
		},
		{
			icon: Truck,
			title: "Carbon-Neutral Shipping",
			description: "Partnering with green logistics providers",
			impact: "40% lower carbon footprint",
			color: "text-blue-600",
			bg: "bg-blue-100",
		},
		{
			icon: Recycle,
			title: "Circular Economy",
			description: "Product take-back and recycling programs",
			impact: "1,000+ items recycled",
			color: "text-purple-600",
			bg: "bg-purple-100",
		},
		{
			icon: Users,
			title: "Local Partnerships",
			description: "Supporting local artisans and sustainable brands",
			impact: "50+ local partners",
			color: "text-orange-600",
			bg: "bg-orange-100",
		},
	];

	const goals = [
		{
			title: "Carbon Neutral by 2025",
			description: "Achieve net-zero carbon emissions across all operations",
			progress: 75,
			target: "2025",
		},
		{
			title: "100% Sustainable Packaging",
			description: "Eliminate all non-recyclable packaging materials",
			progress: 85,
			target: "2024",
		},
		{
			title: "Zero Waste to Landfill",
			description: "Divert all operational waste from landfills",
			progress: 60,
			target: "2026",
		},
		{
			title: "50% Sustainable Products",
			description: "Half of our catalog from certified sustainable sources",
			progress: 40,
			target: "2025",
		},
	];

	const certifications = [
		{
			name: "B Corp Certified",
			description: "Meeting highest standards of social and environmental performance",
			year: "2023",
		},
		{
			name: "Carbon Trust Standard",
			description: "Verified carbon footprint measurement and reduction",
			year: "2023",
		},
		{
			name: "FSC Certified",
			description: "Responsible forest management for paper products",
			year: "2022",
		},
		{
			name: "Green Business Japan",
			description: "Recognized for environmental leadership",
			year: "2023",
		},
	];

	const impactStats = [
		{ number: "60%", label: "Packaging Waste Reduced", icon: Package },
		{ number: "40%", label: "Carbon Footprint Reduced", icon: Leaf },
		{ number: "1,000+", label: "Items Recycled", icon: Recycle },
		{ number: "50+", label: "Sustainable Partners", icon: Users },
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-green-50 via-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
					<div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
						<Leaf className="h-5 w-5 text-green-600" />
						<span className="text-green-700 font-semibold">Sustainability</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-6">🌱 Building a Sustainable Future</h1>

					<p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
						At CozyMart, we believe that comfort shouldn't come at the cost of our planet. We're committed to
						sustainable practices that protect the environment while bringing you the cozy products you love. Together,
						we're creating a more sustainable future, one cozy home at a time.
					</p>
				</motion.div>

				{/* Impact Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">🌍 Our Environmental Impact</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{impactStats.map((stat, index) => (
							<Card key={index} className="text-center card-hover">
								<CardContent className="p-6">
									<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
										<stat.icon className="h-6 w-6 text-green-600" />
									</div>
									<div className="text-3xl font-bold text-green-600 mb-1">{stat.number}</div>
									<div className="text-sm text-muted-foreground">{stat.label}</div>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Sustainability Initiatives */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">♻️ Our Initiatives</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{initiatives.map((initiative, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6">
									<div className={`w-16 h-16 ${initiative.bg} rounded-full flex items-center justify-center mb-4`}>
										<initiative.icon className={`h-8 w-8 ${initiative.color}`} />
									</div>
									<h3 className="font-semibold text-xl mb-2">{initiative.title}</h3>
									<p className="text-muted-foreground mb-4">{initiative.description}</p>
									<Badge variant="secondary" className="bg-green-100 text-green-700">
										{initiative.impact}
									</Badge>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Sustainability Goals */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">🎯 Our 2025 Goals</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{goals.map((goal, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6">
									<div className="flex justify-between items-start mb-4">
										<div className="flex-1">
											<h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
											<p className="text-muted-foreground text-sm">{goal.description}</p>
										</div>
										<Badge variant="outline">{goal.target}</Badge>
									</div>
									<div className="space-y-2">
										<div className="flex justify-between text-sm">
											<span>Progress</span>
											<span className="font-medium">{goal.progress}%</span>
										</div>
										<Progress value={goal.progress} className="h-2" />
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Certifications */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">🏆 Certifications & Recognition</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{certifications.map((cert, index) => (
							<Card key={index} className="text-center card-hover">
								<CardContent className="p-6">
									<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<Award className="h-8 w-8 text-yellow-600" />
									</div>
									<h3 className="font-semibold mb-2">{cert.name}</h3>
									<p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
									<Badge variant="secondary">{cert.year}</Badge>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Detailed Sections */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* Packaging Initiative */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
						<Card>
							<CardContent className="p-8">
								<h3 className="text-2xl font-bold mb-6 flex items-center">
									<Package className="mr-2 h-6 w-6 text-green-600" />
									Sustainable Packaging
								</h3>
								<div className="space-y-4">
									<div>
										<h4 className="font-semibold mb-2">What We're Doing</h4>
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li>• 100% recyclable cardboard boxes</li>
											<li>• Biodegradable packing peanuts made from cornstarch</li>
											<li>• Minimal packaging design to reduce waste</li>
											<li>• Reusable packaging for premium items</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-2">Impact So Far</h4>
										<div className="grid grid-cols-2 gap-4 text-center">
											<div className="bg-green-50 rounded-lg p-3">
												<div className="text-2xl font-bold text-green-600">60%</div>
												<div className="text-xs text-muted-foreground">Waste Reduction</div>
											</div>
											<div className="bg-green-50 rounded-lg p-3">
												<div className="text-2xl font-bold text-green-600">100%</div>
												<div className="text-xs text-muted-foreground">Recyclable</div>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Carbon Footprint */}
					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
						<Card>
							<CardContent className="p-8">
								<h3 className="text-2xl font-bold mb-6 flex items-center">
									<Leaf className="mr-2 h-6 w-6 text-green-600" />
									Carbon Footprint
								</h3>
								<div className="space-y-4">
									<div>
										<h4 className="font-semibold mb-2">Our Approach</h4>
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li>• Carbon-neutral shipping partnerships</li>
											<li>• Renewable energy in our facilities</li>
											<li>• Local sourcing to reduce transport emissions</li>
											<li>• Carbon offset programs for unavoidable emissions</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-2">Progress Tracking</h4>
										<div className="space-y-3">
											<div>
												<div className="flex justify-between text-sm mb-1">
													<span>Carbon Neutral Goal</span>
													<span>75%</span>
												</div>
												<Progress value={75} className="h-2" />
											</div>
											<div className="bg-blue-50 rounded-lg p-3 text-center">
												<div className="text-2xl font-bold text-blue-600">2025</div>
												<div className="text-xs text-muted-foreground">Target Year</div>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Call to Action */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
					<Card className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
						<CardContent className="p-12 text-center">
							<div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
								<Heart className="h-10 w-10 text-green-700" />
							</div>
							<h2 className="text-3xl font-bold mb-4">Join Our Sustainability Journey 🌍</h2>
							<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
								Every purchase you make supports our mission to create a more sustainable future. Together, we can make
								a difference while enjoying the comfort and coziness you love.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" className="rounded-full px-8">
									Shop Sustainable Products
								</Button>
								<Button size="lg" variant="outline" className="rounded-full px-8">
									Learn More About Our Impact
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default SustainabilityPage;
