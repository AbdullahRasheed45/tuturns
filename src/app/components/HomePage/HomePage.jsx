"use client";
import React from "react";
import "./HomePage.css";
import Image1 from "../../../../public/images/homePage_image1.png";
import Image2 from "../../../../public/images/homePage_image2.png";
import Image3 from "../../../../public/images/homePage_image3.png";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));
const TypeAnimation = dynamic(() => import("react-type-animation").then(module => module.TypeAnimation));

const ExploreUs = dynamic(() => import("../ExploreUs/ExploreUs"));

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage-left">
          <div className="homepage-image-div">
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={Image1}
              alt="Image of students and teacher of tuturns"
              fill
              quality={75}
              priority
            />
          </div>
          <div className="homepage-image-div2">
            <Image
              src={Image2}
              className="img2"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Student ready to take online class from TuTurns tutor"
            />
          </div>
          <div className="homepage-image-div3">
            <Image
              src={Image3}
              className="img3"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Student ready to take online class from TuTurns tutor"
            />
          </div>
        </div>
        <div className="homepage-right">
          <h1>
            A good <span className="shade">Education</span> is <br />
            always a base of
          </h1>
          <div className="type-js-div">
            <TypeAnimation
              sequence={[
                "Personal Growth ",
                2000,
                "A Bright Future ",
                2000,
                "Personal Well-being ",
                2000,
                "Confidence Building! ",
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="animation-type"
            />
          </div>
          <div className="p-text">
            <p>
              Find the perfect tutor online, make your choice from best
              <br /> O-levels, A-levels, IGCSE tutors.
            </p>
          </div>
          <div className="homepage-btn-div">
            <Link href="/hireTutor" aria-label="Find Your Tutor">
              <button className="homepage-btn" aria-label="Find Your Tutor">
                Find Your Tutor
              </button>
            </Link>
            <Link href="/bookACall" aria-label="Become A Tutor">
              <button className="homepage-btn" aria-label="Become A Tutor">
                Become A Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ExploreUs />
    </>
  );
};

export default HomePage;
