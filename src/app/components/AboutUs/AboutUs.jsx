"use client"
import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import dynamic from "next/dynamic";
import aboutImage1 from "../../../../public/images/about_image1.svg";
import aboutImage2 from "../../../../public/images/about_image2.webp";
import aboutImage3 from "../../../../public/images/about_image3.webp";
import aboutImage4 from "../../../../public/images/about_image4.jpg";
import aboutImage5 from "../../../../public/images/about_image5.svg";
import aboutImage6 from "../../../../public/images/about_image6.svg";

const ScrollToTop = dynamic(() =>
  import("../../components/ScrollToTop/ScrollToTop")
);
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const AboutUs = () => {
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
    <>
      <ScrollToTop />
      <div className="about-us">
        <h1>Your Path to Academic Excellence</h1>
        <div className="about-us-upper">
          <div className="about-upper-text">
            <h2>Welcome to TuTurns</h2>
            <p>
              your trusted partner on the journey to academic success. At
              TuTurns, we are committed to providing top-notch online tutoring
              services for students pursuing O-levels, A-levels, Edexcel IGCSE,
              and American board curricula across all grade levels. Our mission
              is to empower students with the knowledge and skills they need to
              excel academically and achieve their educational aspirations.
            </p>
          </div>
          <Image
            src={aboutImage1}
            alt="clip art image of the girl studying from the book provided by TuTurns"
            height={isMobile ? 500 : null}
          />
        </div>
        <div className="about-us-2-div">
          <Image
            src={aboutImage2}
            height={isMobile ? 500 : 450}
            width={isMobile ? 500 : null}
            alt="female instructor and tutor from Tuturns while conducting the lecture"
          />
          <div className="about-us-2-div-text">
            <h2>Who We Are?</h2>
            <p>
              At TuTurns, our story is one of passion, dedication, and a
              deep-rooted belief in the transformative power of education.
              Founded by a team of experienced educators, TuTurns was born out
              of a desire to bridge the gap between students and exceptional
              tutors in a digital age. Our founders saw the need for accessible,
              high-quality tutoring that could adapt to the unique needs of each
              student.
            </p>
          </div>
        </div>
        <div className="about-us-3-div">
          <div className="about-us-3-div-text">
            <h2>Why Choose TuTurns?</h2>
            <ol>
              <li>
                Expert Tutors: Our team of tutors comprises experienced
                educators who are subject matter experts and are dedicated to
                nurturing students' intellectual growth.
              </li>
              <li>
                Personalized Learning: We understand that every student is
                unique. That's why we tailor our tutoring sessions to cater to
                each student's individual learning style and pace.
              </li>
              <li>
                Comprehensive Curriculum: TuTurns offers a comprehensive
                curriculum that aligns with the requirements of O-levels,
                A-levels, Edexcel IGCSE, and American board curricula, ensuring
                students are well-prepared for their exams.
              </li>
              <li>
                Flexible Scheduling: We understand the demands of a student's
                life, so we offer flexible scheduling options to accommodate
                your busy routine.
              </li>
              <li>
                Interactive Learning: Our online platform utilizes cutting-edge
                technology to provide interactive and engaging learning
                experiences that keep students motivated and focused.
              </li>
            </ol>
          </div>
          <Image
            src={aboutImage3}
            alt="male tutor from TuTurns while conducting a lecture"
          />
        </div>
        <div className="about-us-4-div">
          <Image
            src={aboutImage4}
            height={500}
            alt="visual image of the student taking lecture from the tutor from TuTurns"
          />
          <div className="about-us-4-div-text">
            <h2>Our Commitment</h2>
            <p>
              At TuTurns, we are committed to nurturing a supportive learning
              environment that fosters academic excellence. Our team is
              dedicated to helping students not only achieve their academic
              goals but also develop critical thinking, problem-solving, and
              study skills that will serve them well in life beyond the
              classroom.
            </p>
          </div>
        </div>
        <div className="join-us-div">
          <div className="join-us-div-text">
            <h2>Join Us on Your Academic Journey</h2>
            <p>
              We invite you to join TuTurns and embark on a journey towards
              academic excellence. Whether you're preparing for crucial exams,
              seeking to master challenging subjects, or simply looking to
              enhance your educational experience, TuTurns is here to guide you
              every step of the way.
            </p>
          </div>
        </div>
        <div className="join-us-cards">
          <div className="join-us-teacher-card">
            <Image src={aboutImage5} alt="icon of the operator" />
            <div className="join-us-teacher-text">
              <h2>Do you want to teach here?</h2>
              <p>
                If you're a passionate educator, TuTurns offers a platform to
                share your expertise and inspire students online. Join us in
                shaping the future of education.
              </p>
              <div className="join-us-btn-div">
                <Link href="/bookACall" title="Book A Call">
                  <button
                    className="join-us-btn"
                    title="Join Us as a Tutor - Book a Call"
                    aria-label="Become a Tutor - Book a Call Button"
                  >
                    Become A Tutor
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="join-us-student-card">
            <Image src={aboutImage6} alt="icon of the graduate" />
            <div className="join-us-student-text">
              <h2>Do you want to learn here?</h2>
              <p>
                Explore a world of learning at TuTurns. Whether you're a student
                or a lifelong learner, we offer a wealth of educational
                resources and expert guidance to help you achieve your goals.
              </p>
              <div className="join-us-btn-div">
                <Link href="/hireTutor" title="Hire A Tutor">
                  <button
                    className="join-us-btn"
                    title="Hire a Tutor - Find the Perfect Tutor for Your Needs"
                    aria-label="Hire a Tutor Button - Explore and Connect with Tutors"
                  >
                    Hire A Tutor
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
