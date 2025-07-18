"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Package, Heart, Gift, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/lib/store";
import Link from "next/link";

interface NotificationModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
	const { isAuthenticated } = useUserStore();

	const notifications = [
		{
			id: 1,
			type: "order",
			icon: Package,
			title: "Order Shipped",
			message: "Your Cozy Cloud Pillow is on its way!",
			time: "2 hours ago",
			unread: true,
			color: "text-blue-600",
			bg: "bg-blue-100",
		},
		{
			id: 2,
			type: "wishlist",
			icon: Heart,
			title: "Wishlist Item on Sale",
			message: "Kawaii Cat Lamp is now 20% off",
			time: "4 hours ago",
			unread: true,
			color: "text-red-600",
			bg: "bg-red-100",
		},
		{
			id: 3,
			type: "promotion",
			icon: Gift,
			title: "Special Offer",
			message: "Free shipping on orders over ¥3,000",
			time: "1 day ago",
			unread: false,
			color: "text-green-600",
			bg: "bg-green-100",
		},
		{
			id: 4,
			type: "review",
			icon: Star,
			title: "Review Reminder",
			message: "How was your Sunset Harmony Mug?",
			time: "2 days ago",
			unread: false,
			color: "text-yellow-600",
			bg: "bg-yellow-100",
		},
	];

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
									<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<Bell className="h-8 w-8 text-primary" />
									</div>
									<h3 className="font-semibold text-lg mb-2">Sign In for Notifications</h3>
									<p className="text-muted-foreground text-sm mb-4">
										Get personalized updates about your orders, wishlist items, and special offers
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
										<Bell className="h-5 w-5 text-primary" />
										<h3 className="font-semibold">Notifications</h3>
										<Badge className="bg-red-500 text-white text-xs">
											{notifications.filter((n) => n.unread).length}
										</Badge>
									</div>
									<Button variant="ghost" size="icon" onClick={onClose}>
										<X className="h-4 w-4" />
									</Button>
								</div>

								{/* Notifications List */}
								<div className="max-h-80 overflow-y-auto">
									{notifications.map((notification, index) => (
										<motion.div
											key={notification.id}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											className={`p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors cursor-pointer ${
												notification.unread ? "bg-primary/5" : ""
											}`}>
											<div className="flex items-start space-x-3">
												<div
													className={`w-10 h-10 ${notification.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
													<notification.icon className={`h-5 w-5 ${notification.color}`} />
												</div>
												<div className="flex-1 min-w-0">
													<div className="flex items-center space-x-2 mb-1">
														<h4 className="font-medium text-sm">{notification.title}</h4>
														{notification.unread && <div className="w-2 h-2 bg-primary rounded-full" />}
													</div>
													<p className="text-xs text-muted-foreground mb-1">{notification.message}</p>
													<p className="text-xs text-muted-foreground">{notification.time}</p>
												</div>
											</div>
										</motion.div>
									))}
								</div>

								{/* Footer */}
								<div className="p-4 border-t bg-muted/30">
									<Button variant="ghost" className="w-full text-sm" size="sm">
										View All Notifications
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

export default NotificationModal;
