import Hero from "@/components/page/history/Hero"
import OurHistory from "@/components/page/history/OurHistory"
import TheHistory from "@/components/page/history/TheHistory"

export const metadata = {
  title: {
    default: "History || Smart Wing Chun",
    template: "%s | Smart Wing Chun"
  },
  description:
    "Discover the history of our Wing Chun club and the origins of this traditional martial art. Explore our lineage, training journey, and the principles that have shaped Wing Chun for over 300 years."
};

export default async function History() {
  
  return (
    <main>
      <Hero />
      <OurHistory />
      <TheHistory />
    </main>
  );
}
