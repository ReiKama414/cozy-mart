"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const CookieBanner = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	useEffect(() => {
		const cookieConsent = localStorage.getItem("cookieConsent");
		if (!cookieConsent) {
			setIsVisible(true);
		}
	}, []);

	const handleAcceptAll = () => {
		localStorage.setItem("cookieConsent", "all");
		setIsVisible(false);
	};

	const handleAcceptNecessary = () => {
		localStorage.setItem("cookieConsent", "necessary");
		setIsVisible(false);
	};

	const handleReject = () => {
		localStorage.setItem("cookieConsent", "rejected");
		setIsVisible(false);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
					<Card className="shadow-lg border-2 border-primary/20">
						<CardContent className="p-4">
							{!showSettings ? (
								<>
									<div className="flex items-start space-x-3 mb-4">
										<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
											<Cookie className="h-5 w-5 text-orange-600" />
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-sm mb-1">We use cookies 🍪</h3>
											<p className="text-xs text-muted-foreground">
												We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept
												All", you consent to our use of cookies.
											</p>
										</div>
										<Button variant="ghost" size="icon" onClick={() => setIsVisible(false)} className="h-6 w-6">
											<X className="h-3 w-3" />
										</Button>
									</div>

									<div className="flex flex-col space-y-2">
										<div className="flex space-x-2">
											<Button onClick={handleAcceptAll} size="sm" className="flex-1 rounded-full text-xs">
												Accept All
											</Button>
											<Button
												onClick={() => setShowSettings(true)}
												variant="outline"
												size="sm"
												className="rounded-full text-xs">
												<Settings className="h-3 w-3 mr-1" />
												Settings
											</Button>
										</div>

										<div className="flex justify-center space-x-4 text-xs">
											<Link href="/privacy" className="text-primary hover:underline">
												Privacy Policy
											</Link>
											<Link href="/terms" className="text-primary hover:underline">
												Terms of Service
											</Link>
										</div>
									</div>
								</>
							) : (
								<>
									<div className="flex items-center justify-between mb-4">
										<h3 className="font-semibold text-sm">Cookie Settings</h3>
										<Button variant="ghost" size="icon" onClick={() => setShowSettings(false)} className="h-6 w-6">
											<X className="h-3 w-3" />
										</Button>
									</div>

									<div className="space-y-3 mb-4">
										<div className="flex items-center justify-between">
											<div>
												<h4 className="text-xs font-medium">Necessary Cookies</h4>
												<p className="text-xs text-muted-foreground">Required for basic functionality</p>
											</div>
											<div className="text-xs text-green-600 font-medium">Always On</div>
										</div>

										<div className="flex items-center justify-between">
											<div>
												<h4 className="text-xs font-medium">Analytics Cookies</h4>
												<p className="text-xs text-muted-foreground">Help us improve our website</p>
											</div>
											<input type="checkbox" className="rounded" defaultChecked />
										</div>

										<div className="flex items-center justify-between">
											<div>
												<h4 className="text-xs font-medium">Marketing Cookies</h4>
												<p className="text-xs text-muted-foreground">Personalized ads and content</p>
											</div>
											<input type="checkbox" className="rounded" />
										</div>
									</div>

									<div className="flex space-x-2">
										<Button
											onClick={handleAcceptNecessary}
											variant="outline"
											size="sm"
											className="flex-1 rounded-full text-xs">
											Necessary Only
										</Button>
										<Button onClick={handleAcceptAll} size="sm" className="flex-1 rounded-full text-xs">
											Accept All
										</Button>
									</div>
								</>
							)}
						</CardContent>
					</Card>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CookieBanner;
