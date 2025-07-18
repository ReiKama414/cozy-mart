"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore, useCartStore, useUserStore } from "@/lib/store";
import { products } from "@/lib/data";
import Link from "next/link";

interface WishlistModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const WishlistModal = ({ isOpen, onClose }: WishlistModalProps) => {
	const { wishlist, removeFromWishlist } = useAppStore();
	const { addItem } = useCartStore();
	const { isAuthenticated } = useUserStore();

	const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

	const handleAddToCart = (product: any) => {
		addItem(product);
		// Optionally remove from wishlist after adding to cart
		// removeFromWishlist(product.id);
	};

	if (!isAuthenticated) {
		return (
			<AnimatePresence>
				{isOpen && (
					<div className="fixed inset-0 z-50">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0 bg-black/20"
							onClick={onClose}
						/>

						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: -20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: -20 }}
							className="absolute top-16 right-4 w-80 z-10">
							<Card className="shadow-lg border-2 border-primary/20">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<Heart className="h-8 w-8 text-red-500" />
									</div>
									<h3 className="font-semibold text-lg mb-2">Sign In to Save Items</h3>
									<p className="text-muted-foreground text-sm mb-4">
										Create an account to save your favorite items and access them anywhere
									</p>
									<div className="flex space-x-2">
										<Link href="/login" className="flex-1">
											<Button className="w-full rounded-full" size="sm">
												Sign In
											</Button>
										</Link>
										<Button variant="outline" onClick={onClose} className="rounded-full" size="sm">
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
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 bg-black/20"
						onClick={onClose}
					/>

					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: -20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: -20 }}
						className="absolute top-16 right-4 w-96 max-h-96 z-10">
						<Card className="shadow-lg border-2 border-primary/20">
							<CardContent className="p-0">
								{/* Header */}
								<div className="flex items-center justify-between p-4 border-b">
									<div className="flex items-center space-x-2">
										<Heart className="h-5 w-5 text-red-500 fill-red-500" />
										<h3 className="font-semibold">My Wishlist</h3>
										<span className="text-sm text-muted-foreground">({wishlistProducts.length})</span>
									</div>
									<Button variant="ghost" size="icon" onClick={onClose}>
										<X className="h-4 w-4" />
									</Button>
								</div>

								{/* Wishlist Items */}
								<div className="max-h-80 overflow-y-auto">
									{wishlistProducts.length === 0 ? (
										<div className="p-8 text-center">
											<div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
												<Heart className="h-8 w-8 text-muted-foreground" />
											</div>
											<h4 className="font-medium mb-2">Your wishlist is empty</h4>
											<p className="text-sm text-muted-foreground mb-4">Save items you love to view them later</p>
											<Button onClick={onClose} className="rounded-full">
												Start Shopping
											</Button>
										</div>
									) : (
										<div className="p-2">
											{wishlistProducts.map((product, index) => (
												<motion.div
													key={product.id}
													initial={{ opacity: 0, x: 20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: index * 0.1 }}
													className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
													<Link href={`/product/${product.id}`} onClick={onClose}>
														<img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
													</Link>

													<div className="flex-1 min-w-0">
														<Link href={`/product/${product.id}`} onClick={onClose}>
															<h4 className="font-medium text-sm line-clamp-1 hover:text-primary transition-colors">
																{product.name}
															</h4>
														</Link>
														<p className="text-sm font-bold text-primary">¥{product.price.toLocaleString()}</p>
													</div>

													<div className="flex items-center space-x-1">
														<Button
															size="icon"
															variant="ghost"
															onClick={() => handleAddToCart(product)}
															className="h-8 w-8">
															<ShoppingCart className="h-4 w-4" />
														</Button>
														<Button
															size="icon"
															variant="ghost"
															onClick={() => removeFromWishlist(product.id)}
															className="h-8 w-8 text-red-500 hover:text-red-600">
															<Trash2 className="h-4 w-4" />
														</Button>
													</div>
												</motion.div>
											))}
										</div>
									)}
								</div>

								{/* Footer */}
								{wishlistProducts.length > 0 && (
									<div className="p-4 border-t bg-muted/30">
										<Button variant="ghost" className="w-full text-sm" size="sm">
											View All Wishlist Items
										</Button>
									</div>
								)}
							</CardContent>
						</Card>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default WishlistModal;
