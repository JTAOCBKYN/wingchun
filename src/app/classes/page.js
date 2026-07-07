import Hero from "@/components/page/classes/Hero"
import Locations from "@/components/page/classes/Locations"

export const metadata = {
  title: {
    default: "Classes || European Traiditional Wing Chun Kung Fu Association",
    template: "%s | European Traiditional Wing Chun Kung Fu Association"
  },
  description:
    "Traditional Wing Chun classes for all levels, focusing on practical self-defence, structure, and personal development. Train in a disciplined, supportive environment suitable for men, women, and children aged 10+."
};

export default async function Classes() {
  
  return (
    <main>
      <Hero />
      <Locations />
    </main>
  );
}
