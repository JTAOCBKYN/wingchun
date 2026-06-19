import Button from "@/components/global/Button"
import Image from "next/image"

const Syllabus = () => {
  
  return (
    <section className="syllabus bg-red overflow-hidden py-[30px] lg:py-[80px] px-6 md:px-24 hero-mesh" data-purpose="syllabus-section">
        <div className="container mx-auto">
          <div className="wrapper flex flex-col xl:flex-row gap-y-[20px] justify-between items-center">
            <div className="wrapper flex flex-col gap-[30px] xl:max-w-[40%]">
              <div className="heading flex flex-col gap-[30px]">
                <h2 className="text-[50px] leading-none text-white font-bold">A Path of Progression.</h2>
                <p className="text-white/80 text-[20px] font-light text-left xl:max-w-[60%]">Structured training that develops skill, awareness, and control through progressive Wing Chun principles.</p>
              </div>
              <div className="items flex flex-col gap-[20px]">
                <div className="block flex flex-row gap-[10px]">
                  <div className="icon hidden xl:block font-calligraphy w-[30%] text-white/80 text-[20px]">
                    等級
                  </div>
                  <div className="content flex flex-col gap-[10px]">
                    <h3 className="text-white text-[20px]">Progress with Purpose.</h3>
                    <p className="text-[16px] text-white font-light">Our grading system is designed to measure real development, not just technical recall. Students are assessed on structure, timing, control, and understanding of core Wing Chun principles as they advance through each level of training.</p>
                  </div>
                </div>
                <div className="block flex flex-row gap-[10px]">
                  <div className="icon hidden xl:block font-calligraphy w-[30%] text-white/80 text-[20px]">
                    鐵掌
                  </div>
                  <div className="content flex flex-col gap-[10px]">
                    <h3 className="text-white text-[20px]">Conditioning Through Discipline.</h3>
                    <p className="text-[16px] text-white font-light">The 100 Day Iron Palm programme is a focused conditioning cycle that builds striking power, resilience, and body awareness through structured repetition. It develops not only physical toughness, but also patience, control, and commitment to practice.</p>
                  </div>
                </div>
              </div>
              <Button href="/syllabus" target="_self" title="Find out more" colour="red" alignmentLeft/>
            </div>
            <div className="image-wrapper w-[40%] hidden xl:block">
              <Image 
                src="/images/pexels-rdne-7045625.jpg" 
                width="512" 
                height="512" 
                alt="Close-up view of martial artists demonstrating a fighting technique indoors" 
                className="object-cover object-center w-full h-[512px] opacity-60"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Syllabus;
