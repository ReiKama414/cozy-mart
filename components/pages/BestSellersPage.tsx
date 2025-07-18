"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Star, ShoppingCart, Heart, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore, useAppStore } from "@/lib/store";
import { bestSellers } from "@/lib/data";
import Link from "next/link";

const BestSellersPage = () => {
	const { addItem } = useCartStore();
	const { wishlist, addToWishlist, removeFromWishlist } = useAppStore();

	const toggleWishlist = (productId: string) => {
		if (wishlist.includes(productId)) {
			removeFromWishlist(productId);
		} else {
			addToWishlist(productId);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
					<div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
						<TrendingUp className="h-5 w-5 text-yellow-600" />
						<span className="text-yellow-700 font-semibold">Best Sellers</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">🔥 Customer Favorites</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						These are the items our customers can't get enough of! Join thousands of happy customers who have made these
						their go-to comfort essentials.
					</p>
				</motion.div>

				{/* Top 3 Podium */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-16">
					<h2 className="text-2xl font-bold text-center mb-8">🏆 Top 3 Champions</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{bestSellers.slice(0, 3).map((product, index) => (
							<motion.div
								key={product.id}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * index }}
								className={`relative ${index === 0 ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}`}>
								<Card
									className={`group card-hover overflow-hidden border-2 ${
										index === 0
											? "border-yellow-300 bg-gradient-to-b from-yellow-50 to-white"
											: index === 1
											? "border-gray-300 bg-gradient-to-b from-gray-50 to-white"
											: "border-orange-300 bg-gradient-to-b from-orange-50 to-white"
									}`}>
									<div className="relative">
										<img
											src={product.image}
											alt={product.name}
											className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
										/>

										{/* Rank badge */}
										<div
											className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
												index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-500" : "bg-orange-500"
											}`}>
											{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
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

									<CardContent className="p-6 text-center">
										<div className="flex items-center justify-center mb-2">
											<Crown
												className={`h-5 w-5 mr-1 ${
													index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-500" : "text-orange-500"
												}`}
											/>
											<span className="font-bold text-sm">#{index + 1} Best Seller</span>
										</div>

										<Link href={`/product/${product.id}`}>
											<h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
												{product.name}
											</h3>
										</Link>

										<div className="flex items-center justify-center space-x-1 mb-2">
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

										<div className="flex items-center justify-center space-x-2 mb-4">
											<span className="text-lg font-bold text-primary">¥{product.price.toLocaleString()}</span>
											{product.originalPrice && (
												<span className="text-sm text-muted-foreground line-through">
													¥{product.originalPrice.toLocaleString()}
												</span>
											)}
										</div>

										<Button onClick={() => addItem(product)} className="w-full rounded-full group">
											<ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce-gentle" />
											Add to Cart
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* All Best Sellers */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
					<h2 className="text-2xl font-bold mb-8">All Best Sellers</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{bestSellers.map((product, index) => (
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

										<div className="absolute top-2 left-2 flex flex-col gap-1">
											<Badge className="bg-red-500 hover:bg-red-600">🔥 #{index + 1}</Badge>
											{product.discount && (
												<Badge className="bg-orange-500 hover:bg-orange-600">-{product.discount}%</Badge>
											)}
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

				{/* Stats section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="mt-16">
					<Card className="bg-gradient-to-r from-primary/10 to-accent/10">
						<CardContent className="p-8">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
								<div>
									<div className="text-3xl font-bold text-primary mb-2">10,000+</div>
									<div className="text-muted-foreground">Happy Customers</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-primary mb-2">4.8★</div>
									<div className="text-muted-foreground">Average Rating</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-primary mb-2">95%</div>
									<div className="text-muted-foreground">Repurchase Rate</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default BestSellersPage;
