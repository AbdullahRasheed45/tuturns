"use client";
import React, { useEffect, useState } from "react";
import "./WhoWeServe.css";
import dynamic from "next/dynamic";
import whoWeServeImage1 from "../../../../public/images/whoWeServe_image1.png";
import whoWeServeImage2 from "../../../../public/images/whoWeServe_image2.jpg";
import whoWeServeImage3 from "../../../../public/images/whoWeServe_image3.jpg";
import whoWeServeImage4 from "../../../../public/images/whoWeServe_image4.jpg";
import whoWeServeImage5 from "../../../../public/images/whoWeServe_image5.jpg";
import whoWeServeImage6 from "../../../../public/images/whoWeServe_image6.jpg";
import whoWeServeImage7 from "../../../../public/images/whoWeServe_image7.jpg";
import whoWeServeImage8 from "../../../../public/images/whoWeServe_image8.jpg";
import whoWeServeImage9 from "../../../../public/images/whoWeServe_image9.jpg";
import whoWeServeImage10 from "../../../../public/images/whoWeServe_image10.jpg";

const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const WhoWeServe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth > 767);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="serve-main-div">
      <h1>Your Trusted Tutoring Partner</h1>

      <div className="serve-div-1">
        <div className="serve-text-div1">
          <h2>Who We Serve</h2>
          <p>
            At Tuturns, our mission is to provide exceptional tutoring services
            tailored to meet the diverse educational needs of students. We take
            pride in serving a wide range of academic programs and curricula to
            ensure that every student receives the support they need to excel in
            their studies. Our dedicated team of educators is here to assist
            students pursuing various educational pathways.
          </p>
        </div>
        <Image src={whoWeServeImage1} height={isMobile ? 500 : 300} />
      </div>
      <div className="serve-div-10">
        <Image src={whoWeServeImage2} height={isMobile ? 500 : 300} />
        <div className="serve-text-div10">
          <h2>O-Level Tutoring</h2>
          <p>
            Discover Tuturns' specialized O-Level tutoring services, tailored to
            empower students with the knowledge and skills they need to excel in
            O-Level examinations. Our experienced tutors provide comprehensive
            support, helping students navigate the curriculum with confidence
            and achieve remarkable results in their O-Level studies.
          </p>
          <div>
            <Link href="/hireTutor" title="hire Olevel tutor">
              <button
                className="serve-btn"
                title="Hire O-level Tutor - Find the Perfect Tutor for Your O-level Subjects"
                aria-label="Hire O-level Tutor Button - Explore and Connect with Tutors"
              >
                Hire O-level Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="serve-div-2">
        <Image src={whoWeServeImage3} height={isMobile ? 500 : 300} />
        <div className="serve-text-div2">
          <h2>A-Level Tutoring</h2>
          <p>
            At Tuturns, we are your trusted partners on the A-Level academic
            journey. Our expert tutors offer personalized assistance, ensuring
            students not only grasp complex A-Level concepts but also cultivate
            critical thinking skills essential for outstanding success in
            A-Level examinations.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A tutor">
              <button
                className="serve-btn"
                title="Hire A-level Tutor - Find the Perfect Tutor for Your A-level Subjects"
                aria-label="Hire A-level Tutor Button - Explore and Connect with Tutors"
              >
                Hire A-level Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="serve-div-3">
        <div className="serve-text-div3">
          <h2>GCSE and IGCSE Tutoring</h2>
          <p>
            Unlock the potential of GCSE and IGCSE students with Tuturns'
            specialized tutoring. Our tutors focus on building a solid
            foundation of knowledge, enabling students to tackle their
            coursework with ease and excel in their GCSE and IGCSE examinations.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A Tutor">
              <button
                className="serve-btn"
                title="Hire GCSE/IGCSE Tutor - Find the Perfect Tutor for Your GCSE/IGCSE Subjects"
                aria-label="Hire GCSE/IGCSE Tutor Button - Explore and Connect with Tutors"
              >
                Hire GCSE/IGCSE Tutor
              </button>
            </Link>
          </div>
        </div>
        <Image src={whoWeServeImage4} height={isMobile ? 500 : 300} />
      </div>
      <div className="serve-div-4">
        <Image src={whoWeServeImage5} height={isMobile ? 500 : 300} />
        <div className="serve-text-div4">
          <h2>Edexcel Tutoring</h2>
          <p>
            Tuturns' Edexcel tutoring services are designed to meet the specific
            needs of students pursuing Edexcel programs. Our tutors are
            well-versed in the curriculum, providing targeted support that
            equips students to master the material and achieve their academic
            aspirations.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A Tutor">
              <button
                className="serve-btn"
                title="Hire Edexcel Tutor - Find the Perfect Tutor for Your Edexcel Courses"
                aria-label="Hire Edexcel Tutor Button - Explore and Connect with Tutors"
              >
                Hire Edexcel Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="serve-div-5">
        <div className="serve-text-div5">
          <h2>American Board Tutoring</h2>
          <p>
            For students following the American Board curriculum, Tuturns offers
            comprehensive tutoring support. Our dedicated educators assist
            students in understanding the intricacies of the American Board
            system, guiding them toward academic excellence.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A Tutor">
              <button
                className="serve-btn"
                title="Hire American Board Tutor - Find the Perfect Tutor with American Board Certification"
                aria-label="Hire American Board Tutor Button - Explore and Connect with Certified Tutors"
              >
                Hire American Board Tutor
              </button>
            </Link>
          </div>
        </div>
        <Image src={whoWeServeImage6} height={isMobile ? 500 : 300} />
      </div>
      <div className="serve-div-6">
        <Image src={whoWeServeImage7} height={isMobile ? 500 : 300} />
        <div className="serve-text-div6">
          <h2>Foundation Board Tutoring</h2>
          <p>
            Tuturns' tutoring for students enrolled in Foundation Board programs
            is tailored to build a strong academic base. We ensure students are
            well-prepared for their educational journey, laying the groundwork
            for their future success.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A Tutor">
              <button
                className="serve-btn"
                title="Hire Foundation Board Tutor - Find the Perfect Tutor with Foundation Board Certification"
                aria-label="Hire Foundation Board Tutor Button - Explore and Connect with Certified Tutors"
              >
                Hire Foundation Board Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="serve-div-7">
        <div className="serve-text-div7">
          <h2>International Baccalaureate (IB) Tutoring</h2>
          <p>
            Prepare for the challenges of the International Baccalaureate (IB)
            program with Tuturns' expert tutoring services. Our experienced
            tutors provide guidance through the rigorous IB curriculum, ensuring
            students are ready to excel in IB examinations.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A Tutor">
              <button
                className="serve-btn"
                title="Hire IB Tutor - Find the Perfect Tutor for International Baccalaureate (IB) Courses"
                aria-label="Hire IB Tutor Button - Explore and Connect with Tutors"
              >
                Hire IB Tutor
              </button>
            </Link>
          </div>
        </div>
        <Image src={whoWeServeImage8} height={isMobile ? 500 : 400} />
      </div>
      <div className="serve-div-8">
        <Image src={whoWeServeImage9} height={isMobile ? 500 : 400} />
        <div className="serve-text-div8">
          <h2>CBSE Tutoring (Central Board of Secondary Education)</h2>
          <p>
            Tuturns' CBSE tutoring services are crafted to meet the needs of
            students following the Central Board of Secondary Education
            curriculum. We offer comprehensive support, helping students thrive
            in CBSE examinations and beyond.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A Tutor">
              <button
                className="serve-btn"
                title="Hire CBSE Tutor - Find the Perfect Tutor for CBSE Curriculum"
                aria-label="Hire CBSE Tutor Button - Explore and Connect with Tutors"
              >
                Hire CBSE Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mob-show">
        <Image src={whoWeServeImage10} height={isMobile ? 500 : 400} />
      </div>
      <div className="serve-div-9">
        <div className="serve-text-div9">
          <h2>
            CISCE Tutoring (Council for the Indian School Certificate
            Examinations)
          </h2>
          <p>
            Students enrolled in CISCE programs can rely on Tuturns' expert
            tutoring assistance. Our tutors are well-acquainted with the CISCE
            curriculum, providing targeted guidance to help students excel in
            CISCE examinations and achieve their academic goals.
          </p>
          <div>
            <Link href="/hireTutor" title="Hire A Tutor">
              <button
                className="serve-btn"
                title="Hire CISCE Tutor - Find the Perfect Tutor for CISCE Curriculum"
                aria-label="Hire CISCE Tutor Button - Explore and Connect with Tutors"
              >
                Hire CISCE Tutor
              </button>
            </Link>
          </div>
        </div>
        <Image src={whoWeServeImage10} height={500} />
      </div>
    </div>
  );
};

export default WhoWeServe;
