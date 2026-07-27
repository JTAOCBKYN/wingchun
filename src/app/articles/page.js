import Hero from "@/components/page/articles/Hero"
import Articles from "@/components/page/articles/Articles"

export const metadata = {
  title: {
    default: "Articles || Smart Wing Chun",
    template: "%s | Smart Wing Chun"
  },
  description:
    "Read the latest articles on Traditional Wing Chun, covering martial arts techniques, training advice, self-defence, club updates, and the principles behind effective Wing Chun practice."
};

export default async function Classes() {
  
  return (
    <main>
      <Hero />
      <Articles />
    </main>
  );
}
