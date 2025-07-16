import ClientWrapper from '@/components/ClientWrapper';
import HeroBanner from '@/components/home/HeroBanner';
import FlashSale from '@/components/home/FlashSale';
import Categories from '@/components/home/Categories';

export default function HomePage() {
  return (
    <ClientWrapper>
      <HeroBanner />
      <FlashSale />
      <Categories />
    </ClientWrapper>
  );
}