"use client"

import { useState } from "react"
import Link from "next/link"

const Grades = () => {

  const grades = [
    {
      id: 1,
      title: "Grade 1",
      subtitle: "Technician: First Grade",
      content: `
        <strong>Front neutral stance</strong>, feet parallel to each other and shoulder width apart. Body weight is evenly distributed. The leading hand is head height, and the rear hand is placed near the elbow to protect the mid section in an on guard position.
        <br>
        <strong>Left and right neutral stance</strong>, turning from left to right, with alternating hands (on guard) and body weight evenly distributed.
        <br>
        Centreline straight punch from a front neutral.
        <br>
        Centreline front palm from a front neutral.
        <br>
        Centreline side palm from a front neutral.
        <br>
        Centreline on-guard, alternating from a front neutral.
        <br>
        Centreline punch from on-guard in a front neutral.
        <br>
        <strong>Simultaneous block and attack</strong>,
        <br>
        <strong>Bil sao</strong> with front kick use ball of foot, double punch and half retreat, left & right.
        <br>
        Five various applications of bil sao to be practiced on a person.
        <br>
        <strong>Entry technique</strong> with double punch, half retreat, full retreat and double retreat.
        <br>
        One application of entry to be practiced on a person.
        <br>
        Circuit training is one of the best ways to achieve all – round fitness.
      `
    },
    {
      id: 2,
      title: "Grade 2",
      subtitle: "Technician: Second Grade",
      content: `
        <strong>Bil sao entry technique</strong> from a left or right neutral stance.
        <br>
        Double bil sao from a left or right neutral followed with a step up and turn with half retreat.
        <br>
        Double entry from a left or right neutral followed with a step up and turn with half retreat.
        <br>
        Double bil sao shuffle application on a person with front kick and round kick.
        <br>
        Double bil sao application on a person with two front kicks.
        <br>
        <strong>Jut sao</strong> with a straight punch from a left or right neutral stance.
        <br>
        Simultaneous attack and defence on a person, inside and outside.
        <br>
        <strong>Combination footwork</strong>
        <br>
        Triangle footwork, t-step, trapping, reverse, advancing, c-step, stepping with high and low punching.
        <br>
        <strong>Jut sao cheun sao</strong>
        <br>
        Inside jut sao cheun sao, to a straight punch, t-step, stamp kick, man sao, jut sao to a round punch, side palm and twist spine.
        <br>
        Outside jut sao cheun sao, t-step, stamp kick combination.
        <br>
        Outside jut sao cheun sao, follow with arm break.
        <br>
        <strong>Wooden Dummy or Mook Jong</strong>
        <br>
        Application's on wooden dummy and on a person.
        <br>
        <strong>Defence against bil sao</strong> and front kick
        <br>
        Counter with half retreat, step forward with a pak sao followed by elbow strike.
        <br>
        Counter front kick with a leg block followed with cheun sao larp sao knee strike to the opponent's ribs.
        <br>
        <strong>Defence against entry technique</strong>
        <br>
        Control of opponent's leg followed by huen sao, cow sao followed with a side palm.
        <br>
        Counter with inside cheun sao take down followed by elbow strike.
        <br>
        Double larp sao followed by side palm or elbow strike.
        <br>
        <strong>Entry technique to gain your opponent's off side</strong>
        <br>
        Entry with single step with man sao.
        <br>
        Entry with double step and man sao.
        <br>
        Entry followed with gum sao and side palm.
        <br>Entry followed with jut sao knee strike. Inside entry technique followed up with arm locks.
      `
    },
    {
      id: 3,
      title: "Grade 3",
      subtitle: "Technician: Third Grade",
      content: ` <strong>Sil Lum Tao – First Form</strong> <br>
      Correct breathing and control of body muscles also meditation. <br> <br>
      <strong>Tan Sao / Simultaneous Attack and Defence</strong>
      <br>
      Inside to a straight or round punch.
      <br>
      Outside to a straight punch.
      <br>
      Combination blocking inside & outside.
      <br>
      Step in tan sao, jut sao, pak sao, man sao to a straight punch.
      <br>
      <br>

      <strong>Pak Sao Simultaneous Attack and Defence</strong>
      <br>
      Pak sao to a straight punch outside.
      <br>
      Pak sao, jut sao to a straight punch outside.
      <br>
      Pak sao to a straight punch followed by arm break or leg sweep.
      <br>
      Pak sao to a lunge punch.
      <br>
      <br>

      <strong>Garn Sao Simultaneous Attack and Defence</strong>
      <br>
      Garn sao inside to a low straight or round punch.
      <br>
      Garn sao outside to a straight punch.
      <br>
      Garn sao inside and outside.
      <br>
      <br>

      <strong>Counter Pak Sao Attack</strong>
      <br>
      Counter with half retreat step forward pak sao side palm.
      <br>
      Counter with outside cheun sao and low side palm strike.
      <br>
      <br>

      <strong>Jut Sao, Fok Sao & Heun Sao</strong>
      <br>
      Jut sao, fok sao, heun sao followed by arm break and man sao strike.
      <br>
      Jut sao, heun sao, low palm strike with jut sao, arm lock, elbow strike followed by a knee strike.
      <br>
      <br>

      <strong>Larp Sao Simultaneous Attack and Defence</strong>
      <br>
      Larp sao to a straight punch.
      <br>
      Larp sao, t-step, double punch and arm break followed with low round house sweep kick.
      <br>
      Larp sao from a front neutral left and right.
      <br>
      Larp sao step in with low side palm.
      <br>
      <br>

      <strong>Bon Sao, Tan Sao, Garn Sao Combination</strong>


      `
    },
    {
      id: 4,
      title: "Grade 4",
      subtitle: "Technician: Fourth Grade",
      content: ` <strong>Pak Sao, Tan Sao</strong> <br>
      Pak sao, tan sao to straight punch followed by arm break or lock and front kick. <br> <br>

      
      <strong>Quan Sao / Kan Sao</strong>
      <br>
      Quan sao is a tan sao and a low bon sao.
      <br>
      Kan sao is a tan sao and a garn sao.
      <br>
      <br>

      <strong>Combination Kicks</strong>
      <br>
      Side kick left and right also stay left and right.
      <br>
      Low side kick followed by mid-section side kick.
      <br>
      Front kick followed by side kick.
      <br>
      Step side kick, fut sao and low bon sao.
      <br>
      <br>

      <strong>Counter Front Kick</strong>
      <br>
      Outside gum sao to a front kick with leg drag combination.
      <br>
      Inside gum sao, t-step, kick to groin and double punch, also without gum sao block.
      <br>
      Block front kick with leg block followed by a knee kick or take down.
      <br>
      <br>

      <strong>Counter Side Kick</strong>
      <br>
      Garn sao t-step, kick to groin followed with a leg sweep.
      <br>
      Garn sao t-step, kick to groin followed with a bon sao arm break and man sao side palm to a swing back punch.
      <br>
      Garn sao t-step, kick to groin followed by trapping the arm using chest and arm take down to a swing punch.
      <br>
      <br>

      <strong>Round House Kick</strong>
      <br>
      Jut sao, jut sao followed with round kick, man sao then side palm.
      <br>
      Larp sao, round kick with arm break.
      <br>
      Jut sao, fok sao stamp kick to knee followed with heun sao, low palm strike, arm lock and man sao to a swing punch.
      <br>
      Jut sao, fok sao attack opponent's opposite leg, with round kick.
      <br>
      <br>

      <strong>Counter Mid-Section Round House Kick</strong>
      <br>
      Kan sao t-step, break leg, gum sao, man sao, side palm.
      <br>
      Kan sao t-step, break leg, pull back and kick knee or kick to groin followed by man sao and side palm.
      <br>
      <br>

      <strong>Defence Against a High Kick</strong>
      <br>
      Double gum sao, t-step kick to groin followed by double punch.
      <br>
      <br>

      Larp sao, t-step, front kick and arm break.
      <br>
      Larp sao, arm lock or break.
      

      `
    },
    {
      id: 5,
      title: "Grade 5",
      subtitle: "Practician: Fifth Grade",
      content: ` <strong>Advanced Sil Lum Tao – Second Form</strong> <br><br>

      <strong>Bon Sao Series</strong>
      <br>
      Bon sao, low palm strike, jut sao, man sao, inside or outside.
      <br>
      <br>

      <strong>Pak Sao & Fut Sao Applications</strong>
      <br>
      Pak sao, fut sao to inside downward swing punch followed by outside arm break.
      <br>
      Pak sao, fut sao to inside downward swing punch followed by inside jut sao, man sao.
      <br>
      Pak sao, fut sao to a double punch.
      <br>
      <br>

      <strong>Man Sao Applications</strong>
      <br>
      Man sao to inside round punch with t-step followed by man sao.
      <br>
      <br>

      <strong>Bil Sao & Cheun Sao Combinations</strong>
      <br>
      Bil sao, cheun sao, t-step to a straight punch, man sao, heun sao followed by low punch and arm break, from inside to outside the arm.
      <br>
      Bil sao, cheun sao, t-step to a double punch.
      <br>
      <br>

      <strong>Tan Sao & Entry Flow</strong>
      <br>
      Tan sao, jut sao, huen sao step in followed by low side palm.
      <br>
      <br>

      <strong>Pak Sao Flow Combination</strong>
      <br>
      Pak sao, tan sao, side palm, huen sao, jut sao, t-step, larp sao, man sao, front kick and double palm to a straight punch.
      <br>
      <br>

      <strong>Single Armed Chi Sao Exercise</strong>
      <br>
      Static front neutral stance.
      <br>
      Stepping left and right neutral stance.
      <br>
      Bon sao, larp sao with stepping in front fighting stance.
      <br>
      Pak sao straight punch follow with cow sao, low side palm in front fighting stance.
      <br>
      Pak sao straight punch follow by trapping the arms.
      <br>
      Cross armed chi sao in front fighting stance.
      <br>
      Breaking free from wrist locks and bear hugs.
      <br>
      <br>

      <strong>Grading Requirement Note</strong>
      <br>
      To pass your eighth grade you will need to go to another martial arts club of your choice i.e., Karate, Boxing, etc, unannounced and spar with another instructor or student in a respectful manner. You are not challenging them, just enhancing your techniques and experiencing fresh emotions. This can be done at any time from the fifth grade onwards.
      `
    },
    {
      id: 6,
      title: "Grade 6",
      subtitle: "Practician: Sixth Grade",
      content: ` <strong>Grappling Techniques</strong> <br>
      Short range arm lock. <br>
      Counter head lock with man sao. <br> <br>

      <strong>Chi Sao Double Arm Exercise</strong>
      <br>
      Switch from left to right.
      <br>
      Front palm.
      <br>
      Counter front palm with jut sao, man sao.
      <br>
      Counter man sao with bon sao or tan sao.
      <br>
      Front palm followed with elbow strike.
      <br>
      Counter elbow with pak sao.
      <br>
      Front palm followed with straight punch.
      <br>
      Counter straight punch with jut sao.
      <br>
      <br>

      <strong>Training Application</strong>
      <br>
      All chi sao techniques to be practiced on a person with and without a blindfold.
      `
    },
    {
      id: 7,
      title: "Grade 7",
      subtitle: "Practician: Seventh Grade",
      content: ` <strong>Chi Sao Double Arm</strong> <br><br>

      <strong>Pak Sao (Left and Right)</strong>
      <br>
      Counter pak sao with jum sao side palm.
      <br>
      Counter pak sao with jut sao, man sao.
      <br>
      Counter pak sao with elbow attack.
      <br>
      Counter pak sao with a pull then step and side palm attack.
      <br>
      Counter pull step with huen sao stamp kick and arm break.
      <br>
      Counter pak sao with bon sao, then counter bon sao with neck choke.
      <br>
      Counter neck choke with elbow strike.
      <br>
      Counter pak sao with jut sao, cheun sao.
      <br>
      Counter pak sao with larp sao.
      <br><br>

      <strong>Fighting Chi Sao</strong>
      `
    },
    {
      id: 8,
      title: "Grade 8",
      subtitle: "Practician: Eighth Grade",
      content: ` <strong>Chum Kil – Third Form</strong> <br><br>

      <strong>Applications</strong>
      <br>
      Bon sao, break.
      <br>
      Larp sao from a left or right neutral stance and front fighting stance.
      <br>
      Bon sao pak sao, inside and outside.
      <br>
      Man sao t-step.
      <br>
      Five low bon sao's.
      <br><br>

      <strong>Double Arm Chi Sao</strong>
      <br>
      Cow sao followed with three counters.
      <br>
      High cow sao and counter.
      <br>
      Cow sao followed with elbow and counter.
      <br>
      Bon sao, larp sao, break and counter.
      <br>
      Bon sao, larp sao light & heavy pak sao.
      <br>
      Bon sao, larp sao, jut sao.
      <br>
      Step up, larp sao and counter.
      <br>
      Counter front palm with t-step and cow sao followed by side step pak sao then a deep step with jut sao.
      <br>
      Double jut sao, kick up and counter.
      <br>
      Larp sao, man sao, arm lock & two counters.
      <br><br>

      <strong>Fighting Chi Sao</strong>
      <br><br>

      <strong>Grading Requirement</strong>
      <br>
      To pass this grade you will need to go to other martial arts clubs of your choice i.e., Karate, Boxing, unannounced and spar with another instructor or student in a respectful manner. You are not challenging them, just enhancing your techniques and experiencing fresh emotions. This can be done at any time from the fifth grade onwards.
      `
    },
    {
      id: 9,
      title: "Grade 9",
      subtitle: "Man of Arrival: Ninth Grade",
      content: ` <strong>Wooden Dummy – Fourth Form</strong> <br>
      12 sections of the wooden dummy, to be practiced on the dummy, on a person and in the air, all techniques to be done with and without a blindfold. <br><br>

      <strong>1. Entry Technique (Left and Right)</strong>
      <br>
      Entry technique left and right.
      <br><br>

      <strong>2. Entry Technique (Opposite)</strong>
      <br>
      Entry technique opposite.
      <br><br>

      <strong>3. Pak Sao</strong>
      <br>
      Pak sao.
      <br><br>

      <strong>4. Side Kick</strong>
      <br>
      Side kick.
      <br><br>

      <strong>5. Jut Sao, Bil Sao</strong>
      <br>
      Jut sao, bil sao.
      <br><br>

      <strong>6. Huen Sao</strong>
      <br>
      Huen sao.
      <br><br>

      <strong>7. Low Side Palm / High Side Palm</strong>
      <br>
      Low side palm, high side palm.
      <br><br>

      <strong>8. Kan Sao</strong>
      <br>
      Kan sao.
      <br><br>

      <strong>9. Bon Sao</strong>
      <br>
      Bon sao.
      <br><br>

      <strong>10. Low Bon Sao</strong>
      <br>
      Low bon sao.
      <br><br>

      <strong>11. Jum Sao, Cow Sao</strong>
      <br>
      Jum sao, cow sao.
      <br><br>

      <strong>12. Take Down</strong>
      <br>
      Take down.
      `
    },
    {
      id: 10,
      title: "Grade 10",
      subtitle: "Master of Comprehension: Tenth Grade",
      content: ` <strong>Knowledge of All Grades</strong> <br><br>

      <strong>Bil Jee – Fifth Form</strong>
      <br>
      Bil jee form to be practised on wooden dummy, in the air and on a person, all done with and without a blindfold.
      <br><br>

      <strong>Techniques</strong>
      <br>
      Elbow strike.
      <br>
      Elbow strike with bil jee.
      <br>
      Kan sao kick huen sao.
      <br>
      Quan sao kick.
      <br>
      Bil sao man sao palm strike.
      <br>
      Double grab.
      <br><br>

      <strong>Advanced Application</strong>
      <br>
      Multiple opponents.
      <br><br>

      <strong>Theoretical Study</strong>
      <br>
      Written essay: the strategy of Wing Chun.
      <br><br>

      <strong>Blindfolded Training</strong>
      <br>
      Blindfolded chi sao.
       `
    },
    {
      id: 11,
      title: "100 Days Iron Palm Training",
      subtitle: "",
      content: `The Iron Palm Training will make your hands five times faster and you will have a dense penetration when you strike.`
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
              {grade.title}
            </span>

            <h3 className="mt-2 text-xl font-bold">
              {grade.subtitle}
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
            className="bg-white max-w-2xl w-full p-8 rounded-lg relative flex flex-col gap-[20px] max-h-[60vh] lg:max-h-auto overflow-scroll"
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

export default Grades;
