import Hero from "@/components/page/home/Hero"
import Intro from "@/components/page/home/Intro"
import Syllabus from "@/components/page/home/Syllabus"

export const metadata = {
  title: {
    default: "Smart Wing Chun",
    template: "%s | Smart Wing Chun"
  },
  description:
    "Train in Traditional Wing Chun with instructors who have studied both modified and traditional systems and tested their skills in real-life situations. Welcoming students aged 10+, regardless of fitness level or disability."
};

export default async function HomePage() {
  
  return (
    <main>
      <Hero />
      <Intro />
      <Syllabus />
    </main>
  );
}
