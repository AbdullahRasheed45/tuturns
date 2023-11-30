"use client";
import React, { useEffect, useState } from "react";
import "./HowItWork.css";
// import AOS from "aos"
// import "aos/dist/aos.css"
import dynamic from "next/dynamic";
const HowToReg = dynamic(() => import("@mui/icons-material/HowToReg"));
const PersonSearch = dynamic(() => import("@mui/icons-material/PersonSearch"));
const PostAdd = dynamic(() => import("@mui/icons-material/PostAdd"));

const Counter = dynamic(() => import("../Counter/Counter"));

const HowItWork = () => {
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
      <div className="main-div" >
        <div className="left">
          <div className="left-icon">
            <PostAdd
              sx={{ fontSize: "70px", color: "#82c5f1" }}
              aria-label="Post your learning needs icon"
            />
          </div>
          <div className="left-text">
            <h2>Post your learning needs</h2>
            <p>
              Post your tutor requirements. Our experts will analyze it and make
              it live on our job board.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="center-icon">
            <PersonSearch
              sx={{ fontSize: "70px", color: "#82c5f1" }}
              aria-label="Get tutor applications icon"
            />
          </div>
          <div className="center-text">
            <h2>Get tutor applications</h2>
            <p>
              You'll receive the best tutors applications in your account within
              48 hours closely matching to your requirements.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-icon">
            <HowToReg
              sx={{ fontSize: "70px", color: "#82c5f1" }}
              aria-label="Select the best tutor & start learning icon"
            />
          </div>
          <div className="right-text">
            <h2>Select the best tutor & start learning</h2>
            <p>
              Choose the best tutor applications. Book a demo with selected
              Tutors before hiring for regular classes. Give us your feedback.
            </p>
          </div>
        </div>
      </div>
      <Counter />
    </>
  );
};

export default HowItWork;
