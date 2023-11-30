"use client";
import React, { useEffect, useState } from "react";
import "./ExploreUs.css";
import exploreUs from "../../../../public/images/exploreUs_image.jpg";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));
const HowItWork = dynamic(() => import("../HowItWork/HowItWork"));

const ExploreUs = () => {
  // const [isMobile, setIsMobile] = useState(false);

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
  return (
    <>
      <div className="explore-main-div">
        <div className="text-div">
          <h1>Where Learning Takes A New Turn</h1>
          <h2>Online education platform that fits for everyone</h2>
          <p>
            TuTurn is your trusted partner for academic excellence, covering
            O-Level, A-Level, IGCSE, and various primary to secondary boards.
            Explore more about us to learn how we can support your educational
            journey.
          </p>
          <div>
            <Link href="/about" aria-label="Explore More about TuTurn">
              <button
                className="explore-btn"
                aria-label="Explore More about TuTurn"
              >
                Explore More!
              </button>
            </Link>
          </div>
        </div>
        <div className="img-div">
          <Image
            src={exploreUs}
            className="exploreUs-image"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
            alt="Little girl trying to study from the softboard of TuTurns"
          />
        </div>
      </div>
      <HowItWork />
    </>
  );
};

export default ExploreUs;
