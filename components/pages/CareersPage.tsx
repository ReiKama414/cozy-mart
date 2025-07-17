"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Heart, Coffee, MapPin, Clock, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CareersPage = () => {
	const openPositions = [
		{
			title: "Senior Product Manager",
			department: "Product",
			location: "Tokyo, Japan",
			type: "Full-time",
			description: "Lead product strategy and development for our cozy home collection",
			requirements: ["5+ years product management experience", "E-commerce background", "Japanese fluency"],
		},
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			description: "Create beautiful, user-friendly experiences for our customers",
			requirements: ["3+ years design experience", "Figma proficiency", "Portfolio required"],
		},
		{
			title: "Customer Success Specialist",
			department: "Customer Experience",
			location: "Tokyo, Japan",
			type: "Full-time",
			description: "Help customers find their perfect cozy essentials",
			requirements: ["Customer service experience", "Excellent communication", "Problem-solving skills"],
		},
		{
			title: "Marketing Coordinator",
			department: "Marketing",
			location: "Hybrid",
			type: "Full-time",
			description: "Support marketing campaigns and community engagement",
			requirements: ["Marketing experience", "Social media savvy", "Creative mindset"],
		},
		{
			title: "Software Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			description: "Build and maintain our e-commerce platform",
			requirements: ["React/Next.js experience", "3+ years development", "E-commerce knowledge"],
		},
		{
			title: "Content Creator (Intern)",
			department: "Marketing",
			location: "Tokyo, Japan",
			type: "Internship",
			description: "Create engaging content for our social media and blog",
			requirements: ["Creative portfolio", "Social media experience", "Photography skills"],
		},
	];

	const benefits = [
		{
			icon: Heart,
			title: "Health & Wellness",
			description: "Comprehensive health insurance and wellness programs",
			color: "text-red-500",
			bg: "bg-red-100",
		},
		{
			icon: Coffee,
			title: "Cozy Workspace",
			description: "Beautiful office with all the cozy essentials you need",
			color: "text-brown-500",
			bg: "bg-orange-100",
		},
		{
			icon: Clock,
			title: "Flexible Hours",
			description: "Work-life balance with flexible scheduling options",
			color: "text-blue-500",
			bg: "bg-blue-100",
		},
		{
			icon: Zap,
			title: "Growth Opportunities",
			description: "Professional development and learning budget",
			color: "text-yellow-500",
			bg: "bg-yellow-100",
		},
		{
			icon: Users,
			title: "Amazing Team",
			description: "Work with passionate, talented people who care",
			color: "text-purple-500",
			bg: "bg-purple-100",
		},
		{
			icon: Award,
			title: "Employee Perks",
			description: "Product discounts, team events, and more",
			color: "text-green-500",
			bg: "bg-green-100",
		},
	];

	const values = [
		{
			title: "Comfort First",
			description: "We prioritize the comfort and well-being of our team and customers",
			emoji: "🛋️",
		},
		{
			title: "Quality Matters",
			description: "We strive for excellence in everything we do",
			emoji: "⭐",
		},
		{
			title: "Sustainability",
			description: "We care about our impact on the planet",
			emoji: "🌱",
		},
		{
			title: "Community",
			description: "We build meaningful relationships and support each other",
			emoji: "🤝",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
					<div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
						<Briefcase className="h-5 w-5 text-purple-600" />
						<span className="text-purple-700 font-semibold">Careers</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-6">💼 Join Our Cozy Team</h1>

					<p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
						At CozyMart, we're building more than just a business – we're creating a community of passionate people who
						believe in bringing comfort and joy to everyday life. Join us in making the world a cozier place!
					</p>
				</motion.div>

				{/* Company Culture */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6">🏢 Life at CozyMart</h2>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								Our team is our greatest asset. We've created a workplace culture that values creativity, collaboration,
								and personal growth. From our cozy Tokyo office to our remote team members around the world, we're
								united by our passion for creating exceptional experiences.
							</p>
							<div className="grid grid-cols-2 gap-4">
								{values.map((value, index) => (
									<div key={index} className="flex items-start space-x-3">
										<span className="text-2xl">{value.emoji}</span>
										<div>
											<h4 className="font-semibold text-sm">{value.title}</h4>
											<p className="text-xs text-muted-foreground">{value.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<img
								src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="Team working together"
								className="w-full h-80 object-cover rounded-2xl"
							/>
							<div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
								<div className="text-center">
									<div className="text-2xl font-bold text-primary">4.9</div>
									<div className="text-xs text-muted-foreground">Employee Rating</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Benefits */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-8">🎁 Why You'll Love Working Here</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{benefits.map((benefit, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6">
									<div className={`w-12 h-12 ${benefit.bg} rounded-full flex items-center justify-center mb-4`}>
										<benefit.icon className={`h-6 w-6 ${benefit.color}`} />
									</div>
									<h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
									<p className="text-sm text-muted-foreground">{benefit.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Open Positions */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-8">🚀 Open Positions</h2>
					<div className="space-y-6">
						{openPositions.map((position, index) => (
							<Card key={index} className="card-hover">
								<CardContent className="p-6">
									<div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
										<div>
											<h3 className="font-semibold text-xl mb-2">{position.title}</h3>
											<div className="flex flex-wrap gap-2 mb-2">
												<Badge variant="secondary">{position.department}</Badge>
												<Badge variant="outline" className="flex items-center">
													<MapPin className="h-3 w-3 mr-1" />
													{position.location}
												</Badge>
												<Badge variant="outline">{position.type}</Badge>
											</div>
										</div>
										<Button className="rounded-full mt-4 md:mt-0">Apply Now</Button>
									</div>

									<p className="text-muted-foreground mb-4">{position.description}</p>

									<div>
										<h4 className="font-medium mb-2">Requirements:</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											{position.requirements.map((req, reqIndex) => (
												<li key={reqIndex} className="flex items-center">
													<div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
													{req}
												</li>
											))}
										</ul>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Application Process */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-8">📝 Application Process</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						{[
							{ step: 1, title: "Apply Online", description: "Submit your application and resume" },
							{ step: 2, title: "Initial Review", description: "We review your application within 1 week" },
							{ step: 3, title: "Interview", description: "Video or in-person interview with our team" },
							{ step: 4, title: "Welcome!", description: "Join our cozy team and start your journey" },
						].map((step, index) => (
							<Card key={index} className="text-center card-hover">
								<CardContent className="p-6">
									<div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
										{step.step}
									</div>
									<h3 className="font-semibold mb-2">{step.title}</h3>
									<p className="text-sm text-muted-foreground">{step.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
					<Card className="bg-gradient-to-r from-primary/10 to-accent/10">
						<CardContent className="p-12 text-center">
							<h2 className="text-3xl font-bold mb-4">Ready to Join Us? 🌟</h2>
							<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
								Don't see a position that fits? We're always looking for talented people who share our passion for
								creating cozy experiences. Send us your resume and tell us how you'd like to contribute to our mission.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" className="rounded-full px-8">
									View All Positions
								</Button>
								<Button size="lg" variant="outline" className="rounded-full px-8">
									Send General Application
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default CareersPage;
