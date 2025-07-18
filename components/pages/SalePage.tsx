"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tag, Clock, Star, ShoppingCart, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useCartStore, useAppStore } from "@/lib/store";
import { products } from "@/lib/data";
import Link from "next/link";

const SalePage = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 2,
		hours: 14,
		minutes: 32,
		seconds: 45,
	});

	const { addItem } = useCartStore();
	const { wishlist, addToWishlist, removeFromWishlist } = useAppStore();

	// Get products on sale
	const saleProducts = products.filter((p) => p.discount && p.discount > 0);
	const megaSaleProducts = saleProducts.filter((p) => p.discount && p.discount >= 20);
	const regularSaleProducts = saleProducts.filter((p) => p.discount && p.discount < 20);

	// Countdown timer
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				let { days, hours, minutes, seconds } = prev;

				if (seconds > 0) {
					seconds--;
				} else if (minutes > 0) {
					minutes--;
					seconds = 59;
				} else if (hours > 0) {
					hours--;
					minutes = 59;
					seconds = 59;
				} else if (days > 0) {
					days--;
					hours = 23;
					minutes = 59;
					seconds = 59;
				}

				return { days, hours, minutes, seconds };
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const toggleWishlist = (productId: string) => {
		if (wishlist.includes(productId)) {
			removeFromWishlist(productId);
		} else {
			addToWishlist(productId);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 mb-4">
						<Tag className="h-5 w-5 text-red-600" />
						<span className="text-red-700 font-semibold">Sale Event</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">🏷️ Mega Sale Event</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
						Don't miss out on incredible savings! Limited time offers on your favorite cozy essentials with discounts up
						to 50% off.
					</p>

					{/* Countdown Timer */}
					<motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						className="inline-flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg">
						<Clock className="h-6 w-6 text-red-500" />
						<span className="font-medium text-lg">Sale ends in:</span>
						<div className="flex items-center space-x-2">
							<div className="text-center">
								<div className="bg-red-500 text-white rounded-lg px-3 py-2 font-bold text-lg min-w-[3rem]">
									{timeLeft.days.toString().padStart(2, "0")}
								</div>
								<div className="text-xs text-muted-foreground mt-1">Days</div>
							</div>
							<span className="font-bold text-xl">:</span>
							<div className="text-center">
								<div className="bg-red-500 text-white rounded-lg px-3 py-2 font-bold text-lg min-w-[3rem]">
									{timeLeft.hours.toString().padStart(2, "0")}
								</div>
								<div className="text-xs text-muted-foreground mt-1">Hours</div>
							</div>
							<span className="font-bold text-xl">:</span>
							<div className="text-center">
								<div className="bg-red-500 text-white rounded-lg px-3 py-2 font-bold text-lg min-w-[3rem]">
									{timeLeft.minutes.toString().padStart(2, "0")}
								</div>
								<div className="text-xs text-muted-foreground mt-1">Min</div>
							</div>
							<span className="font-bold text-xl">:</span>
							<div className="text-center">
								<div className="bg-red-500 text-white rounded-lg px-3 py-2 font-bold text-lg min-w-[3rem]">
									{timeLeft.seconds.toString().padStart(2, "0")}
								</div>
								<div className="text-xs text-muted-foreground mt-1">Sec</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Mega Sale Section */}
				{megaSaleProducts.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mb-16">
						<div className="flex items-center space-x-2 mb-8">
							<Zap className="h-6 w-6 text-yellow-500" />
							<h2 className="text-3xl font-bold">⚡ Mega Deals (20%+ Off)</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{megaSaleProducts.map((product, index) => (
								<motion.div
									key={product.id}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 * index }}>
									<Card className="group card-hover overflow-hidden border-2 border-red-200 bg-gradient-to-b from-red-50 to-white">
										<div className="relative">
											<Link href={`/product/${product.id}`}>
												<img
													src={product.image}
													alt={product.name}
													className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
												/>
											</Link>

											<div className="absolute top-2 left-2 flex flex-col gap-1">
												<Badge className="bg-red-500 hover:bg-red-600 text-white font-bold">
													🔥 -{product.discount}%
												</Badge>
												<Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">MEGA DEAL</Badge>
											</div>

											<Button
												variant="ghost"
												size="icon"
												className="absolute top-2 right-2 bg-white/80 hover:bg-white"
												onClick={() => toggleWishlist(product.id)}>
												<Heart
													className={`h-4 w-4 ${
														wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
													}`}
												/>
											</Button>
										</div>

										<CardContent className="p-4">
											<Link href={`/product/${product.id}`}>
												<h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
													{product.name}
												</h3>
											</Link>

											<div className="flex items-center space-x-1 mb-3">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
														}`}
													/>
												))}
												<span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
											</div>

											<div className="flex items-center space-x-2 mb-3">
												<span className="text-xl font-bold text-red-600">¥{product.price.toLocaleString()}</span>
												{product.originalPrice && (
													<span className="text-lg text-muted-foreground line-through">
														¥{product.originalPrice.toLocaleString()}
													</span>
												)}
											</div>

											<div className="mb-3">
												<div className="flex justify-between text-xs text-muted-foreground mb-1">
													<span>Sold: {Math.floor(product.stock * 0.6)}</span>
													<span>Stock: {product.stock}</span>
												</div>
												<Progress value={60} className="h-2 bg-red-100" />
											</div>

											<Button
												onClick={() => addItem(product)}
												className="w-full rounded-full bg-red-500 hover:bg-red-600 group">
												<ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce-gentle" />
												Add to Cart
											</Button>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}

				{/* Regular Sale Section */}
				{regularSaleProducts.length > 0 && (
					<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
						<h2 className="text-2xl font-bold mb-8">🏷️ More Great Deals</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{regularSaleProducts.map((product, index) => (
								<motion.div
									key={product.id}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.05 * index }}>
									<Card className="group card-hover overflow-hidden">
										<div className="relative">
											<Link href={`/product/${product.id}`}>
												<img
													src={product.image}
													alt={product.name}
													className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
												/>
											</Link>

											<Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">
												-{product.discount}%
											</Badge>

											<Button
												variant="ghost"
												size="icon"
												className="absolute top-2 right-2 bg-white/80 hover:bg-white"
												onClick={() => toggleWishlist(product.id)}>
												<Heart
													className={`h-4 w-4 ${
														wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
													}`}
												/>
											</Button>
										</div>

										<CardContent className="p-4">
											<Link href={`/product/${product.id}`}>
												<h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
													{product.name}
												</h3>
											</Link>

											<div className="flex items-center space-x-1 mb-2">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
														}`}
													/>
												))}
												<span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
											</div>

											<div className="flex items-center justify-between mb-3">
												<div className="flex items-center space-x-2">
													<span className="text-lg font-bold text-primary">¥{product.price.toLocaleString()}</span>
													{product.originalPrice && (
														<span className="text-sm text-muted-foreground line-through">
															¥{product.originalPrice.toLocaleString()}
														</span>
													)}
												</div>
											</div>

											<Button onClick={() => addItem(product)} className="w-full rounded-full group" size="sm">
												<ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce-gentle" />
												Add to Cart
											</Button>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}

				{/* Sale Banner */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="mt-16">
					<Card className="overflow-hidden bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white">
						<CardContent className="p-8 text-center">
							<h3 className="text-3xl font-bold mb-4">🎉 Don't Miss Out!</h3>
							<p className="text-lg mb-6 opacity-90">
								These amazing deals won't last forever. Shop now and save big on your favorite items!
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" variant="secondary" className="rounded-full px-8">
									Shop All Sale Items
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="rounded-full px-8 border-white text-white hover:bg-white hover:text-red-500">
									Subscribe for More Deals
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default SalePage;
