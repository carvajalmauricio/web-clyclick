import { ProjectShowcase } from "@/components/project-showcase";
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
      <ProjectShowcase />
      <WhyClyclick />
      <CustomDevBlock />
      <ProductGrid />
      <FinalCta />
    </>
  );
}
