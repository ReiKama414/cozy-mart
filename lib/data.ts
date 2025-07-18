import { Product, Order, Coupon } from "./store";

// Mock product data by GPT
export const products: Product[] = [
	{
		id: "1",
		name: "Cozy Cloud Pillow",
		price: 2980,
		originalPrice: 3980,
		image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "home",
		description: "Ultra-soft memory foam pillow with bamboo fiber cover for the most comfortable sleep experience.",
		rating: 4.8,
		reviews: 324,
		stock: 45,
		tags: ["comfortable", "eco-friendly", "bestseller"],
		isHot: true,
		discount: 25,
	},
	{
		id: "2",
		name: "Minimalist Plant Pot",
		price: 1580,
		image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "home",
		description: "Elegant ceramic plant pot with drainage system, perfect for your favorite plants.",
		rating: 4.6,
		reviews: 128,
		stock: 23,
		tags: ["ceramic", "minimalist", "plants"],
		isNew: true,
	},
	{
		id: "3",
		name: "Sunset Harmony Mug",
		price: 980,
		originalPrice: 1280,
		image: "https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "kitchen",
		description: "Hand-crafted ceramic mug with warm gradient colors that changes with temperature.",
		rating: 4.9,
		reviews: 567,
		stock: 78,
		tags: ["handmade", "color-changing", "unique"],
		isHot: true,
		discount: 23,
	},
	{
		id: "4",
		name: "Zen Garden Kit",
		price: 3480,
		image:
			"https://images.unsplash.com/photo-1676182123537-5c250a872ea3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "lifestyle",
		description: "Complete zen garden set with sand, stones, and wooden rake for mindful meditation.",
		rating: 4.7,
		reviews: 89,
		stock: 12,
		tags: ["meditation", "zen", "mindfulness"],
		isNew: true,
	},
	{
		id: "5",
		name: "Kawaii Cat Lamp",
		price: 2680,
		originalPrice: 3280,
		image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "decor",
		description: "Adorable cat-shaped LED lamp with touch control and warm ambient lighting.",
		rating: 4.8,
		reviews: 456,
		stock: 34,
		tags: ["cute", "led", "night-light"],
		isHot: true,
		discount: 18,
	},
	{
		id: "6",
		name: "Artisan Tea Set",
		price: 5980,
		image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "kitchen",
		description: "Traditional Japanese ceramic tea set with teapot, cups, and bamboo tray.",
		rating: 4.9,
		reviews: 234,
		stock: 18,
		tags: ["traditional", "ceramic", "tea-ceremony"],
		isNew: true,
	},
	{
		id: "7",
		name: "Fluffy Cloud Slippers",
		price: 1980,
		originalPrice: 2480,
		image:
			"https://plus.unsplash.com/premium_photo-1732333561328-fb8ff00d3665?q=80&w=447&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "fashion",
		description: "Ultra-soft memory foam slippers that feel like walking on clouds.",
		rating: 4.7,
		reviews: 678,
		stock: 67,
		tags: ["comfortable", "memory-foam", "cozy"],
		isHot: true,
		discount: 20,
	},
	{
		id: "8",
		name: "Bamboo Desk Organizer",
		price: 2380,
		image:
			"https://plus.unsplash.com/premium_photo-1736505437580-7d2dfc89994e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "office",
		description: "Sustainable bamboo desk organizer with multiple compartments for perfect organization.",
		rating: 4.6,
		reviews: 145,
		stock: 29,
		tags: ["bamboo", "eco-friendly", "organization"],
		isNew: true,
	},
	{
		id: "9",
		name: "Cozy Reading Blanket",
		price: 3980,
		originalPrice: 4980,
		image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "home",
		description: "Luxuriously soft weighted blanket perfect for reading sessions and relaxation.",
		rating: 4.9,
		reviews: 892,
		stock: 56,
		tags: ["weighted", "soft", "relaxation"],
		isHot: true,
		discount: 20,
	},
	{
		id: "10",
		name: "Ceramic Dinner Set",
		price: 7980,
		image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "kitchen",
		description: "Beautiful 16-piece ceramic dinner set with modern minimalist design.",
		rating: 4.7,
		reviews: 203,
		stock: 15,
		tags: ["ceramic", "dinner-set", "modern"],
		isNew: true,
	},
	{
		id: "11",
		name: "Aromatherapy Diffuser",
		price: 4580,
		originalPrice: 5580,
		image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "lifestyle",
		description: "Ultrasonic essential oil diffuser with LED mood lighting and timer function.",
		rating: 4.8,
		reviews: 367,
		stock: 42,
		tags: ["aromatherapy", "wellness", "led"],
		isHot: true,
		discount: 18,
	},
	{
		id: "12",
		name: "Vintage Wall Clock",
		price: 2980,
		image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "decor",
		description: "Elegant vintage-style wall clock with silent movement and antique finish.",
		rating: 4.6,
		reviews: 156,
		stock: 28,
		tags: ["vintage", "silent", "antique"],
		isNew: true,
	},
	{
		id: "13",
		name: "Japanese Incense Set",
		price: 1680,
		originalPrice: 2180,
		image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "lifestyle",
		description: "Traditional Japanese incense sticks with wooden holder for meditation and relaxation.",
		rating: 4.5,
		reviews: 89,
		stock: 67,
		tags: ["traditional", "meditation", "aromatherapy"],
		discount: 23,
	},
	{
		id: "14",
		name: "Soft Knit Throw",
		price: 4280,
		image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "home",
		description: "Hand-knitted throw blanket made from organic cotton for ultimate comfort.",
		rating: 4.7,
		reviews: 234,
		stock: 45,
		tags: ["organic", "handmade", "cozy"],
		isNew: true,
	},
	{
		id: "15",
		name: "Ceramic Rice Bowl Set",
		price: 3280,
		image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "kitchen",
		description: "Set of 4 traditional Japanese rice bowls with beautiful glazed finish.",
		rating: 4.8,
		reviews: 167,
		stock: 23,
		tags: ["traditional", "ceramic", "dining"],
		isNew: true,
	},
	{
		id: "16",
		name: "Wooden Desk Lamp",
		price: 5680,
		originalPrice: 6980,
		image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "office",
		description: "Minimalist wooden desk lamp with adjustable brightness and USB charging port.",
		rating: 4.6,
		reviews: 145,
		stock: 34,
		tags: ["wooden", "adjustable", "usb-charging"],
		discount: 19,
	},
	{
		id: "17",
		name: "Meditation Cushion",
		price: 2880,
		image:
			"https://images.unsplash.com/photo-1597307509190-e33cb9fb3ff7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "lifestyle",
		description: "Comfortable meditation cushion filled with buckwheat hulls for proper posture.",
		rating: 4.7,
		reviews: 198,
		stock: 56,
		tags: ["meditation", "buckwheat", "posture"],
		isNew: true,
	},
	{
		id: "18",
		name: "Ceramic Vase Collection",
		price: 3680,
		originalPrice: 4680,
		image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "decor",
		description: "Set of 3 ceramic vases in different sizes with matte finish.",
		rating: 4.5,
		reviews: 123,
		stock: 29,
		tags: ["ceramic", "matte", "collection"],
		discount: 21,
	},
	{
		id: "19",
		name: "Organic Cotton Pajamas",
		price: 4980,
		image:
			"https://images.unsplash.com/photo-1713881676551-b16f22ce4719?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "fashion",
		description: "Soft organic cotton pajama set with traditional Japanese-inspired design.",
		rating: 4.8,
		reviews: 267,
		stock: 78,
		tags: ["organic", "cotton", "comfortable"],
		isNew: true,
	},
	{
		id: "20",
		name: "Bamboo Kitchen Utensils",
		price: 1880,
		originalPrice: 2380,
		image:
			"https://images.unsplash.com/photo-1660002666905-71f93b74a287?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "kitchen",
		description: "Complete set of bamboo kitchen utensils including spatulas, spoons, and chopsticks.",
		rating: 4.6,
		reviews: 189,
		stock: 67,
		tags: ["bamboo", "eco-friendly", "kitchen-set"],
		discount: 21,
	},
	{
		id: "21",
		name: "Nordic Wool Blanket",
		price: 4280,
		originalPrice: 5280,
		image: "https://images.pexels.com/photos/1125133/pexels-photo-1125133.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "home",
		description: "Cozy wool blanket inspired by Nordic patterns, perfect for chilly nights.",
		rating: 4.8,
		reviews: 311,
		stock: 38,
		tags: ["wool", "nordic", "warm"],
		isHot: true,
		discount: 19,
	},
	{
		id: "22",
		name: "Marble Serving Tray",
		price: 2480,
		image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "kitchen",
		description: "Elegant marble tray suitable for serving tea, desserts, or décor.",
		rating: 4.6,
		reviews: 97,
		stock: 21,
		tags: ["marble", "serving", "elegant"],
		isNew: true,
	},
	{
		id: "23",
		name: "Origami Paper Lamp",
		price: 3280,
		image: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "decor",
		description: "Artistic paper lamp inspired by Japanese origami design. Soft ambient lighting.",
		rating: 4.7,
		reviews: 158,
		stock: 17,
		tags: ["origami", "paper", "soft-light"],
		isNew: true,
	},
	{
		id: "24",
		name: "Ergonomic Office Chair",
		price: 10800,
		image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500",
		category: "office",
		description: "Adjustable office chair with lumbar support and breathable mesh back.",
		rating: 4.9,
		reviews: 214,
		stock: 9,
		tags: ["ergonomic", "adjustable", "mesh"],
		isHot: true,
		discount: 15,
	},
	{
		id: "25",
		name: "Linen Sleepwear Set",
		price: 4680,
		image:
			"https://images.unsplash.com/photo-1663247131274-ecbf38ec087c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "fashion",
		description: "Breathable linen pajama set designed for maximum comfort and natural feel.",
		rating: 4.8,
		reviews: 187,
		stock: 42,
		tags: ["linen", "breathable", "sleepwear"],
		isNew: true,
	},
];

// Mock categories
export const categories = [
	{ id: "home", name: "Home & Living", emoji: "🏠", color: "blush" },
	{ id: "kitchen", name: "Kitchen & Dining", emoji: "🍳", color: "sage" },
	{ id: "decor", name: "Decor & Art", emoji: "🎨", color: "cream" },
	{ id: "lifestyle", name: "Lifestyle", emoji: "✨", color: "blush" },
	{ id: "fashion", name: "Fashion", emoji: "👗", color: "sage" },
	{ id: "office", name: "Office & Study", emoji: "💼", color: "cream" },
];

// Mock popular search terms
export const popularSearches = [
	"cozy pillow",
	"ceramic mug",
	"plant pot",
	"zen garden",
	"led lamp",
	"tea set",
	"slippers",
	"desk organizer",
	"blanket",
	"diffuser",
	"wall clock",
	"dinner set",
];

// Mock coupons
export const coupons: Coupon[] = [
	{
		id: "1",
		code: "WELCOME20",
		discount: 20,
		type: "percentage",
		minAmount: 2000,
		expiresAt: new Date("2024-12-31"),
	},
	{
		id: "2",
		code: "SAVE500",
		discount: 500,
		type: "fixed",
		minAmount: 3000,
		expiresAt: new Date("2024-12-31"),
	},
	{
		id: "3",
		code: "FLASH30",
		discount: 30,
		type: "percentage",
		minAmount: 5000,
		expiresAt: new Date("2024-12-31"),
	},
	{
		id: "4",
		code: "NEWUSER15",
		discount: 15,
		type: "percentage",
		minAmount: 1000,
		expiresAt: new Date("2024-12-31"),
	},
];

// Mock orders
export const orders: Order[] = [
	{
		id: "1",
		userId: "1",
		items: [
			{ product: products[0], quantity: 1 },
			{ product: products[2], quantity: 2 },
		],
		total: 4940,
		status: "delivered",
		createdAt: new Date("2024-01-15"),
		shippingAddress: {
			name: "Demo User",
			address: "414 Sakura Street",
			city: "Tokyo",
			postalCode: "100-0001",
		},
		paymentMethod: "Credit Card",
	},
	{
		id: "2",
		userId: "1",
		items: [
			{ product: products[4], quantity: 1 },
			{ product: products[6], quantity: 1 },
		],
		total: 4660,
		status: "shipped",
		createdAt: new Date("2024-01-20"),
		shippingAddress: {
			name: "Demo User",
			address: "414 Sakura Street",
			city: "Tokyo",
			postalCode: "100-0001",
		},
		paymentMethod: "PayPal",
	},
	{
		id: "3",
		userId: "1",
		items: [{ product: products[5], quantity: 1 }],
		total: 5980,
		status: "processing",
		createdAt: new Date("2024-01-25"),
		shippingAddress: {
			name: "Demo User",
			address: "414 Sakura Street",
			city: "Tokyo",
			postalCode: "100-0001",
		},
		paymentMethod: "Credit Card",
	},
];

// Flash sale items
export const flashSaleItems = products.filter((p) => p.isHot).slice(0, 4);

// Today's specials
export const todaysSpecials = products.filter((p) => p.discount && p.discount > 15).slice(0, 6);

// New arrivals
export const newArrivals = products.filter((p) => p.isNew);

// Best sellers (mock data based on review count)
export const bestSellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 8);

// Admin dashboard stats
export const dashboardStats = {
	totalSales: 1247500,
	totalOrders: 324,
	totalProducts: products.length,
	totalUsers: 1456,
	salesGrowth: 12.5,
	ordersGrowth: 8.3,
	conversionRate: 3.2,
};

// Contact information
export const contactInfo = {
	email: "support@cozy.com",
	phone: "+1 (414) 123-4567",
	address: "414 Sakura Street, Tokyo, Japan",
	hours: {
		weekdays: "9:00 AM - 6:00 PM JST",
		weekends: "10:00 AM - 5:00 PM JST",
	},
};

// Company information
export const companyInfo = {
	name: "CozyMart",
	founded: "2020",
	mission: "To bring comfort and coziness to every home around the world",
	vision: "Creating a world where everyone has access to products that bring joy and comfort to their daily lives",
	values: ["Comfort First", "Quality", "Sustainability", "Community"],
	employees: 50,
	locations: ["Tokyo", "Osaka", "Remote"],
};

// Shipping information
export const shippingInfo = {
	domestic: {
		standard: { price: 500, days: "3-5" },
		express: { price: 1200, days: "1-2" },
		free: { price: 0, days: "5-7", minOrder: 3000 },
		sameDay: { price: 2000, days: "0", area: "Tokyo only" },
	},
	international: [
		{ region: "Asia Pacific", price: 2500, days: "5-10" },
		{ region: "North America", price: 3500, days: "7-14" },
		{ region: "Europe", price: 4000, days: "10-15" },
		{ region: "Oceania", price: 3000, days: "8-12" },
	],
};

// Return policy
export const returnPolicy = {
	period: 30, // days
	conditions: [
		"Items must be unused and in original packaging",
		"Tags must be attached for fashion items",
		"Electronics must include all accessories",
		"Personalized items cannot be returned",
	],
	process: [
		"Initiate return request online",
		"Pack items in original packaging",
		"Use prepaid return label",
		"Receive refund within 5-7 business days",
	],
};

// Size guide data
export const sizeGuide = {
	home: {
		pillows: [
			{ size: "Small", dimensions: "30cm × 30cm", description: "Perfect for accent pillows" },
			{ size: "Medium", dimensions: "45cm × 45cm", description: "Standard throw pillow size" },
			{ size: "Large", dimensions: "60cm × 60cm", description: "Statement floor pillows" },
		],
		blankets: [
			{ size: "Throw", dimensions: "130cm × 150cm", description: "Single person coverage" },
			{ size: "Twin", dimensions: "150cm × 200cm", description: "Single bed size" },
			{ size: "Queen", dimensions: "200cm × 230cm", description: "Double bed size" },
			{ size: "King", dimensions: "230cm × 260cm", description: "Large bed size" },
		],
	},
	kitchen: {
		mugs: [
			{ size: "Espresso", dimensions: "60ml", description: "Perfect for strong coffee" },
			{ size: "Standard", dimensions: "250ml", description: "Regular coffee or tea" },
			{ size: "Large", dimensions: "400ml", description: "Generous morning cup" },
		],
		plates: [
			{ size: "Dessert", dimensions: "18cm diameter", description: "Small plates for desserts" },
			{ size: "Salad", dimensions: "22cm diameter", description: "Side dishes and salads" },
			{ size: "Dinner", dimensions: "28cm diameter", description: "Main course plates" },
		],
	},
	fashion: {
		slippers: [
			{ size: "S (22-23cm)", dimensions: "EU 35-36", description: "Small feet" },
			{ size: "M (24-25cm)", dimensions: "EU 37-38", description: "Medium feet" },
			{ size: "L (26-27cm)", dimensions: "EU 39-40", description: "Large feet" },
			{ size: "XL (28-29cm)", dimensions: "EU 41-42", description: "Extra large feet" },
		],
	},
};

// FAQ data
export const faqData = [
	{
		category: "Orders & Shipping",
		questions: [
			{
				question: "How can I track my order?",
				answer:
					'You can track your order by logging into your account and visiting the "My Orders" section, or by using the tracking number sent to your email.',
			},
			{
				question: "What are your shipping options?",
				answer:
					"We offer standard shipping (3-5 days), express shipping (1-2 days), and free shipping on orders over ¥3,000. Same-day delivery is available in Tokyo.",
			},
			{
				question: "Do you ship internationally?",
				answer:
					"Yes, we ship to over 25 countries. International shipping costs and delivery times vary by destination.",
			},
		],
	},
	{
		category: "Returns & Exchanges",
		questions: [
			{
				question: "What is your return policy?",
				answer:
					"We offer a 30-day return policy for most items. Items must be unused, in original packaging, and with tags attached.",
			},
			{
				question: "How do I return an item?",
				answer:
					"Start a return request in your account, pack the item in original packaging, and use our prepaid return label.",
			},
			{
				question: "When will I receive my refund?",
				answer: "Refunds are processed within 5-7 business days after we receive your returned item.",
			},
		],
	},
	{
		category: "Products",
		questions: [
			{
				question: "Are your products eco-friendly?",
				answer:
					"We prioritize sustainability and work with eco-friendly suppliers. Many of our products are made from sustainable materials.",
			},
			{
				question: "Do you offer gift wrapping?",
				answer: "Yes, we offer free gift wrapping for most items. You can select this option during checkout.",
			},
			{
				question: "How do I care for my products?",
				answer: "Care instructions are included with each product and can also be found on the product detail pages.",
			},
		],
	},
];

// Team members
export const teamMembers = [
	{
		name: "Yuki Tanaka",
		role: "Founder & CEO",
		description: "Passionate about creating cozy spaces and sustainable living",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
		email: "yuki@cozy.com",
	},
	{
		name: "Hiroshi Sato",
		role: "Head of Product",
		description: "Expert in sourcing the most comfortable and quality products",
		image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300",
		email: "hiroshi@cozy.com",
	},
	{
		name: "Sakura Yamamoto",
		role: "Customer Experience",
		description: "Dedicated to ensuring every customer feels valued and heard",
		image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
		email: "sakura@cozy.com",
	},
	{
		name: "Kenji Nakamura",
		role: "Head of Design",
		description: "Creating beautiful, user-friendly experiences for our customers",
		image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
		email: "kenji@cozy.com",
	},
];

// Press releases
export const pressReleases = [
	{
		id: "1",
		date: "2024-01-15",
		title: "CozyMart Reaches 50,000 Happy Customers Milestone",
		excerpt:
			"Japanese comfort retailer celebrates major growth in customer base while maintaining focus on sustainability and quality.",
		category: "Company News",
		content: "Full press release content would go here...",
	},
	{
		id: "2",
		date: "2023-12-08",
		title: "CozyMart Launches Sustainable Packaging Initiative",
		excerpt:
			"New eco-friendly packaging reduces environmental impact by 60% while maintaining product protection standards.",
		category: "Sustainability",
		content: "Full press release content would go here...",
	},
	{
		id: "3",
		date: "2023-11-22",
		title: "Holiday Season Brings Record Sales for Comfort Products",
		excerpt: "CozyMart reports 200% increase in gift card sales and expanded international shipping to 25 countries.",
		category: "Business",
		content: "Full press release content would go here...",
	},
];

// Job openings
export const jobOpenings = [
	{
		id: "1",
		title: "Senior Product Manager",
		department: "Product",
		location: "Tokyo, Japan",
		type: "Full-time",
		description: "Lead product strategy and development for our cozy home collection",
		requirements: ["5+ years product management experience", "E-commerce background", "Japanese fluency"],
		posted: "2024-01-10",
	},
	{
		id: "2",
		title: "UX/UI Designer",
		department: "Design",
		location: "Remote",
		type: "Full-time",
		description: "Create beautiful, user-friendly experiences for our customers",
		requirements: ["3+ years design experience", "Figma proficiency", "Portfolio required"],
		posted: "2024-01-08",
	},
	{
		id: "3",
		title: "Customer Success Specialist",
		department: "Customer Experience",
		location: "Tokyo, Japan",
		type: "Full-time",
		description: "Help customers find their perfect cozy essentials",
		requirements: ["Customer service experience", "Excellent communication", "Problem-solving skills"],
		posted: "2024-01-05",
	},
];

// Sustainability initiatives
export const sustainabilityInitiatives = [
	{
		title: "Eco-Friendly Packaging",
		description: "Biodegradable and recyclable materials for all shipments",
		impact: "60% reduction in packaging waste",
		icon: "📦",
	},
	{
		title: "Carbon-Neutral Shipping",
		description: "Partnering with green logistics providers",
		impact: "40% lower carbon footprint",
		icon: "🚚",
	},
	{
		title: "Circular Economy",
		description: "Product take-back and recycling programs",
		impact: "1,000+ items recycled",
		icon: "♻️",
	},
	{
		title: "Local Partnerships",
		description: "Supporting local artisans and sustainable brands",
		impact: "50+ local partners",
		icon: "🤝",
	},
];

// Gift card designs
export const giftCardDesigns = [
	{
		id: "cozy",
		name: "Cozy Comfort",
		gradient: "from-blush-100 to-sage-100",
		preview: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400",
	},
	{
		id: "modern",
		name: "Modern Minimalist",
		gradient: "from-gray-100 to-blue-100",
		preview: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
	},
	{
		id: "festive",
		name: "Festive Joy",
		gradient: "from-red-100 to-green-100",
		preview: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400",
	},
	{
		id: "elegant",
		name: "Elegant Gold",
		gradient: "from-yellow-100 to-orange-100",
		preview: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400",
	},
];

// Export all data for easy access
export const mockData = {
	products,
	categories,
	popularSearches,
	coupons,
	orders,
	flashSaleItems,
	todaysSpecials,
	newArrivals,
	bestSellers,
	dashboardStats,
	contactInfo,
	companyInfo,
	shippingInfo,
	returnPolicy,
	sizeGuide,
	faqData,
	teamMembers,
	pressReleases,
	jobOpenings,
	sustainabilityInitiatives,
	giftCardDesigns,
};
