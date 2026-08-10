import { Hero } from "@/components/hero";
import {
  ProductGrid,
  WhyClyclick,
  CustomDevBlock,
  Niches,
  Trust,
  FinalCta,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <WhyClyclick />
      <CustomDevBlock />
      <Niches />
      <Trust />
      <FinalCta />
    </>
  );
}
