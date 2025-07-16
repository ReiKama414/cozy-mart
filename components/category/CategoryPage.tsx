"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, Grid, List, SlidersHorizontal, Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useCartStore, useAppStore } from "@/lib/store";
import { products, categories } from "@/lib/data";
import Link from "next/link";

interface CategoryPageProps {
	categoryId: string;
}

const CategoryPage = ({ categoryId }: CategoryPageProps) => {
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [sortBy, setSortBy] = useState("popular");
	const [priceRange, setPriceRange] = useState([0, 10000]);
	const [showOnSale, setShowOnSale] = useState(false);
	const [showInStock, setShowInStock] = useState(false);
	const [minRating, setMinRating] = useState(0);

	const { addItem } = useCartStore();
	const { wishlist, addToWishlist, removeFromWishlist } = useAppStore();

	const category = categories.find((c) => c.id === categoryId);
	const categoryProducts = products.filter((p) => p.category === categoryId);

	const filteredProducts = useMemo(() => {
		let filtered = categoryProducts.filter((product) => {
			if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
			if (showOnSale && !product.discount) return false;
			if (showInStock && product.stock === 0) return false;
			if (product.rating < minRating) return false;
			return true;
		});

		// Sort products
		switch (sortBy) {
			case "price-low":
				filtered.sort((a, b) => a.price - b.price);
				break;
			case "price-high":
				filtered.sort((a, b) => b.price - a.price);
				break;
			case "rating":
				filtered.sort((a, b) => b.rating - a.rating);
				break;
			case "newest":
				filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
				break;
			default: // popular
				filtered.sort((a, b) => b.reviews - a.reviews);
		}

		return filtered;
	}, [categoryProducts, priceRange, showOnSale, showInStock, minRating, sortBy]);

	if (!category) {
		return <div>Category not found</div>;
	}

	const toggleWishlist = (productId: string) => {
		if (wishlist.includes(productId)) {
			removeFromWishlist(productId);
		} else {
			addToWishlist(productId);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
					<div className="flex items-center space-x-3 mb-4">
						<span className="text-4xl">{category.emoji}</span>
						<div>
							<h1 className="text-3xl font-bold">{category.name}</h1>
							<p className="text-muted-foreground">{filteredProducts.length} products found</p>
						</div>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Filters Sidebar */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
						<Card className="sticky top-8">
							<CardContent className="p-6">
								<div className="flex items-center space-x-2 mb-6">
									<SlidersHorizontal className="h-5 w-5 text-primary" />
									<h3 className="font-semibold">Filters</h3>
								</div>

								<div className="space-y-6">
									{/* Price Range */}
									<div>
										<h4 className="font-medium mb-3">Price Range</h4>
										<Slider value={priceRange} onValueChange={setPriceRange} max={10000} step={100} className="mb-2" />
										<div className="flex justify-between text-sm text-muted-foreground">
											<span>¥{priceRange[0].toLocaleString()}</span>
											<span>¥{priceRange[1].toLocaleString()}</span>
										</div>
									</div>

									{/* Rating Filter */}
									<div>
										<h4 className="font-medium mb-3">Minimum Rating</h4>
										<div className="space-y-2">
											{[4, 3, 2, 1].map((rating) => (
												<div key={rating} className="flex items-center space-x-2">
													<Checkbox
														checked={minRating === rating}
														onCheckedChange={() => setMinRating(minRating === rating ? 0 : rating)}
													/>
													<div className="flex items-center">
														{Array.from({ length: rating }).map((_, i) => (
															<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
														))}
														<span className="ml-1 text-sm">& up</span>
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Other Filters */}
									<div className="space-y-3">
										<div className="flex items-center space-x-2">
											<Checkbox checked={showOnSale} onCheckedChange={(checked) => setShowOnSale(checked === true)} />
											<label className="text-sm">On Sale</label>
										</div>
										<div className="flex items-center space-x-2">
											<Checkbox checked={showInStock} onCheckedChange={(checked) => setShowInStock(checked === true)} />
											<label className="text-sm">In Stock</label>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Products */}
					<div className="lg:col-span-3">
						{/* Toolbar */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
							<div className="flex items-center space-x-4">
								<Select value={sortBy} onValueChange={setSortBy}>
									<SelectTrigger className="w-48">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="popular">Most Popular</SelectItem>
										<SelectItem value="newest">Newest First</SelectItem>
										<SelectItem value="price-low">Price: Low to High</SelectItem>
										<SelectItem value="price-high">Price: High to Low</SelectItem>
										<SelectItem value="rating">Highest Rated</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="flex items-center space-x-2">
								<Button
									variant={viewMode === "grid" ? "default" : "outline"}
									size="icon"
									onClick={() => setViewMode("grid")}>
									<Grid className="h-4 w-4" />
								</Button>
								<Button
									variant={viewMode === "list" ? "default" : "outline"}
									size="icon"
									onClick={() => setViewMode("list")}>
									<List className="h-4 w-4" />
								</Button>
							</div>
						</motion.div>

						{/* Products Grid */}
						<div
							className={`grid gap-6 ${
								viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
							}`}>
							{filteredProducts.map((product, index) => (
								<motion.div
									key={product.id}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}>
									<Card className={`group card-hover overflow-hidden ${viewMode === "list" ? "flex-row" : ""}`}>
										<div className="relative">
											<Link href={`/product/${product.id}`}>
												<img
													src={product.image}
													alt={product.name}
													className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
														viewMode === "list" ? "w-48 h-48" : "w-full h-48"
													}`}
												/>
											</Link>

											{/* Badges */}
											<div className="absolute top-2 left-2 flex flex-col gap-1">
												{product.isHot && <Badge className="bg-red-500 hover:bg-red-600">🔥 Hot</Badge>}
												{product.isNew && <Badge className="bg-green-500 hover:bg-green-600">✨ New</Badge>}
												{product.discount && (
													<Badge className="bg-orange-500 hover:bg-orange-600">-{product.discount}%</Badge>
												)}
											</div>

											{/* Wishlist button */}
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

										<CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
											<Link href={`/product/${product.id}`}>
												<h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
													{product.name}
												</h3>
											</Link>

											{viewMode === "list" && (
												<p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
											)}

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
												<span className={`text-sm ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
													{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
												</span>
											</div>

											<Button
												onClick={() => addItem(product)}
												className="w-full rounded-full group"
												disabled={product.stock === 0}>
												<ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce-gentle" />
												{product.stock > 0 ? "Add to Cart" : "Out of Stock"}
											</Button>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>

						{filteredProducts.length === 0 && (
							<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
								<div className="text-6xl mb-4">🔍</div>
								<h3 className="text-xl font-semibold mb-2">No products found</h3>
								<p className="text-muted-foreground">Try adjusting your filters to see more results</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
