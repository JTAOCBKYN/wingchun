import Button from "@/components/global/Button"

const Hero = () => {
  
  return (
    <section className="relative h-[800px] lg:h-screen flex items-center justify-start overflow-hidden hero-mesh px-6 md:px-24" data-purpose="hero-section">
        <div className="container mx-auto h-full flex justify-start items-center">
          <div className="wrapper flex flex-col gap-[40px] z-2">
            <h1 className="text-[50px] lg:text-[90px] leading-none text-white font-bold text-center lg:text-left">Ancient Wisdom.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-black to-slate-700">Modern Discipline.</span></h1>
            <p className="text-center lg:text-left text-white/80 text-[20px] font-light lg:max-w-[60%]">Where tradition meets practicality—develop strength, awareness, and confidence through Wing Chun.</p>
            <div className="buttons flex flex-col lg:flex-row gap-[20px] items-center">
                <Button href="/classes" target="_self" title="View Classes" alignmentLeft colour="black"/>
                <Button href="#" target="_self" title="Get in touch" alignmentLeft colour="transparent"/>
            </div>
          </div>
        </div>
        <div className="overlay absolute top-1/2 translate-y-[-10%] right-[-20px]">
            <div className="text-[700px] text-white/10 font-calligraphy tracking-[-100px]">活力</div>
        </div>
    </section>
  );
};

export default Hero;
