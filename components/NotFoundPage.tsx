"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-gradient-to-br from-blush-50 via-sage-50 to-cream-50 flex items-center justify-center py-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-2xl mx-auto">
					{/* Animated 404 */}
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-8">
						<div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</div>
						<motion.div
							animate={{
								rotate: [0, 10, -10, 0],
								scale: [1, 1.1, 1],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "reverse",
							}}
							className="text-6xl mb-4">
							🔍
						</motion.div>
					</motion.div>

					{/* Content */}
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
						<h1 className="text-3xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h1>
						<p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
							The cozy corner you're looking for seems to have wandered off. Let's help you find your way back home! 
						</p>
					</motion.div>

					{/* Action buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button onClick={() => router.push("/")} size="lg" className="rounded-full px-8 group">
							<Home className="mr-2 h-4 w-4 group-hover:animate-bounce-gentle" />
							Back to Home
						</Button>

						<Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => window.history.back()}>
							<ArrowLeft className="mr-2 h-4 w-4" />
							Go Back
						</Button>
					</motion.div>

					{/* Helpful links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="mt-12 pt-8 border-t border-border/50">
						<p className="text-sm text-muted-foreground mb-4">Or explore these popular sections:</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/new" className="text-sm text-primary hover:underline">
								New Arrivals
							</Link>
							<Link href="/bestsellers" className="text-sm text-primary hover:underline">
								Best Sellers
							</Link>
							<Link href="/sale" className="text-sm text-primary hover:underline">
								Sale Items
							</Link>
							<Link href="/category/home" className="text-sm text-primary hover:underline">
								Home & Living
							</Link>
						</div>
					</motion.div>

					{/* Decorative elements */}
					<div className="absolute top-20 left-10 opacity-20">
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
							className="w-16 h-16 bg-primary/10 rounded-full"
						/>
					</div>
					<div className="absolute bottom-20 right-10 opacity-20">
						<motion.div
							animate={{ rotate: -360 }}
							transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
							className="w-20 h-20 bg-accent/10 rounded-full"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default NotFoundPage;
