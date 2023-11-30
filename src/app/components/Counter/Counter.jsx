"use client";
import React, { useEffect, useState } from "react";
import "./Counter.css";
import ScrollTrigger from "react-scroll-trigger";
import counterImage from "../../../../public/images/counter_image.png";
import dynamic from "next/dynamic";
// import AOS from "aos"
// import "aos/dist/aos.css"
const Image = dynamic(() => import("next/image"));
const CountUp = dynamic(() => import("react-countup"));

const SubjectCards = dynamic(() => import("../SubjectCards/SubjectCards"));
const Counter = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setIsMobile(window.innerWidth > 767);
  //   }

  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth > 767);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
        className="counter-main-div"
      >
        <div className="counter-div" >
          <div className="counter-div-card" >
            <div className="counter-text-div">
              <h1>
                Transform your life through
                <span className="text-span"> Learning</span>
              </h1>
              <h2>
                From doctors to engineers, from space scientist to pragrammer,
                it all start with one step.
              </h2>
            </div>
            <div className="counter-card-item">
              <div className="counter-card">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={1200} duration={7} delay={0} />
                  )}
                  <span className="counter-blue"> +</span>
                </h1>
                <p>Students</p>
              </div>
              <div className="counter-card">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={100} duration={7} delay={0} />
                  )}
                  <span className="counter-blue"> +</span>
                </h1>
                <p>Teacher</p>
              </div>
              <div className="counter-card">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={50} duration={7} delay={0} />
                  )}
                  <span className="counter-blue"> +</span>
                </h1>
                <p>Courses</p>
              </div>
            </div>
          </div>
          <div className="counter-image-div" >
            <Image
              src={counterImage}
              alt="students are studying from tuturns platform through different mode of education including online teaching or online tutoring"
              quality={90}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </ScrollTrigger>
      <SubjectCards />
    </>
  );
};

export default Counter;
