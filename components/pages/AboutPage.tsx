"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Award, Leaf, Target, Globe, Star, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
	const values = [
		{
			icon: Heart,
			title: "Comfort First",
			description: "Every product is chosen with your comfort and happiness in mind",
			color: "text-red-500",
			bg: "bg-red-100",
		},
		{
			icon: Leaf,
			title: "Sustainability",
			description: "We prioritize eco-friendly materials and sustainable practices",
			color: "text-green-500",
			bg: "bg-green-100",
		},
		{
			icon: Users,
			title: "Community",
			description: "Building a community of people who value quality and comfort",
			color: "text-blue-500",
			bg: "bg-blue-100",
		},
		{
			icon: Award,
			title: "Quality",
			description: "We curate only the finest products that meet our high standards",
			color: "text-purple-500",
			bg: "bg-purple-100",
		},
	];

	const milestones = [
		{
			year: "2020",
			title: "The Beginning",
			description: "CozyMart was founded with a simple mission: to bring comfort to every home.",
		},
		{
			year: "2021",
			title: "First 1,000 Customers",
			description: "Reached our first milestone of happy customers who found their perfect cozy items.",
		},
		{
			year: "2022",
			title: "Sustainability Focus",
			description: "Launched our eco-friendly initiative, partnering with sustainable brands.",
		},
		{
			year: "2023",
			title: "International Expansion",
			description: "Began shipping to customers across Asia Pacific and beyond.",
		},
		{
			year: "2024",
			title: "Community of 50K+",
			description: "Now serving over 50,000 customers who trust us for their comfort needs.",
		},
	];

	const team = [
		{
			name: "Yuki Tanaka",
			role: "Founder & CEO",
			description: "Passionate about creating cozy spaces and sustainable living",
			image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			name: "Hiroshi Sato",
			role: "Head of Product",
			description: "Expert in sourcing the most comfortable and quality products",
			image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			name: "Sakura Yamamoto",
			role: "Customer Experience",
			description: "Dedicated to ensuring every customer feels valued and heard",
			image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
	];

	const stats = [
		{ number: "50K+", label: "Happy Customers", icon: Users },
		{ number: "500+", label: "Cozy Products", icon: Coffee },
		{ number: "4.9", label: "Average Rating", icon: Star },
		{ number: "25+", label: "Countries Served", icon: Globe },
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
					<div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2 mb-4">
						<Heart className="h-5 w-5 text-pink-600" />
						<span className="text-pink-700 font-semibold">About Us</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-6">Creating Cozy Moments, One Home at a Time</h1>

					<p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
						At CozyMart, we believe that everyone deserves a space that feels like a warm hug. Since 2020, we've been
						carefully curating products that transform houses into homes and spaces into sanctuaries. Our mission is
						simple: to bring comfort, joy, and coziness to your everyday life.
					</p>
				</motion.div>

				{/* Hero Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2 }}
					className="mb-16">
					<div className="relative rounded-3xl overflow-hidden">
						<img
							src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200"
							alt="Cozy living space"
							className="w-full h-96 md:h-[500px] object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						<div className="absolute bottom-8 left-8 text-white">
							<h3 className="text-2xl font-bold mb-2">Every Detail Matters</h3>
							<p className="text-white/90">From the softest pillows to the warmest blankets</p>
						</div>
					</div>
				</motion.div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{stats.map((stat, index) => (
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

				{/* Our Values */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-8">💝 Our Values</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6 text-center">
									<div className={`w-16 h-16 ${value.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
										<value.icon className={`h-8 w-8 ${value.color}`} />
									</div>
									<h3 className="font-semibold text-lg mb-2">{value.title}</h3>
									<p className="text-sm text-muted-foreground">{value.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Our Story Timeline */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-8">📖 Our Journey</h2>
					<div className="max-w-4xl mx-auto">
						{milestones.map((milestone, index) => (
							<div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
										{milestone.year}
									</div>
								</div>
								<div className="flex-1 pt-2">
									<h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
									<p className="text-muted-foreground">{milestone.description}</p>
								</div>
							</div>
						))}
					</div>
				</motion.div>

				{/* Team */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-8">👥 Meet Our Team</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6 text-center">
									<img
										src={member.image}
										alt={member.name}
										className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
									/>
									<h3 className="font-semibold text-lg mb-1">{member.name}</h3>
									<Badge variant="secondary" className="mb-3">
										{member.role}
									</Badge>
									<p className="text-sm text-muted-foreground">{member.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Mission Statement */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					className="mb-16">
					<Card className="bg-gradient-to-r from-blush-50 via-sage-50 to-cream-50">
						<CardContent className="p-12 text-center">
							<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
								<Target className="h-10 w-10 text-primary" />
							</div>
							<h2 className="text-3xl font-bold mb-6">🎯 Our Mission</h2>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
								To create a world where everyone has access to products that bring comfort, joy, and coziness to their
								daily lives. We believe that small comforts can make a big difference, and we're committed to sourcing
								and delivering products that transform your space into your personal sanctuary.
							</p>
						</CardContent>
					</Card>
				</motion.div>

				{/* Sustainability */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					className="mb-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6 flex items-center">
								<Leaf className="mr-3 h-8 w-8 text-green-500" />
								🌱 Sustainability Commitment
							</h2>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								We're committed to protecting the planet while bringing comfort to your home. Our sustainability
								initiatives include partnering with eco-friendly brands, using minimal packaging, and supporting local
								artisans who share our values.
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
									<span className="text-sm">Eco-friendly packaging materials</span>
								</li>
								<li className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
									<span className="text-sm">Carbon-neutral shipping options</span>
								</li>
								<li className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
									<span className="text-sm">Supporting sustainable brands</span>
								</li>
								<li className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
									<span className="text-sm">Recycling and upcycling programs</span>
								</li>
							</ul>
							<Button className="rounded-full">Learn More About Our Impact</Button>
						</div>
						<div className="relative">
							<img
								src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="Sustainable living"
								className="w-full h-80 object-cover rounded-2xl"
							/>
							<div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
								<div className="text-center">
									<div className="text-2xl font-bold text-green-600">95%</div>
									<div className="text-xs text-muted-foreground">Eco-friendly products</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
					<Card className="bg-gradient-to-r from-primary/10 to-accent/10">
						<CardContent className="p-12 text-center">
							<h2 className="text-3xl font-bold mb-4">Join Our Cozy Community! 🤗</h2>
							<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
								Become part of a community that values comfort, quality, and sustainability. Follow our journey and
								discover new ways to make your space more cozy.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" className="rounded-full px-8">
									Shop Our Collection
								</Button>
								<Button size="lg" variant="outline" className="rounded-full px-8">
									Follow Our Story
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutPage;
