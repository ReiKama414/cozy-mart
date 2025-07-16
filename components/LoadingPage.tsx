"use client";

import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blush-50 via-sage-50 to-cream-50 flex items-center justify-center">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
				{/* Logo */}
				<motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
					<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
						<span className="text-2xl font-bold text-white">🌸</span>
					</div>
					<h1 className="text-2xl font-bold text-gradient">CozyMart</h1>
				</motion.div>

				{/* Loading animation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-8">
					<div className="flex justify-center space-x-2 mb-4">
						{[0, 1, 2].map((i) => (
							<motion.div
								key={i}
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 1, 0.5],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									delay: i * 0.2,
								}}
								className="w-3 h-3 bg-primary rounded-full"
							/>
						))}
					</div>

					<motion.p
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="text-muted-foreground">
						Creating your cozy experience...
					</motion.p>
				</motion.div>

				{/* Progress bar */}
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: "100%" }}
					transition={{ duration: 2, ease: "easeInOut" }}
					className="h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto max-w-xs"
				/>
			</motion.div>
		</div>
	);
};

export default LoadingPage;
