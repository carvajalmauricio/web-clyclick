import { Hero } from "@/components/hero";
import {
  ProductGrid,
  WhyClyclick,
  CustomDevBlock,
  Niches,
  FinalCta,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Niches />
      <WhyClyclick />
      <CustomDevBlock />
      <ProductGrid />
      <FinalCta />
    </>
  );
}
