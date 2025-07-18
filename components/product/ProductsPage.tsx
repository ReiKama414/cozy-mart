"use client";

import CategoryPage from "@/components/category/CategoryPage";

const ALL_PRODUCTS_ID = "all";

const ProductsPage = () => {
	return <CategoryPage categoryId={ALL_PRODUCTS_ID} />;
};

export default ProductsPage;
