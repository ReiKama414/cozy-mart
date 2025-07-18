"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, ArrowRight, Gift, Tag, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Coupon, useCartStore } from "@/lib/store";
import { coupons } from "@/lib/data";
import Link from "next/link";

const CartPage = () => {
	const { items, updateQuantity, removeItem, getTotal, clearCart } = useCartStore();
	const [couponCode, setCouponCode] = useState("");
	const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
	const [isCheckingOut, setIsCheckingOut] = useState(false);

	const subtotal = getTotal();
	const shipping = subtotal > 3000 ? 0 : 500;
	const discount = appliedCoupon
		? appliedCoupon.type === "percentage"
			? (subtotal * appliedCoupon.discount) / 100
			: appliedCoupon.discount
		: 0;
	const total = subtotal + shipping - discount;

	const applyCoupon = () => {
		const coupon = coupons.find((c) => c.code === couponCode.toUpperCase());
		if (coupon && subtotal >= coupon.minAmount) {
			setAppliedCoupon(coupon);
			setCouponCode("");
		}
	};

	const handleCheckout = () => {
		setIsCheckingOut(true);
		// Simulate checkout process
		setTimeout(() => {
			setIsCheckingOut(false);
			// Navigate to checkout page
		}, 2000);
	};

	if (items.length === 0) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-md mx-auto">
						<div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
							<ShoppingBag className="h-12 w-12 text-muted-foreground" />
						</div>
						<h1 className="text-2xl font-bold mb-4">Your cart is empty 🛒</h1>
						<p className="text-muted-foreground mb-8">
							Looks like you haven't added any cozy items yet. Let's find something perfect for you!
						</p>
						<Link href="/">
							<Button size="lg" className="rounded-full px-8">
								Start Shopping
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</motion.div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8">
			<div className="container mx-auto px-4">
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
					<h1 className="text-3xl font-bold mb-2">Shopping Cart 🛍️</h1>
					<p className="text-muted-foreground">
						{items.length} {items.length === 1 ? "item" : "items"} in your cart
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2 space-y-4">
						<AnimatePresence>
							{items.map((item, index) => (
								<motion.div
									key={item.product.id}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 20 }}
									transition={{ delay: index * 0.1 }}>
									<Card className="overflow-hidden">
										<CardContent className="p-6">
											<div className="flex flex-col md:flex-row gap-4">
												<div className="relative">
													<img
														src={item.product.image}
														alt={item.product.name}
														className="w-full md:w-24 h-48 md:h-24 object-cover rounded-lg"
													/>
													{item.product.isHot && <Badge className="absolute top-2 left-2 bg-red-500">Hot</Badge>}
												</div>

												<div className="flex-1">
													<div className="flex justify-between items-start mb-2">
														<h3 className="font-semibold text-lg">{item.product.name}</h3>
														<Button
															variant="ghost"
															size="icon"
															onClick={() => removeItem(item.product.id)}
															className="text-muted-foreground hover:text-destructive">
															<Trash2 className="h-4 w-4" />
														</Button>
													</div>

													<p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.product.description}</p>

													<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
														<div className="flex items-center space-x-2">
															<span className="text-lg font-bold text-primary">
																¥{item.product.price.toLocaleString()}
															</span>
															{item.product.originalPrice && (
																<span className="text-sm text-muted-foreground line-through">
																	¥{item.product.originalPrice.toLocaleString()}
																</span>
															)}
														</div>

														<div className="flex items-center space-x-3">
															<Button
																variant="outline"
																size="icon"
																onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
																disabled={item.quantity <= 1}>
																<Minus className="h-4 w-4" />
															</Button>
															<span className="w-12 text-center font-medium">{item.quantity}</span>
															<Button
																variant="outline"
																size="icon"
																onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
																<Plus className="h-4 w-4" />
															</Button>
														</div>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</AnimatePresence>

						{/* Coupon Section */}
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
							<Card>
								<CardContent className="p-6">
									<div className="flex items-center space-x-2 mb-4">
										<Tag className="h-5 w-5 text-primary" />
										<h3 className="font-semibold">Coupon Code</h3>
									</div>

									{appliedCoupon ? (
										<div className="bg-green-50 border border-green-200 rounded-lg p-4">
											<div className="flex items-center justify-between">
												<div>
													<span className="font-medium text-green-800">{appliedCoupon.code} Applied! 🎉</span>
													<p className="text-sm text-green-600">You saved ¥{discount.toLocaleString()}</p>
												</div>
												<Button variant="ghost" size="sm" onClick={() => setAppliedCoupon(null)}>
													Remove
												</Button>
											</div>
										</div>
									) : (
										<div className="flex gap-2">
											<Input
												placeholder="Enter coupon code"
												value={couponCode}
												onChange={(e) => setCouponCode(e.target.value)}
												className="flex-1"
											/>
											<Button onClick={applyCoupon} variant="outline">
												Apply
											</Button>
										</div>
									)}

									<div className="mt-4 text-sm text-muted-foreground">
										<p>Available coupons:</p>
										<div className="flex flex-wrap gap-2 mt-2">
											{coupons.map((coupon) => (
												<Badge key={coupon.id} variant="secondary" className="cursor-pointer">
													{coupon.code}
												</Badge>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>

					{/* Order Summary */}
					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
						<Card className="sticky top-8">
							<CardContent className="p-6">
								<h3 className="font-semibold text-lg mb-4 flex items-center">
									<Gift className="mr-2 h-5 w-5 text-primary" />
									Order Summary
								</h3>

								<div className="space-y-3">
									<div className="flex justify-between">
										<span>Subtotal</span>
										<span>¥{subtotal.toLocaleString()}</span>
									</div>

									<div className="flex justify-between">
										<span>Shipping</span>
										<span className={shipping === 0 ? "text-green-600" : ""}>
											{shipping === 0 ? "Free" : `¥${shipping.toLocaleString()}`}
										</span>
									</div>

									{appliedCoupon && (
										<div className="flex justify-between text-green-600">
											<span>Discount ({appliedCoupon.code})</span>
											<span>-¥{discount.toLocaleString()}</span>
										</div>
									)}

									<Separator />

									<div className="flex justify-between text-lg font-bold">
										<span>Total</span>
										<span className="text-primary">¥{total.toLocaleString()}</span>
									</div>
								</div>

								{shipping > 0 && (
									<div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
										💡 Add ¥{(3000 - subtotal).toLocaleString()} more for free shipping!
									</div>
								)}

								<Button
									className="w-full mt-6 rounded-full"
									size="lg"
									onClick={handleCheckout}
									disabled={isCheckingOut}>
									{isCheckingOut ? (
										<div className="flex items-center">
											<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
											Processing...
										</div>
									) : (
										<>
											Proceed to Checkout
											<ArrowRight className="ml-2 h-4 w-4" />
										</>
									)}
								</Button>

								<div className="mt-4 text-center">
									<Link href="/" className="text-sm text-primary hover:underline">
										Continue Shopping
									</Link>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
