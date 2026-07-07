const Hero = () => {
  
  return (
    <section className="relative h-[700px] lg:h-[600px] flex items-center justify-start overflow-hidden hero-mesh px-6 md:px-24 pt-[75px] lg:pt-0" data-purpose="hero-section">
        <div className="container mx-auto h-full flex justify-start items-center">
          <div className="wrapper flex flex-col gap-[40px]">
            <h1 className="text-[50px] lg:text-[90px] leading-none text-white font-bold">History</h1>
            <p className="text-white/80 text-[20px] font-light text-left lg:max-w-[60%]">Explore the story behind Traditional Wing Chun, from its origins in southern China to the development of our club and the lineage that continues to shape our training today.</p>
          </div>
        </div>
        <div className="overlay absolute top-1/2 translate-y-[-50%] right-[-20px]">
            <div className="text-[200px] lg:text-[300px] text-white/10 font-calligraphy tracking-[0px]">历史</div>
        </div>
    </section>
  );
};

export default Hero;
