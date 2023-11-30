"use client"
import React from "react";
import "./RequestTutor.css";
import Link from "next/link";
import requestTutor from "../../../../public/images/request_tutor.svg";
import dynamic from "next/dynamic";

const Teaching = dynamic(()=>import("../Teaching/Teaching"))
const Image = dynamic(() => import("next/image"));


const RequestTutor = () => {
  return (
    <>
    <div className="main-div-tutor" >
      <div className="tutor-img-div" >
        <Image
          src={requestTutor}
          alt="girl reading a book"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="tutor-text-div" >
        <h1>
          Request tutors for <br />
          FREE
        </h1>
        <p>
          Post your learning requirement and let <br /> interested tutors
          contact you.
        </p>
        <div>
          <Link href="/hireTutor" aria-label="Request a Tutor for Free">
            <button className="tutor-btn" aria-label="Request a Tutor for Free">Request a Tutor</button>
          </Link>
        </div>
      </div>
    </div>
    <Teaching/>
    </>
  );
};

export default RequestTutor;
