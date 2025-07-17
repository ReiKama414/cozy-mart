"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Download, Mail, Calendar, Award, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PressPage = () => {
	const pressReleases = [
		{
			date: "2024-01-15",
			title: "CozyMart Reaches 50,000 Happy Customers Milestone",
			excerpt:
				"Japanese comfort retailer celebrates major growth in customer base while maintaining focus on sustainability and quality.",
			category: "Company News",
		},
		{
			date: "2023-12-08",
			title: "CozyMart Launches Sustainable Packaging Initiative",
			excerpt:
				"New eco-friendly packaging reduces environmental impact by 60% while maintaining product protection standards.",
			category: "Sustainability",
		},
		{
			date: "2023-11-22",
			title: "Holiday Season Brings Record Sales for Comfort Products",
			excerpt: "CozyMart reports 200% increase in gift card sales and expanded international shipping to 25 countries.",
			category: "Business",
		},
		{
			date: "2023-10-10",
			title: "CozyMart Partners with Local Artisans for Exclusive Collection",
			excerpt:
				"New partnership supports traditional Japanese craftsmanship while bringing unique products to global customers.",
			category: "Partnerships",
		},
	];

	const mediaKit = [
		{
			title: "Company Logo Pack",
			description: "High-resolution logos in various formats",
			fileSize: "2.3 MB",
			format: "ZIP",
		},
		{
			title: "Product Images",
			description: "Professional product photography collection",
			fileSize: "15.7 MB",
			format: "ZIP",
		},
		{
			title: "Brand Guidelines",
			description: "Complete brand identity and usage guidelines",
			fileSize: "4.1 MB",
			format: "PDF",
		},
		{
			title: "Company Fact Sheet",
			description: "Key statistics and company information",
			fileSize: "1.2 MB",
			format: "PDF",
		},
	];

	const awards = [
		{
			year: "2024",
			title: "Best E-commerce Experience",
			organization: "Japan Digital Awards",
			description: "Recognized for outstanding user experience and customer satisfaction",
		},
		{
			year: "2023",
			title: "Sustainability Leader",
			organization: "Green Business Japan",
			description: "Honored for commitment to environmental responsibility",
		},
		{
			year: "2023",
			title: "Rising Star in Retail",
			organization: "Tokyo Business Review",
			description: "Acknowledged for rapid growth and innovation in comfort retail",
		},
	];

	const keyStats = [
		{ number: "50K+", label: "Happy Customers", icon: Users },
		{ number: "500+", label: "Products", icon: TrendingUp },
		{ number: "25+", label: "Countries", icon: Globe },
		{ number: "4.9", label: "Customer Rating", icon: Award },
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
					<div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
						<Newspaper className="h-5 w-5 text-blue-600" />
						<span className="text-blue-700 font-semibold">Press Center</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-6">📰 Press & Media Center</h1>

					<p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
						Welcome to CozyMart's press center. Here you'll find the latest news, press releases, media assets, and
						information about our mission to bring comfort and coziness to homes around the world.
					</p>
				</motion.div>

				{/* Key Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">📊 Key Statistics</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{keyStats.map((stat, index) => (
							<Card key={index} className="text-center card-hover">
								<CardContent className="p-6">
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
										<stat.icon className="h-6 w-6 text-primary" />
									</div>
									<div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
									<div className="text-sm text-muted-foreground">{stat.label}</div>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Latest Press Releases */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16">
					<h2 className="text-2xl font-bold mb-8">📢 Latest Press Releases</h2>
					<div className="space-y-6">
						{pressReleases.map((release, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6">
									<div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
										<div className="flex-1">
											<div className="flex items-center space-x-3 mb-2">
												<Badge variant="secondary">{release.category}</Badge>
												<span className="text-sm text-muted-foreground flex items-center">
													<Calendar className="h-4 w-4 mr-1" />
													{new Date(release.date).toLocaleDateString("en-US", {
														year: "numeric",
														month: "long",
														day: "numeric",
													})}
												</span>
											</div>
											<h3 className="font-semibold text-xl mb-2">{release.title}</h3>
											<p className="text-muted-foreground">{release.excerpt}</p>
										</div>
										<Button variant="outline" className="rounded-full mt-4 md:mt-0 md:ml-4">
											Read More
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Awards & Recognition */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mb-16">
					<h2 className="text-2xl font-bold mb-8">🏆 Awards & Recognition</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{awards.map((award, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<Award className="h-8 w-8 text-yellow-600" />
									</div>
									<div className="text-2xl font-bold text-primary mb-2">{award.year}</div>
									<h3 className="font-semibold text-lg mb-2">{award.title}</h3>
									<p className="text-sm text-muted-foreground mb-3">{award.organization}</p>
									<p className="text-xs text-muted-foreground">{award.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Media Kit */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
						<Card>
							<CardContent className="p-8">
								<h2 className="text-2xl font-bold mb-6 flex items-center">
									<Download className="mr-2 h-6 w-6 text-primary" />
									Media Kit
								</h2>
								<p className="text-muted-foreground mb-6">
									Download our complete media kit including logos, product images, and brand guidelines for your
									editorial use.
								</p>
								<div className="space-y-4">
									{mediaKit.map((item, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
											<div>
												<h4 className="font-medium">{item.title}</h4>
												<p className="text-sm text-muted-foreground">{item.description}</p>
											</div>
											<div className="text-right">
												<div className="text-sm text-muted-foreground">{item.fileSize}</div>
												<Badge variant="outline" className="mt-1">
													{item.format}
												</Badge>
											</div>
										</div>
									))}
								</div>
								<Button className="w-full mt-6 rounded-full">
									<Download className="mr-2 h-4 w-4" />
									Download Complete Media Kit
								</Button>
							</CardContent>
						</Card>
					</motion.div>

					{/* Press Contact */}
					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
						<Card>
							<CardContent className="p-8">
								<h2 className="text-2xl font-bold mb-6 flex items-center">
									<Mail className="mr-2 h-6 w-6 text-primary" />
									Press Contact
								</h2>
								<div className="space-y-6">
									<div>
										<h3 className="font-semibold mb-2">Media Inquiries</h3>
										<p className="text-muted-foreground mb-2">
											For press inquiries, interview requests, or additional information:
										</p>
										<div className="space-y-1 text-sm">
											<p>
												<strong>Email:</strong> press@cozymart.com
											</p>
											<p>
												<strong>Phone:</strong> +81-3-1234-5678
											</p>
											<p>
												<strong>Response Time:</strong> Within 24 hours
											</p>
										</div>
									</div>

									<div>
										<h3 className="font-semibold mb-2">Partnership Inquiries</h3>
										<p className="text-muted-foreground mb-2">
											For business partnerships and collaboration opportunities:
										</p>
										<div className="space-y-1 text-sm">
											<p>
												<strong>Email:</strong> partnerships@cozymart.com
											</p>
											<p>
												<strong>Phone:</strong> +81-3-1234-5679
											</p>
										</div>
									</div>

									<div>
										<h3 className="font-semibold mb-2">Executive Team</h3>
										<div className="space-y-2 text-sm">
											<div>
												<p>
													<strong>Yuki Tanaka</strong> - Founder & CEO
												</p>
												<p className="text-muted-foreground">Available for interviews and speaking engagements</p>
											</div>
											<div>
												<p>
													<strong>Hiroshi Sato</strong> - Head of Product
												</p>
												<p className="text-muted-foreground">Product strategy and innovation topics</p>
											</div>
										</div>
									</div>
								</div>

								<Button className="w-full mt-6 rounded-full">Contact Press Team</Button>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Newsletter Signup */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					className="mt-16">
					<Card className="bg-gradient-to-r from-primary/10 to-accent/10">
						<CardContent className="p-12 text-center">
							<h2 className="text-3xl font-bold mb-4">Stay Updated 📬</h2>
							<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
								Subscribe to our press newsletter to receive the latest news, press releases, and company updates
								directly in your inbox.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-2 rounded-full border border-input bg-background"
								/>
								<Button className="rounded-full px-8">Subscribe</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default PressPage;
