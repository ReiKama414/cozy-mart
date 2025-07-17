"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore, useAppStore } from "@/lib/store";
import { newArrivals } from "@/lib/data";
import Link from "next/link";

const NewArrivalsPage = () => {
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
					<div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
						<Sparkles className="h-5 w-5 text-green-600" />
						<span className="text-green-700 font-semibold">New Arrivals</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4">✨ Fresh & New</h1>

					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Discover the latest additions to our cozy collection. Each item is carefully selected to bring comfort and
						joy to your everyday life.
					</p>
				</motion.div>

				{/* Featured New Item */}
				{newArrivals.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mb-16">
						<Card className="overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
							<CardContent className="p-0">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									<div className="relative">
										<img
											src={newArrivals[0].image}
											alt={newArrivals[0].name}
											className="w-full h-80 lg:h-96 object-cover"
										/>
										<Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">✨ Just Arrived</Badge>
									</div>

									<div className="p-8 lg:p-12 flex flex-col justify-center">
										<h2 className="text-2xl md:text-3xl font-bold mb-4">Featured New Item</h2>
										<h3 className="text-xl font-semibold mb-4 text-primary">{newArrivals[0].name}</h3>
										<p className="text-muted-foreground mb-6">{newArrivals[0].description}</p>

										<div className="flex items-center space-x-4 mb-6">
											<span className="text-2xl font-bold text-primary">¥{newArrivals[0].price.toLocaleString()}</span>
											<div className="flex items-center space-x-1">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < Math.floor(newArrivals[0].rating)
																? "fill-yellow-400 text-yellow-400"
																: "text-gray-300"
														}`}
													/>
												))}
												<span className="text-sm text-muted-foreground ml-1">({newArrivals[0].reviews})</span>
											</div>
										</div>

										<div className="flex space-x-4">
											<Button onClick={() => addItem(newArrivals[0])} size="lg" className="rounded-full flex-1">
												<ShoppingCart className="mr-2 h-5 w-5" />
												Add to Cart
											</Button>
											<Button
												variant="outline"
												size="lg"
												onClick={() => toggleWishlist(newArrivals[0].id)}
												className="rounded-full">
												<Heart
													className={`h-5 w-5 ${
														wishlist.includes(newArrivals[0].id) ? "fill-red-500 text-red-500" : ""
													}`}
												/>
											</Button>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				)}

				{/* All New Arrivals Grid */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
					<h2 className="text-2xl font-bold mb-8">All New Arrivals</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{newArrivals.map((product, index) => (
							<motion.div
								key={product.id}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * index }}>
								<Card className="group card-hover overflow-hidden">
									<div className="relative">
										<Link href={`/product/${product.id}`}>
											<img
												src={product.image}
												alt={product.name}
												className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
											/>
										</Link>

										<Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">✨ New</Badge>

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
											<span className="text-lg font-bold text-primary">¥{product.price.toLocaleString()}</span>
											<span className="text-sm text-green-600">{product.stock} in stock</span>
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

				{/* Call to action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="text-center mt-16">
					<div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
						<h3 className="text-2xl font-bold mb-4">Stay Updated! 📬</h3>
						<p className="text-muted-foreground mb-6">
							Be the first to know about our latest arrivals and exclusive offers.
						</p>
						<Button size="lg" className="rounded-full px-8">
							Subscribe to Newsletter
						</Button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default NewArrivalsPage;
