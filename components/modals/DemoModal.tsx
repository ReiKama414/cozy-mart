"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Code, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DemoModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		// Check if user has seen the demo modal before
		const hasSeenDemo = sessionStorage.getItem("hasSeenDemoModal");
		if (!hasSeenDemo) {
			// Show modal after a short delay
			const timer = setTimeout(() => {
				setIsOpen(true);
			}, 1500);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleClose = () => {
		setIsOpen(false);
		sessionStorage.setItem("hasSeenDemoModal", "true");
	};

	const handleExplore = () => {
		setIsOpen(false);
		sessionStorage.setItem("hasSeenDemoModal", "true");
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={handleClose}
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						transition={{ type: "spring", duration: 0.5 }}
						className="relative z-10 w-full max-w-md">
						<Card className="overflow-hidden border-2 border-primary/20">
							<CardContent className="p-0">
								{/* Header */}
								<div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-6 text-center relative">
									<Button
										variant="ghost"
										size="icon"
										onClick={handleClose}
										className="absolute top-2 right-2 hover:bg-white/20">
										<X className="h-4 w-4" />
									</Button>

									<motion.div
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<Sparkles className="h-8 w-8 text-primary" />
									</motion.div>

									<h2 className="text-2xl font-bold mb-2">Welcome to CozyMart!</h2>
									<p className="text-muted-foreground">This is a demo e-commerce platform</p>
								</div>

								{/* Content */}
								<div className="p-6 space-y-4">
									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
											<Code className="h-4 w-4 text-blue-600" />
										</div>
										<div>
											<h3 className="font-semibold text-sm">Demo Experience</h3>
											<p className="text-xs text-muted-foreground">
												Explore all features including shopping, checkout, and user dashboard
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
											<Heart className="h-4 w-4 text-green-600" />
										</div>
										<div>
											<h3 className="font-semibold text-sm">No Real Transactions</h3>
											<p className="text-xs text-muted-foreground">
												All data is simulated - no actual purchases or payments are processed
											</p>
										</div>
									</div>

									<div className="bg-muted/50 rounded-lg p-3 text-center">
										<p className="text-xs text-muted-foreground">
											💡 Try adding items to cart, exploring categories, and testing the checkout flow!
										</p>
									</div>
								</div>

								{/* Actions */}
								<div className="p-6 pt-0 flex space-x-3">
									<Button onClick={handleExplore} className="flex-1 rounded-full">
										Start Exploring
									</Button>
									<Button variant="outline" onClick={handleClose} className="rounded-full">
										Close
									</Button>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default DemoModal;
