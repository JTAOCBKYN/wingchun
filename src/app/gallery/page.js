import Hero from "@/components/page/gallery/Hero"
import GalleryBlock from "@/components/page/gallery/Gallery"

export const metadata = {
  title: {
    default: "Gallery || Smart Wing Chun",
    template: "%s | Smart Wing Chun"
  },
  description:
    "Explore our Wing Chun video gallery and experience traditional training in action. View class footage, techniques, and demonstrations showcasing our approach to martial arts development."
};

export default async function Gallery() {
  
  return (
    <main>
      <Hero />
      <GalleryBlock />
    </main>
  );
}
