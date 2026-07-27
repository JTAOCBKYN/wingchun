import Hero from "@/components/page/contact/Hero"
import Locations from "@/components/page/contact/Locations"

export const metadata = {
  title: {
    default: "Contact || Smart Wing Chun",
    template: "%s | Smart Wing Chun"
  },
  description:
    "Contact our Traditional Wing Chun academy to learn more about classes, training locations, syllabus, and how to begin your martial arts journey."
};

export default async function Contact() {
  
  return (
    <main>
      <Hero />
      <Locations />
    </main>
  );
}
