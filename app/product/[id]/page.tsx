export const dynamic = "force-dynamic";

import ClientWrapper from "@/components/ClientWrapper";
import ProductPage from "@/components/product/ProductPage";

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params;
	return (
		<ClientWrapper>
			<ProductPage productId={resolvedParams.id} />
		</ClientWrapper>
	);
}
