import React from "react";
import "./SubjectCards.css";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"));
const Testimonials = dynamic(() => import("../Testimonial/Testimonial"));

const SubjectCards = () => {

  return (
    <>
      <div className="subject-main-div" >
        <div className="upward-div">
          <div className="up-left">
            <div className="up-left-text">
              <h1>Find qualified Tutors for online tutoring</h1>
              <p>
                Connect with our tutors for O-level, A-level, IGCSE, and GUlf &
                Middle East board subjects from primary to secondary education
                (Grade 1-12). From English to Math, History to Computer Science,
                and graphic designing to programming,find your perfect tutor
                with us. Being your educational journey today with high-impact
                learning!
              </p>
              <Link href="hireTutor" aria-label="Hire a Tutor Now">
                <button className="up-left-btn" aria-label="Hire a Tutor Now">
                  Hire A Tutor
                </button>
              </Link>
            </div>
          </div>
          <div className="up-right">
            <div className="right-div1">
              <div className="card">
                <div className="card-content">
                  <h2>Mathematics</h2>
                </div>
                <div className="flip-content">
                  <p>
                    Don't let the math bug bite you especially when help is just
                    a click away.
                  </p>

                  <Link href="hireTutor" aria-label="Hire a Math Tutor Now">
                    <button
                      className="flip-content-button"
                      aria-label="Hire a Math Tutor Now"
                    >
                      Hire Now
                    </button>
                  </Link>
                  <Link href="hireTutor" aria-label="View Math Tutors">
                    <button
                      className="mob-button"
                      aria-label="View Math Tutors"
                    >
                      Tutor
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h2>English</h2>
                </div>
                <div className="flip-content">
                  <p>
                    Learn English with the experts the way it's meant to be
                    learned.
                  </p>
                  <Link href="hireTutor" aria-label="Hire a English Tutor Now">
                    <button
                      className="flip-content-button"
                      aria-label="Hire a English Tutor Now"
                    >
                      Hire Now
                    </button>
                  </Link>
                  <Link href="hireTutor" aria-label="View English Tutors">
                    <button
                      className="mob-button"
                      aria-label="View English Tutors"
                    >
                      Tutor
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right-div2">
              <div className="card">
                <div className="card-content">
                  <h2>Biological Science</h2>
                </div>
                <div className="flip-content">
                  <p>
                    Learn how to study biology and chemistry easily with the
                    experts - hire a tutor now!
                  </p>
                  <Link
                    href="hireTutor"
                    aria-label="Hire a Biological Sciences Tutor Now"
                  >
                    <button
                      className="flip-content-button"
                      aria-label="Hire a Biological Sciences Tutor Now"
                    >
                      Hire Now
                    </button>
                  </Link>
                  <Link
                    href="hireTutor"
                    aria-label="View Biological Sciences Tutors"
                  >
                    <button
                      className="mob-button"
                      aria-label="View Biological Sciences Tutors"
                    >
                      Tutor
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h2>Science</h2>
                </div>
                <div className="flip-content">
                  <p>
                    Science doesn't have to be so gnarly especially when we have
                    our experts.
                  </p>
                  <Link href="hireTutor" aria-label="Hire a Science Tutor Now">
                    <button
                      className="flip-content-button"
                      aria-label="Hire a Science Tutor Now"
                    >
                      Hire Now
                    </button>
                  </Link>
                  <Link href="hireTutor" aria-label="View Science Tutors">
                    <button
                      className="mob-button"
                      aria-label="View Science Tutors"
                    >
                      Tutor
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="downward-div">
          <div className="card-div">
            <div className="card">
              <div className="card-content">
                <h2>Physics</h2>
              </div>
              <div className="flip-content">
                <p>
                  Learn how to study Physics easily with the experts - hire a
                  tutor now!
                </p>
                <Link href="hireTutor" aria-label="Hire a Physics Tutor Now">
                  <button
                    className="flip-content-button"
                    aria-label="Hire a Physics Tutor Now"
                  >
                    Hire Now
                  </button>
                </Link>
                <Link href="hireTutor" aria-label="View Physics Tutors">
                  <button
                    className="mob-button"
                    aria-label="View Physics Tutors"
                  >
                    Tutor
                  </button>
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Accounting</h2>
              </div>
              <div className="flip-content">
                <p>
                  Learn Accounting and taxation with the experts - hire a tutor
                  now!
                </p>
                <Link href="hireTutor" aria-label="Hire a Accounting Tutor Now">
                  <button
                    className="flip-content-button"
                    aria-label="Hire a Accounting Tutor Now"
                  >
                    Hire Now
                  </button>
                </Link>
                <Link href="hireTutor" aria-label="View Accounting Tutors">
                  <button
                    className="mob-button"
                    aria-label="View Accounting Tutors"
                  >
                    Tutor
                  </button>
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Graphic Design</h2>
              </div>
              <div className="flip-content">
                <p>
                  Learn Graphic Designing with 3D Arts and Canva with the
                  experts - hire a tutor now!
                </p>
                <Link
                  href="hireTutor"
                  aria-label="Hire a Graphic Design Tutor Now"
                >
                  <button
                    className="flip-content-button"
                    aria-label="Hire a Graphic Design Tutor Now"
                  >
                    Hire Now
                  </button>
                </Link>
                <Link href="hireTutor" aria-label="View Graphic Design Tutors">
                  <button
                    className="mob-button"
                    aria-label="View Graphic Design Tutors"
                  >
                    Tutor
                  </button>
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Programming Language</h2>
              </div>
              <div className="flip-content">
                <p>
                  Explore the wonders of programming with the coding experts.
                </p>
                <Link
                  href="hireTutor"
                  aria-label="Hire a Programming Language Tutor Now"
                >
                  <button
                    className="flip-content-button"
                    aria-label="Hire a Programming Language Tutor Now"
                  >
                    Hire Now
                  </button>
                </Link>
                <Link
                  href="hireTutor"
                  aria-label="View Programming Language Tutors"
                >
                  <button
                    className="mob-button"
                    aria-label="View Programming Language Tutors"
                  >
                    Tutor
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default SubjectCards;
