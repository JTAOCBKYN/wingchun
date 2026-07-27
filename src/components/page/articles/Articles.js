"use client"

import { useState } from "react"
import Link from "next/link"

const Articles = () => {

  const grades = [
    {
      id: 1,
      title: "Knowledge to construct a way",
      subtitle: "by Master Mark Clark",
      content: `
        Wing Chun is the name of a martial art system developed approximately 300 years ago in southern China. Its creator, the Buddhist nun Ng Mui, was a master of Shaolin Kung Fu and used this knowledge to construct a way to take advantage of the weaknesses in the Shaolin systems. This new-found art was well-guarded and passed on to very enthusiastic students. Ng Mui's first student was a woman named Yim Wing Chun.
        <br><br>
        More recently, in the seventies, Yip Man's name became well known as the man who educated the legendary martial arts star Bruce Lee. Bruce Lee, who trained primarily in Wing Chun but also some other arts, integrated some of its techniques and ideas into his own Jeet Kune Do. He became a legend on the screen due to his explosive ability. His fame led to worldwide interest in Wing Chun.
        <br><br>
        Wing Chun is a style of kung fu that emphasizes close quarter combat, tight defence and quick footwork to overcome your opponent. When we block, we simultaneously strike and redirect the opponent's energy to our advantage. Wing Chun is a proficient form of martial art, an effective, sleek and highly simplified combat art; with only five unarmed forms within the style. Relaxation is also a main factor when learning and using this art.
        <br><br>
        Wing Chun will greatly improve the performance of your cardiovascular system, coordination, reaction speed, concentration, physical strength and help tone your muscles. Understanding of the physical mechanics of the human body one can gain the advantage of your opponent's weight in a non-telegraphic motion. By relaxing your body and staying with the motion, there by attaining a state of pure non-resistance with others, you can counterbalance the attack and apply a choice of methods of grappling, trapping, takedowns, etc.
        <br><br>
        A foundation of Wing Chun is the protection of your body's centre line. Imagine a line that starts in the middle on top of your head and travels along the middle of your chest to the lower body. Use movement efficiently and wisely. The idea here is that your body should travel the shortest distance in a least amount of time to connect with an opponent. Keep your body relaxed and you will be more at ease. Be ready to adjust your fighting to suit the surroundings.
        <br><br>
        Alertness - Fitness - Self-belief these three qualities will be more valuable in avoiding violence then any specific techniques for dealing with it.
      `
    },
    {
      id: 2,
      title: "The late Master Derek Jones through our eyes",
      subtitle: "by Master Mark Clark & Master Frank Roach",
      content: `
        The first time we heard of the late Master Derek Jones was through Peter Pete our Wing Chun instructor at that time, who came from the Victor Khan system. He was always talking about a person called Derek Jones who was the no1 Wing Chun man at that time in London.
        <br><br>
        He told us about Master Derek Jones because he felt he had taught us everything he could at that time, so he told us to train under Master Derek Jones as he had just opened up a club in Shepherd's bush (The British Wing Chun Kung Fu Association) and he had a vast amount of experience in street fighting. We phoned up and made arrangements to go along to one of his lessons and from that first phone call we knew he had a strong sense of discipline.
        <br><br>
        On our first encounter with Master Derek Jones we went down stairs into a cellar where he trained, filled in our forms and explained we were Wing Chun Instructors in which he took no notice of, we explained again we were instructors and again he just ignored this and carried on teaching. He then invited us to do some fighting sticking hands with him and he just took us both apart, this is when we learnt how focused this man could be, then he told us we still had a lot to learn, at that point we realized that this master could teach us a great deal more than we already knew, that was the start of our training under Master Derek Jones.
        <br><br>
        Only a few Master's came out of Master Derek Jones club, as well as myself and Frank, we are still teaching and, in our opinion, improving the Wing Chun system that we were taught in the beginning, we are not all about money, we are just interested in teaching Wing Chun, we were shown and passed 10 grades, which is exactly what we teach today.
        <br><br>
        At the end of our training with Derek he changed the name from The British Wing Chun Kung Fu Association to The World Body Mind and Spirit Association, because he was improving the art, also there were so many modified Wing Chun clubs opening at that time. Myself and Frank chose to keep the Wing Chun name and carry this on, which Derek had no problem with, Derek taught us not to stand still and neither should the system, the name of the system was not of the up most importance to us this is just a name it is what you learn from the system that matters. We all learnt the differences between modified and traditional wing chun and Derek enhanced the system of traditional wing chun as this is what he called it at that time, then over a period of time changed the name to The World Body Mind and Spirit Association.
        <br><br>
        DEDICATED TO MASTER DEREK JONES THE BEST MASTER WE EVER TRAINED UNDER.
      `
    },
    {
      id: 3,
      title: "The Wooden Dummy not just a piece of wood",
      subtitle: "by Master Mark Clark & Master Frank Roach",
      content: ` 
      There are twelve sections to the wooden dummy form to teach you movement for a combat situation, and although not as good as practicing with real opponents the dummy will allow you to strike as hard as you want, repeatedly, without collapsing in pain.
      <br><br>
      The wooden dummy techniques are the superior techniques of Wing Chun, teaching the student to improve timing and speed of movement through the knowledge of correct direction, angles and accuracy of strikes. The hands, arms and legs then become naturally toughened with the correct co-ordination of technique through the body's flow of movement around the dummy.
      <br><br>
      It is important to learn the correct ranges of techniques, the meaning of techniques and where to apply the force within these. The dummy improves the combat skills needed for both long and close range fighting techniques and trapping skills. Both advancing and retreating footwork are enhanced and with even weight distribution throughout the form, superior mobility and maximum leverage are attained. Then, as your confidence, reflexes and stamina grow, the dummy will surely come to life breathing alongside you. There are different degrees of consciousness on the wooden dummy, it allows you to express yourself more freely. Even a slight movement of the hand or the taking of a step is done with prime importance, you realize that another dimension of the mind is at work, but you must not be a slave to it.
      <br><br>
      At this stage you have learned of the breathing movements of the lower belly (or tantian), with relaxed body muscles, flowing with energy. The wooden dummy is the most beneficial Wing Chun training device, its significance cannot be overlooked. It allows a scholar to analysis and sharpen the performance of the various Wing Chun techniques, such as simultaneous defence and attack. What is most important is to learn to take up the correct posture as required at each movement, and to learn to keep on sticking your arms to the dummy, with your eyes open or closed. You should take a serious minded attitude when working on the wooden dummy, because it will never forgive. You should regard the dummy as your true opponent, one who is inclined to attack you at any second, you should not look at your own moves, look solely at the head of the dummy.
      <br><br>
      The most well known dummy employed is what is called the live wooden dummy, which is supported by two wooden pillars and two cross bars which allows it to rebound when being struck. It makes a favourable substitute for an opponent. It is of the utmost importance that a Wing Chun practitioner has access to regular practice on a dummy. You should enjoy, and feel free, empty you mind, let your techniques flow, like the air that you breath, the colours that you see, the sounds that you hear and the objects that you feel, then you will sincerely develop the right attitude to train on the wooden dummy properly. It becomes a way of life, the boundaries between master and pupil disappear in a profound flow of pure existence.
      <br><br>
      Our objective is to penetrate the profound origins of thought.
      `
    },
    {
      id: 4,
      title: "Simplicity of a Wing Chun Kung Fu art",
      subtitle: "by Master Mark Clark & Master Frank Roach",
      content: ` 
      Each dawn when you awaken, like a student at your first lesson you should prepare a blank mind for the day to write upon. Around two-hundred-and-fifty years ago one of the most logical and practical martial art systems in the world was developed by a woman. Yim Wing Chun accepted that she had full responsibility to herself, and with this realisation she gained the self determination to develop what has now been identified as the most devastating fighting system ever developed.
      <br><br>
      She took many fundamental values from the laws of science and realised that by teaching the laws of physics as we recognise them at present, she could promote the art, but only by constant practise could she demonstrate the art to its full potential. By repetition she learnt the foundation of the art but if she had lost the soul for repetition the practise would have become considerably difficult for her. Once the foundation was laid she achieved freedom to use anything that came to mind. We too must do things as they transpire plus pursue the laws of practise, only in manner can we truly gain experience and with an understanding of the physical mechanics of the human body one can gain the advantage of your opponent's weight in a non-telegraphic motion. If you truly see things as they are, then you will see things as they should be. After all there are two distinctively different systems of wing chun which both practise the art of simplicity. By relaxing your body and staying with the motion, there by attaining a state of pure non-resistance with others, one can neutralise the onslaught and apply various methods of grapping, trapping, takedowns, ect, that wing chun offers and these can be highly effective in coping with a threatening situation.
      <br><br>
      It is essential not to be predictable or make things too complicated. The fighter must be able to counter or evade the opponent's techniques with simplicity and minimum effort. Being able to change the way of fighting is essential to his/her freedom. A tense body responds slowly and wastes energy.
      <br><br>
      When practising with people of a much superior skill or a larger and more powerful physique a clear cut mental outlook is needed, allowing the fighter to explode within a sudden and sharp manner. A fighter must also be aware of an opponent's clothing and can use this to hurl them, crashing directly to the floor with control, where he can then follow-through with ground-fighting which may entail strangle holds, dislocation of the joints, or yanking of the hair etc, and immobilisation of limbs with the use of pressure points. It is possible for a wing chun fighter to attack while being thrown through mid-air but it calls for split second timing such as stepping to the blind side of your opponent to minimise effort. The wing chun fighter will try not to be taken by any form of grappling or locks. By letting go and relaxing in one of the most frightening of human situations one learns to recognise the field of awareness. There are no rules or boundary lines in wing chun therefore it can be a very violent and serious art.
      <br><br>
      The fighter must learn to respond to people, remembering each individual is unique, and must learn to take control of one's direction of thoughts and breathing. The body and mind development training will give you awareness, fitness and confidence and these three qualities will be more valuable in avoiding violence then any specific techniques for dealing with it.
      <br><br>
      For some readers the idea of simplicity will seem absurd. Why is this? Simply because of the lack of organised methods and theory, but in our view simplicity is the spirit of knowledge. If you experience it with an open mind you will understand what we mean. But only by actual direct practise can you experience the reality, and understand in a true sense the various statements made by our teachers.
      <br><br>
      Our objective is to penetrate the profound origins of thought.
      <br><br>
      By Mark and Frank.
      `
    },
    {
      id: 5,
      title: "Outstanding street fighter",
      subtitle: "by Master Frank Roach and Master Mark Clark",
      content: ` 
      Our Master Derek Jones trained under Grandmaster Victor Kan for 9 years, and was considered to be the best wing chun fighter in London at that time. But found he needed to make many adjustments to the system especially when it came down to real experiences. The footwork that he was taught from Grandmaster Victor Kan did not work for him.
      <br><br>
      He then went on to study Grandmaster William Cheung's art of wing chun, and found that Grandmaster Cheung's footwork was very similar to his own principles, that he had developed on the streets himself over time.
      <br><br>
      Master Derek Jones took Grandmaster William Cheung's art of wing chun and then, in our opinion, improved it. Calling it the <span style="text-decoration: underline;">The British Wing Chun Kung Fu Association</span>, and this is what Frank and I teach today, not <span style="text-decoration: underline; font-weight: bold; font-style: italic;">The World Body, Mind and Spirit Association</span> which it later became known as. Frank and I were the first of Derek's students to teach this system, and have continued to teach this same system to the present day. We have always the had the courage to stand up and market a new and improved wing chun, which is what Derek Jones taught us to do. Wing Chun is an amazing system. We are not saying we are the best, we just do what we know.
      <br><br>
      Derek asked us to go around to other clubs and take on any instructor, to enhance our techniques. Often Derek would receive a phone call from the other instructors asking us to back off, as we were going round numerous clubs at that time. Derek thought this was great, this is just what he wanted. Whenever we went to another club we were always respectful and the same rules apply to our students today. We trained under Grandmaster William Cheung for a short while, but he soon realized there was nothing he could teach us and told us this. Then he asked us to join his <span style="text-decoration: underline; font-weight: bold; font-style: italic;">association</span>, and teach his wing chun in the UK, but we declined as Derek Jones was our master.
      <br><br>
      We never classed our Master Derek Jones as a god, like some of Master Derek Jones students did, and still do today. Although we do believe he was an outstanding fighter.
      `
    },
    {
      id: 6,
      title: "Naturally relaxed Wing Chun Art",
      subtitle: "by Master Mark Clark",
      content: ` 
      Of the thousands of Kung Fu systems, Wing Chun is probably amongst the best known in the world. In genuine martial arts, results are not attained by trickery. We all work hard for enlightenment, but few of us grasp it. To be truly free and independent we have to forget everything which we have in our mind. Once you have recognised the potential of Wing Chun, you will realise it's a very aggressive art which does not stand still, with short range compact strikes and defences. A perfect art for women to learn, after all, Wing Chun was developed by a woman, Ng Mui. The art helps with situations that women may possibly find themselves in when coming under threat of violent assault, as they do not need to be the biggest or the most aggressive to be the victor. If people distort Wing Chun then we must not use them as representatives. They must look to the forebears of Wing Chun and act correctly. Every martial art consists of power, but in Wing Chun we see a different method of projecting that power. Knowing where to strike is not enough. There are numerous details involved in training to attack a human target.
      <br><br>
      When you perform Sil Lum Tao, the first form of Wing Chun, you take approximately five or ten minutes in a neutral stance with the feet parallel to each other and shoulder width apart. Body weight is evenly distributed, designed for the training of correct breathing, balance, concentration, co-ordination, allowing for a practitioner to move freely in any direction. In that period, you are establishing the internal energy flow.
      `
    },
  ]

  const [selectedGrade, setSelectedGrade] = useState(null)

  return (
    <section className="relative overflow-hidden py-[80px] px-6 md:px-24" data-purpose="grades-section">
      {/* Grade Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {grades.map((grade) => (
          <button
            key={grade.id}
            onClick={() => setSelectedGrade(grade)}
            className="group text-left border border-ink-black/10 p-6 rounded-lg hover:border-red transition-all duration-300"
          >
            <span className="text-red text-sm font-bold uppercase tracking-[3px]">
              {grade.subtitle}
            </span>

            <h3 className="mt-2 text-xl font-bold">
              
              {grade.title}
            </h3>

            <p className="mt-4 text-sm text-ink-black/70">
              Click to explore →
            </p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedGrade && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={() => setSelectedGrade(null)}
        >
          <div
            className="bg-white lg:max-w-[75%] w-full p-8 rounded-lg relative flex flex-col gap-[20px] max-h-[60vh] lg:max-h-auto overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGrade(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              ×
            </button>

            <span className="text-red text-sm font-bold uppercase tracking-[3px]">
              {selectedGrade.title}
            </span>

            <h3 className="text-3xl font-bold mt-2">
              {selectedGrade.subtitle}
            </h3>

            <div className="content flex flex-col gap-[5px]">
              <p className="text-[16px] text-ink-black" dangerouslySetInnerHTML={{ __html : selectedGrade.content }} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
};

export default Articles;
