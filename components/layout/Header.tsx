"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Heart, Menu, X, MapPin, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCartStore, useUserStore, useAppStore } from "@/lib/store";
import { categories, popularSearches } from "@/lib/data";
import { useRouter } from "next/navigation";
import NotificationModal from "../modals/NotificationModal";
import WishlistModal from "../modals/WishlistModal";

const Header = () => {
	const router = useRouter();
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const [isWishlistOpen, setIsWishlistOpen] = useState(false);

	const { getItemCount } = useCartStore();
	const { isAuthenticated, user } = useUserStore();
	const { wishlist, searchHistory, addToSearchHistory } = useAppStore();

	const cartItemCount = getItemCount();

	useEffect(() => setIsMounted(true), []);

	const handleSearch = (query: string) => {
		if (query.trim()) {
			addToSearchHistory(query);
			setSearchQuery("");
			setIsSearchFocused(false);
		}
	};

	return (
		<>
			<header className="sticky top-0 z-50 glass-effect border-b">
				{/* Top announcement bar */}
				<div className="bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground py-2 px-4 text-center text-sm">
					🎉 Free shipping on orders over ¥3,000! Limited time offer
				</div>

				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between gap-4">
						{/* Mobile menu button */}
						<Button
							variant="ghost"
							size="icon"
							className="lg:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							{isMobileMenuOpen ? <X /> : <Menu />}
						</Button>

						{/* Logo */}
						<Link href="/" className="flex items-center space-x-2 md:w-auto w-full">
							<motion.div
								className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								<span className="text-lg font-bold text-white">🌸</span>
							</motion.div>
							<span className="text-xl font-bold text-gradient hidden sm:block">Cozy</span>
						</Link>

						{/* Search bar */}
						<div className="flex-1 max-w-xl relative md:block hidden">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
								<Input
									placeholder="Search for cozy items..."
									className="pl-10 pr-4 rounded-full border-2 focus:border-primary transition-colors"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									onFocus={() => setIsSearchFocused(true)}
									onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
									onKeyPress={(e) => e.key === "Enter" && handleSearch(searchQuery)}
								/>
							</div>

							{/* Search suggestions dropdown */}
							<AnimatePresence>
								{isSearchFocused && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-lg shadow-lg z-50">
										<div className="p-4">
											{searchHistory.length > 0 && (
												<div className="mb-4">
													<h4 className="text-sm font-medium mb-2 text-muted-foreground">Recent Searches</h4>
													<div className="space-y-1">
														{searchHistory.slice(0, 3).map((term, index) => (
															<button
																key={index}
																className="w-full text-left px-2 py-1 hover:bg-muted rounded text-sm"
																onClick={() => handleSearch(term)}>
																{term}
															</button>
														))}
													</div>
												</div>
											)}

											<div>
												<h4 className="text-sm font-medium mb-2 text-muted-foreground">Popular Searches</h4>
												<div className="flex flex-wrap gap-2">
													{popularSearches.map((term, index) => (
														<Button
															key={index}
															variant="secondary"
															size="sm"
															className="text-xs"
															onClick={() => handleSearch(term)}>
															{term}
														</Button>
													))}
												</div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Navigation icons */}
						<div className="flex items-center space-x-2">
							<Button variant="ghost" size="icon" className="relative" onClick={() => setIsNotificationOpen(true)}>
								<Bell className="h-5 w-5" />
								{isAuthenticated && <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-primary">3</Badge>}
							</Button>

							<Button variant="ghost" size="icon" className="relative" onClick={() => setIsWishlistOpen(true)}>
								<Heart className="h-5 w-5" />
								{wishlist.length > 0 && (
									<Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-primary">{wishlist.length}</Badge>
								)}
							</Button>

							<Button onClick={() => router.push("/cart")} variant="ghost" size="icon" className="relative">
								<ShoppingCart className="h-5 w-5" />
								{isMounted && cartItemCount > 0 && (
									<div className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md border border-white dark:border-zinc-950 transition-all scale-100">
										{cartItemCount}
									</div>
								)}
							</Button>

							{isAuthenticated ? (
								<Button onClick={() => router.push("/profile")} variant="ghost" size="icon">
									{user?.avatar ? (
										<img src={user.avatar} alt={user.name} className="h-6 w-6 rounded-full object-cover" />
									) : (
										<User className="h-5 w-5" />
									)}
								</Button>
							) : (
								<Button onClick={() => router.push("/login")} variant="ghost" size="icon">
									<User className="h-5 w-5" />
								</Button>
							)}
						</div>
					</div>

					{/* Desktop navigation */}
					<nav className="hidden lg:flex items-center justify-between mt-4 pt-4 border-t">
						<div className="flex items-center space-x-6">
							{categories.map((category) => (
								<Link
									key={category.id}
									href={`/category/${category.id}`}
									className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors group">
									<span className="group-hover:animate-bounce-gentle">{category.emoji}</span>
									<span>{category.name}</span>
								</Link>
							))}
						</div>

						<div className="flex items-center space-x-2 text-sm text-muted-foreground">
							<MapPin className="h-4 w-4" />
							<span>Delivery to Tokyo</span>
						</div>
					</nav>

					{/* Mobile search bar */}
					<div className="md:hidden mt-4">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
							<Input
								placeholder="Search for cozy items..."
								className="pl-10 pr-4 rounded-full border-2 focus:border-primary transition-colors"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								onKeyPress={(e) => e.key === "Enter" && handleSearch(searchQuery)}
							/>
						</div>
					</div>
				</div>

				{/* Mobile navigation */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="lg:hidden border-t bg-background">
							<nav className="container mx-auto px-4 py-4 space-y-4">
								{categories.map((category) => (
									<Link
										key={category.id}
										href={`/category/${category.id}`}
										className="flex items-center space-x-3 py-2 text-sm font-medium hover:text-primary transition-colors"
										onClick={() => setIsMobileMenuOpen(false)}>
										<span className="text-lg">{category.emoji}</span>
										<span>{category.name}</span>
									</Link>
								))}
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			{/* Modals */}
			<NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
			<WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
		</>
	);
};

export default Header;
