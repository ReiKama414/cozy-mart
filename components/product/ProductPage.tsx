"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart, Plus, Minus, Share2, Shield, Truck, RotateCcw, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCartStore, useAppStore } from "@/lib/store";
import { products } from "@/lib/data";
import Link from "next/link";

interface ProductPageProps {
	productId: string;
}

const ProductPage = ({ productId }: ProductPageProps) => {
	const [quantity, setQuantity] = useState(1);
	const [selectedImage, setSelectedImage] = useState(0);

	const { addItem } = useCartStore();
	const { wishlist, addToWishlist, removeFromWishlist, addToRecentlyViewed } = useAppStore();

	const product = products.find((p) => p.id === productId);
	const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== productId).slice(0, 4);

	React.useEffect(() => {
		if (product) {
			addToRecentlyViewed(product.id);
		}
	}, [product, addToRecentlyViewed]);

	if (!product) {
		return <div>Product not found</div>;
	}

	const isInWishlist = wishlist.includes(product.id);
	const totalPrice = product.price * quantity;

	const toggleWishlist = () => {
		if (isInWishlist) {
			removeFromWishlist(product.id);
		} else {
			addToWishlist(product.id);
		}
	};

	const handleAddToCart = () => {
		addItem(product, quantity);
	};

	// Mock additional images (in real app, these would come from product data)
	const productImages = [
		product.image,
		product.image, // Placeholder for additional angles
		product.image,
	];

	const mockReviews = [
		{
			id: 1,
			user: "Sarah M.",
			rating: 5,
			comment: "Absolutely love this! Super cozy and exactly as described.",
			date: "2024-01-15",
			verified: true,
		},
		{
			id: 2,
			user: "Mike T.",
			rating: 4,
			comment: "Great quality and fast shipping. Would recommend!",
			date: "2024-01-10",
			verified: true,
		},
		{
			id: 3,
			user: "Emma L.",
			rating: 5,
			comment: "Perfect for my living room. The color is beautiful!",
			date: "2024-01-08",
			verified: false,
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8">
			<div className="container mx-auto px-4">
				{/* Breadcrumb */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-8 text-sm text-muted-foreground">
					<Link href="/" className="hover:text-primary">
						Home
					</Link>
					<span className="mx-2">/</span>
					<Link href={`/category/${product.category}`} className="hover:text-primary">
						{product.category}
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">{product.name}</span>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* Product Images */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
						<div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
							<img src={productImages[selectedImage]} alt={product.name} className="w-full h-full object-cover" />

							{/* Badges */}
							<div className="absolute top-4 left-4 flex flex-col gap-2">
								{product.isHot && <Badge className="bg-red-500 hover:bg-red-600">🔥 Hot</Badge>}
								{product.isNew && <Badge className="bg-green-500 hover:bg-green-600">✨ New</Badge>}
								{product.discount && <Badge className="bg-orange-500 hover:bg-orange-600">-{product.discount}%</Badge>}
							</div>

							{/* Share button */}
							<Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
								<Share2 className="h-4 w-4" />
							</Button>
						</div>

						{/* Thumbnail images */}
						<div className="flex space-x-2">
							{productImages.map((image, index) => (
								<button
									key={index}
									onClick={() => setSelectedImage(index)}
									className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
										selectedImage === index ? "border-primary" : "border-transparent"
									}`}>
									<img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
								</button>
							))}
						</div>
					</motion.div>

					{/* Product Info */}
					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
						<div>
							<h1 className="text-3xl font-bold mb-2">{product.name}</h1>

							<div className="flex items-center space-x-4 mb-4">
								<div className="flex items-center space-x-1">
									{Array.from({ length: 5 }).map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${
												i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
											}`}
										/>
									))}
									<span className="text-sm text-muted-foreground ml-2">
										{product.rating} ({product.reviews} reviews)
									</span>
								</div>
							</div>

							<div className="flex items-center space-x-2 mb-4">
								{product.tags.map((tag) => (
									<Badge key={tag} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>
						</div>

						{/* Price */}
						<div className="flex items-center space-x-4">
							<span className="text-3xl font-bold text-primary">¥{product.price.toLocaleString()}</span>
							{product.originalPrice && (
								<span className="text-xl text-muted-foreground line-through">
									¥{product.originalPrice.toLocaleString()}
								</span>
							)}
							{product.discount && <Badge className="bg-red-500 text-white">Save {product.discount}%</Badge>}
						</div>

						{/* Stock status */}
						<div className="flex items-center space-x-2">
							<div className={`w-3 h-3 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`} />
							<span className={`font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
								{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
							</span>
						</div>

						{/* Description */}
						<p className="text-muted-foreground leading-relaxed">{product.description}</p>

						{/* Quantity and Add to Cart */}
						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<span className="font-medium">Quantity:</span>
								<div className="flex items-center space-x-2">
									<Button
										variant="outline"
										size="icon"
										onClick={() => setQuantity(Math.max(1, quantity - 1))}
										disabled={quantity <= 1}>
										<Minus className="h-4 w-4" />
									</Button>
									<span className="w-12 text-center font-medium">{quantity}</span>
									<Button
										variant="outline"
										size="icon"
										onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
										disabled={quantity >= product.stock}>
										<Plus className="h-4 w-4" />
									</Button>
								</div>
							</div>

							<div className="flex space-x-4">
								<Button
									onClick={handleAddToCart}
									className="flex-1 rounded-full"
									size="lg"
									disabled={product.stock === 0}>
									<ShoppingCart className="mr-2 h-5 w-5" />
									Add to Cart - ¥{totalPrice.toLocaleString()}
								</Button>

								<Button variant="outline" size="lg" onClick={toggleWishlist} className="rounded-full">
									<Heart className={`h-5 w-5 ${isInWishlist ? "fill-red-500 text-red-500" : ""}`} />
								</Button>
							</div>
						</div>

						{/* Features */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
							<div className="flex items-center space-x-2 text-sm">
								<Truck className="h-4 w-4 text-primary" />
								<span>Free shipping over ¥3,000</span>
							</div>
							<div className="flex items-center space-x-2 text-sm">
								<RotateCcw className="h-4 w-4 text-primary" />
								<span>30-day returns</span>
							</div>
							<div className="flex items-center space-x-2 text-sm">
								<Shield className="h-4 w-4 text-primary" />
								<span>2-year warranty</span>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Product Details Tabs */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16">
					<Tabs defaultValue="description" className="w-full">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="description">Description</TabsTrigger>
							<TabsTrigger value="specifications">Specifications</TabsTrigger>
							<TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
						</TabsList>

						<TabsContent value="description" className="mt-6">
							<Card>
								<CardContent className="p-6">
									<h3 className="font-semibold mb-4">Product Description</h3>
									<div className="prose max-w-none">
										<p className="mb-4">{product.description}</p>
										<p className="mb-4">
											This carefully crafted item brings comfort and style to your daily life. Made with premium
											materials and attention to detail, it's designed to last while providing the cozy experience you
											deserve.
										</p>
										<ul className="list-disc list-inside space-y-1 text-muted-foreground">
											<li>Premium quality materials</li>
											<li>Comfortable and durable design</li>
											<li>Easy to care for and maintain</li>
											<li>Perfect for everyday use</li>
										</ul>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="specifications" className="mt-6">
							<Card>
								<CardContent className="p-6">
									<h3 className="font-semibold mb-4">Specifications</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<dt className="font-medium">Category</dt>
											<dd className="text-muted-foreground mb-3">{product.category}</dd>

											<dt className="font-medium">Stock</dt>
											<dd className="text-muted-foreground mb-3">{product.stock} units</dd>

											<dt className="font-medium">Rating</dt>
											<dd className="text-muted-foreground mb-3">{product.rating}/5 stars</dd>
										</div>
										<div>
											<dt className="font-medium">Tags</dt>
											<dd className="text-muted-foreground mb-3">{product.tags.join(", ")}</dd>

											<dt className="font-medium">Reviews</dt>
											<dd className="text-muted-foreground mb-3">{product.reviews} customer reviews</dd>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="reviews" className="mt-6">
							<Card>
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-6">
										<h3 className="font-semibold">Customer Reviews</h3>
										<Button variant="outline" size="sm">
											<MessageCircle className="mr-2 h-4 w-4" />
											Write Review
										</Button>
									</div>

									<div className="space-y-6">
										{mockReviews.map((review) => (
											<div key={review.id} className="border-b pb-6 last:border-b-0">
												<div className="flex items-center justify-between mb-2">
													<div className="flex items-center space-x-2">
														<span className="font-medium">{review.user}</span>
														{review.verified && (
															<Badge variant="secondary" className="text-xs">
																Verified Purchase
															</Badge>
														)}
													</div>
													<span className="text-sm text-muted-foreground">{review.date}</span>
												</div>

												<div className="flex items-center space-x-1 mb-2">
													{Array.from({ length: 5 }).map((_, i) => (
														<Star
															key={i}
															className={`h-4 w-4 ${
																i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
															}`}
														/>
													))}
												</div>

												<p className="text-muted-foreground">{review.comment}</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</motion.div>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
						<h2 className="text-2xl font-bold mb-8">You might also like ✨</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{relatedProducts.map((relatedProduct, index) => (
								<motion.div
									key={relatedProduct.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 * index }}>
									<Card className="group card-hover overflow-hidden">
										<Link href={`/product/${relatedProduct.id}`}>
											<img
												src={relatedProduct.image}
												alt={relatedProduct.name}
												className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
											/>
										</Link>
										<CardContent className="p-4">
											<Link href={`/product/${relatedProduct.id}`}>
												<h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
													{relatedProduct.name}
												</h3>
											</Link>
											<div className="flex items-center justify-between">
												<span className="font-bold text-primary">¥{relatedProduct.price.toLocaleString()}</span>
												<Button size="sm" onClick={() => addItem(relatedProduct)} className="rounded-full">
													<ShoppingCart className="h-4 w-4" />
												</Button>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default ProductPage;
