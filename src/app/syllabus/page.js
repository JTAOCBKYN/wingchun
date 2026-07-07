import Hero from "@/components/page/syllabus/Hero"
import Grades from "@/components/page/syllabus/Grades"

export const metadata = {
  title: {
    default: "Syllabus || Smart Wing Chun",
    template: "%s | Smart Wing Chun"
  },
  description:
    "Follow a clear path of progression through our Traditional Wing Chun syllabus, developing technical skill, practical application, discipline, and confidence at every grade."
};

export default async function Syllabus() {
  
  return (
    <main>
      <Hero />
      <Grades />
    </main>
  );
}
