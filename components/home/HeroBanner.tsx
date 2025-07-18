"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HeroBanner = () => {
	const router = useRouter();

	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-blush-50 via-sage-50 to-cream-50 py-16 md:py-24">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					animate={{
						rotate: 360,
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"
				/>
				<motion.div
					animate={{
						rotate: -360,
						scale: [1, 0.9, 1],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute top-1/2 -right-8 w-32 h-32 bg-accent/10 rounded-full"
				/>
				<motion.div
					animate={{
						y: [0, -20, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute bottom-10 left-1/4 w-16 h-16 bg-secondary/10 rounded-full"
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Text content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
							<Sparkles className="h-4 w-4 text-primary" />
							<span className="text-sm font-medium text-primary">New Winter Collection</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
							<span className="text-gradient">Cozy Comfort</span>
							<br />
							<span className="text-foreground">for Every</span>
							<br />
							<span className="text-primary">Corner</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
							Transform your space into a warm sanctuary with our carefully curated collection of comfort-focused home
							essentials.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button onClick={() => router.push("/product")} size="lg" className="rounded-full px-8 group">
								Shop Collection
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button onClick={() => router.push("/new")} variant="outline" size="lg" className="rounded-full px-8">
								Discover New
							</Button>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-primary">10K+</div>
								<div className="text-sm text-muted-foreground">Happy Customers</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-primary">500+</div>
								<div className="text-sm text-muted-foreground">Cozy Products</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-primary">4.9</div>
								<div className="text-sm text-muted-foreground">Star Rating</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Image/Visual content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative">
						<div className="relative z-10">
							<motion.div
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300 }}
								className="rounded-3xl overflow-hidden shadow-2xl">
								<img
									src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
									alt="Cozy living room"
									className="w-full h-[500px] object-cover"
								/>
							</motion.div>

							{/* Floating product cards */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1, duration: 0.5 }}
								className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
								<div className="flex items-center space-x-3">
									<img
										src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=100"
										alt="Featured product"
										className="w-12 h-12 rounded-lg object-cover"
									/>
									<div>
										<div className="font-semibold text-sm">Cozy Cloud Pillow</div>
										<div className="text-primary font-bold">¥2,980</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.2, duration: 0.5 }}
								className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
								<div className="text-center">
									<div className="text-2xl mb-1">⭐</div>
									<div className="font-bold text-sm">4.9/5</div>
									<div className="text-xs text-muted-foreground">2.3k reviews</div>
								</div>
							</motion.div>
						</div>

						{/* Background decoration */}
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
