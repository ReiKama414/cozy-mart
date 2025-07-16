import ClientWrapper from "@/components/ClientWrapper";
import CategoryPage from "@/components/category/CategoryPage";

export default async function Category({ params }: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params;
	return (
		<ClientWrapper>
			<CategoryPage categoryId={resolvedParams.id} />
		</ClientWrapper>
	);
}
