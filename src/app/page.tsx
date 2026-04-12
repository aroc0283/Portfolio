import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Framework } from "@/components/portfolio/Framework";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <Work />
      <Framework />
      <Testimonials />
      <Contact />
    </main>
  );
}
