import ClientWrapper from "@/components/ClientWrapper";
import CategoryPage from "@/components/category/CategoryPage";

export default function Category({ params }: { params: { id: string } }) {
	return (
		<ClientWrapper>
			<CategoryPage categoryId={params.id} />
		</ClientWrapper>
	);
}
