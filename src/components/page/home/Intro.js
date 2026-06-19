import Button from "@/components/global/Button"

const Intro = () => {
  
  return (
    <section className="intro section-pattern overflow-hidden py-[30px] lg:py-[80px] px-6 md:px-24" data-purpose="intro-section">
        <div className="container mx-auto">
          <div className="wrapper flex flex-col lg:flex-row gap-y-[20px] justify-between items-center">
            <div className="heading flex flex-col gap-[10px] w-full">
              <p className="font-body text-[14px] font-bold uppercase tracking-[5px]">The Disciplines</p>
              <h2 className="text-red text-[50px] leading-none font-bold">A Legacy of Power</h2>
            </div>
            <div className="content lg:max-w-[30%]">
              <p className="text-[16px] font-light text-ink-black/80">
                Wing Chun offers a structured path of training designed to build both physical ability and mental clarity. Whether your goal is fitness, self-defence, or personal development, each discipline develops control, awareness, and efficiency under pressure.
              </p>
            </div>
          </div>
          <div className="blocks flex flex-col lg:flex-row justify-between mt-[40px] lg:mt-[80px] mb-[40px]">
            <div className="block relative lg:w-[30%] px-[30px] pt-[60px] pb-[40px] relative bg-white shadow rounded-sm flex flex-col gap-[20px]">
              <div className="label absolute top-[-10px] left-[-10px] bg-red p-[10px]">
                <h3 className="text-white font-bold tracking-[2px] text-[14px]">Philosophy of Training</h3>
              </div>
              <h4 className="text-ink-black font-bold">Empty the Mind. Begin Again.</h4>
              <p className="text-ink-black/80">Each time you step onto the training floor, you begin fresh. In Wing Chun, progress comes from a clear and receptive mind—ready to learn, repeat, and refine. Through consistent practice, simple principles become natural responses, and technique develops into instinct.</p>
            </div>
            <div className="block relative lg:w-[30%] px-[30px] pt-[60px] pb-[40px] relative bg-white shadow rounded-sm flex flex-col gap-[20px]">
              <div className="label absolute top-[-10px] left-[-10px] bg-red p-[10px]">
                <h3 className="text-white font-bold tracking-[2px] text-[14px]">The Principle of Simplicity</h3>
              </div>
              <h4 className="text-ink-black font-bold">Simplicity Creates Efficiency</h4>
              <p className="text-ink-black/80">Wing Chun is built on the principle of simplicity. Instead of relying on strength or complexity, the system teaches direct movement, economy of motion, and efficiency under pressure. A relaxed body responds faster, conserves energy, and allows techniques to flow naturally.</p>
            </div>
            <div className="block relative lg:w-[30%] px-[30px] pt-[60px] pb-[40px] relative bg-white shadow rounded-sm flex flex-col gap-[20px]">
              <div className="label absolute top-[-10px] left-[-10px] bg-red p-[10px]">
                <h3 className="text-white font-bold tracking-[2px] text-[14px]">Structure & Adaptability</h3>
              </div>
              <h4 className="text-ink-black font-bold">From Foundation to Freedom</h4>
              <p className="text-ink-black/80">Training begins with structured fundamentals that develop coordination, timing, and awareness. Over time, these principles allow the practitioner to adapt freely to any situation. True skill in Wing Chun comes not from rigid technique, but from the ability to respond naturally and effectively.</p>
            </div>
          </div>
          <Button href="/classes" target="_self" title="Find out more" colour="red"/>
        </div>
    </section>
  );
};

export default Intro;
