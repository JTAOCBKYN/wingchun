"use client"

import { useState } from "react"
import Link from "next/link"

const Locations = () => {

  const [openIndex, setOpenIndex] = useState(null)

  const locationsData = [
    {
      title: "Chelmsford",
      description:
        "Fee is £30 per month.<br>For ages 16 and above.<br>Family discounts are available.<br>No hidden charges.<br>Insurance is included in your monthly fee.",
      openingTimes: "Tuesday - Thursday<br>7:00pm - 9:00pm<br>Mixed lessons",
      contact: "Master Mark Clark",
      phone: "07505 33 80 62", 
      email: "essexwingchun@aol.com",
      address: "Youth Centre<br>North Avenue<br>Chelmsford<br>Essex<br>CM1 2AL"
    },
    {
      title: "Clacton",
      description:
        "You can book a private lesson at any time just contact us and we will book you in. Daytime, Weekend and Evening bookings available.<br>Liability Insurance Cover.",
      openingTimes: "Monday - 7:00pm - 8:30pm - Mixed lesson<br>Wednesday - 7:00pm - 8:30pm	- Mixed lesson<br>Saturday - 3:00pm - 5:00pm - Mixed lesson<br>Sunday - 3:30pm - 5:00pm - Mixed lesson",
      contact: "Master Frank Roach",
      phone: "07964 065 608", 
      email: "frankroach1@aol.com",
      address: "Unit 4<br>Newman's Industrial Estate<br>Ford Road<br>Clacton-On-Sea<br>Essex<br>CO15 3DS"
    },
    {
      title: "Plymouth",
      description:
        "Open to everyone from the age of 16 and above.",
      openingTimes: "Thursday<br>7:15pm - 9:15pm<br>Mixed lessons",
      contact: "Pete Lambert",
      phone: "07703 369 175", 
      email: "plymouthwingchunkungfu@gmail.com",
      address: "Keyham Green Places<br>163 Renown Street<br>Plymouth<br>PL2 2DT"
    },
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section className="relative flex items-center justify-start overflow-hidden py-[80px] px-6 md:px-24" data-purpose="locations-section">
        <div className="container mx-auto ">
          <div className="wrapper flex flex-col lg:flex-row gap-y-[20px] justify-between items-center">
            <div className="heading flex flex-col gap-[10px] w-full">
              <p className="font-body text-[14px] font-bold uppercase tracking-[5px]">Our Locations</p>
              <h2 className="text-red text-[50px] leading-none font-bold">Train Where You Are</h2>
            </div>
            <div className="content lg:max-w-[30%]">
              <p className="text-[16px] font-light text-ink-black/80">
                Our Wing Chun classes are delivered across dedicated training locations, offering a structured path for students of all levels. Each location provides a focused environment to develop fitness, self-defence, and personal growth through traditional training.
              </p>
            </div>
          </div>
          <div className="locations w-full mt-12 flex flex-col gap-4">
            {locationsData.map((location, index) => (
              <div
                key={index}
                className="border border-ink-black/10 rounded-md overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="text-[20px] font-medium text-ink-black">
                    {location.title}
                  </span>

                  <span className="text-red text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-5 pb-5 text-[14px] text-ink-black/70 ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div className="wrapper flex flex-col xl:flex-row gap-y-[20px] justify-between">
                    <div className="desc xl:w-1/4">
                      <p className="pr-[40px]" dangerouslySetInnerHTML={{ __html : location.description }} />
                    </div>
                    <div className="times xl:w-1/4">
                      <h3 className="text-ink-black text-[16px] font-bold mb-2">Opening Times</h3>
                      <p className="pr-[40px]" dangerouslySetInnerHTML={{ __html : location.openingTimes }} />
                    </div>
                    <div className="location xl:w-1/4">
                      <h3 className="text-ink-black text-[16px] font-bold my-2">Our Address</h3>
                      <p dangerouslySetInnerHTML={{ __html : location.address }} />
                    </div>
                    <div className="contact xl:w-1/4 flex flex-col">
                      <h3 className="text-ink-black text-[16px] font-bold mb-2">Get in touch</h3>
                      <p>{location.contact}</p>
                      <Link 
                        href={`mailto:` + location.email}
                        className="font-bold"
                      >
                        {location.email}
                      </Link>
                      <Link 
                        href={`tel:` + location.phone}
                        className="font-bold"
                      >
                        {location.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Locations;
