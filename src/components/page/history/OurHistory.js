import Image from "next/image"

const OurHistory = () => {
  
  return (
    <section className="our-history py-[80px] px-6 md:px-24 " data-purpose="our-history-section">
        <div className="container mx-auto h-full flex justify-start items-center">
          <div className="wrapper">
            <div className="heading flex flex-col gap-[10px] w-full">
              <h2 className="text-red text-[50px] leading-none font-bold">
                Our History
              </h2>
            </div>
            <div className="content flex flex-col xl:flex-row items-center justify-between mt-12">
              <div className="wrapper w-full xl:w-[40%] flex flex-col gap-[20px]">
                <p className="text-ink-black/80">Myself and Frank both started training in the early seventies, under Instructor Peter Pete, in a run down building in Clacton. We worked our way through the modified system of wing chun, up to the instructors grade. When we had learnt all we could from Peter, he told us we should then train under master Derek Jones, which we did. We worked our way up through the traditional system, testing our art out in other clubs along the way. We were also the first students to undertake the 100 days iron palm training. During our time with Derek, we were also the first students to start teaching his system.</p>
                <h3 className="text-red font-semibold text-[20px]">Master Frank Roach</h3>
                <p className="text-ink-black/80">I joined Pete's club because I was always a fan of Bruce lee, and wanted to do wing chun. As I was walking along the road in Clacton one day, and saw an advert in a laundrette for ving tsun, I had herd of wing chun but not ving tsun, and I stood for a moment and thought are these the same thing, the same art, so I thought I should go along and have a look. So I walked down the road to number 47 Pallister Road, went round the corner to this dingy looking place, it was very dark, if you didn’t know the area you might be very wary, so I went to this door and up these wooden stairs, it was quite eerily and I could hear the banging coming from up stairs and the movement, so I went up stairs, I got to the door put my hand to the handle and paused for a moment, I could hear people training, so I opened the door and there it was ving tsun, people were training really hard, not killing themselves but training really hard, and what they were doing was a straight punch which was just what I was looking for.</p>
                <div className="relative block xl:hidden">
                  <Image 
                    src="/images/History1.gif"
                    height="352"
                    width="582"
                    alt="Grandmaster William Cheung and Master Frank Roach"
                    className="w-full object-cover"
                  />
                  <div className="overlay absolute bottom-0 right-0 hero-mesh px-5 py-3">
                    <p className="text-white">Grandmaster William Cheung and Master Frank Roach</p>
                  </div>
                </div>
                <h3 className="text-red font-semibold text-[20px]">Master Mark Clark</h3>
                <p className="text-ink-black/80">
                  I started training in Wing Chun Kung Fu in 1979, then under the guidance of Peter Pete who had himself trained under Grandmaster Victor Kan of Fulham, London. Grandmaster Kan was taught Wing Chun Kung Fu by none other than Grandmaster Yip Man in China.
                  <br />Yip Man's name became well known in the seventies as the man who taught the famous martial arts star Bruce Lee. Bruce Lee became a legend on the screen due to his explosive ability.
                  <br />In 1986 I reached my instructor grade in modified Wing Chun also at this time Peter Pete left England. This was the time that I started training in Traditional Wing Chun Kung Fu under the late Master Derek Jones from London. I used to travel up to London every week for training session's with Master Derek Jones until I attained my Master Grade.
                  <br />Before becoming involved in Wing Chun Kung Fu, I studied boxing, Wado Ryu and Zenki Ryu Karate for a number of years.
                </p>
                <div className="relative block xl:hidden">
                  <Image 
                    src="/images/History2.gif"
                    height="352"
                    width="582"
                    alt="Grandmaster William Cheung and Master Mark Clark"
                    className="w-full object-cover"
                  />
                  <div className="overlay absolute bottom-0 right-0 hero-mesh px-5 py-3">
                    <p className="text-white">Grandmaster William Cheung and Master Mark Clark</p>
                  </div>
                </div>
              </div>
              <div className="images w-full xl:w-[40%] flex flex-col gap-[10px] hidden xl:flex">
                <div className="relative">
                  <Image 
                    src="/images/History1.gif"
                    height="352"
                    width="582"
                    alt="Grandmaster William Cheung and Master Frank Roach"
                    className="w-full object-cover"
                  />
                  <div className="overlay absolute bottom-0 right-0 hero-mesh px-5 py-3">
                    <p className="text-white">Grandmaster William Cheung and Master Frank Roach</p>
                  </div>
                </div>
                <div className="relative">
                  <Image 
                    src="/images/History2.gif"
                    height="352"
                    width="582"
                    alt="Grandmaster William Cheung and Master Mark Clark"
                    className="w-full object-cover"
                  />
                  <div className="overlay absolute bottom-0 right-0 hero-mesh px-5 py-3">
                    <p className="text-white">Grandmaster William Cheung and Master Mark Clark</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </section>
  );
};

export default OurHistory;
