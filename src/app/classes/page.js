import Hero from "@/components/page/classes/Hero"
import Locations from "@/components/page/classes/Locations"
import Video from "@/components/page/classes/Video"

export const metadata = {
  title: {
    default: "Classes || Smart Wing Chun",
    template: "%s | Smart Wing Chun"
  },
  description:
    "Traditional Wing Chun classes for all levels, focusing on practical self-defence, structure, and personal development. Train in a disciplined, supportive environment suitable for men, women, and children aged 10+."
};

export default async function Classes() {
  
  return (
    <main>
      <Hero />
      <Locations />
      <Video />
    </main>
  );
}
