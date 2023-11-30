"use client";
import React from "react";
import "./Teaching.css";
import teachingImage from "../../../../public/images/teach.svg";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));


const Teaching = () => {
  return (
    <div className="main-div-teach">
      <div className="teach-text-div">
        <h1>
          Teach what you <br />
          love
        </h1>
        <p>
          Join hundreds of other professionals <br /> who earn doing what they
          love.
        </p>
        <div>
          <Link href="/bookACall" aria-label="Become a Tutor">
            <button className="teach-btn" aria-label="Become a Tutor">
              Become a Tutor
            </button>
          </Link>
        </div>
      </div>
      <div className="teach-img-div">
        <Image
          src={teachingImage}
          alt="Tuturns tutor teaching the student"
          width={350}
          // sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Teaching;
