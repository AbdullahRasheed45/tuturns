"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "./Testimonial.css";
// import AOS from "aos"
// import "aos/dist/aos.css"
import { FormatQuoteOutlined } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import testmonialImage1 from "../../../../public/images/testimonial_image1.png";
import testmonialImage2 from "../../../../public/images/testimonial_image2.png";
import testmonialImage3 from "../../../../public/images/testimonial_image3.jpeg";
import testmonialImage4 from "../../../../public/images/testimonial_image4.png";
import testmonialImage5 from "../../../../public/images/testimonial_image5.png";
import testmonialImage6 from "../../../../public/images/testimonial_image6.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
const Image = dynamic(() => import("next/image"));

const RequestTutor = dynamic(()=>import("../RequestTutor/RequestTutor"))


const Testimonial = () => {
  const [isAbove767px, setIsAbove767px] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAbove767px(window.innerWidth > 767);
    }

    const handleResize = () => {
      setIsAbove767px(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    <div className="div-testi-container">
      <div className="div-text-testi">
        <h1>
          See how our visitors & members made their{" "}
          <span className="span-text-blue">Success Stories</span>
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay with a 5-second delay
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect="coverflow"
        navigation={isAbove767px ? true : false} // Conditionally include Navigation based on screen size
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <div>
                    <Image
                      src={testmonialImage1}
                      className="image"
                      alt="Ms. Ayesha Khan - House wife"
                      placeholder="blur"
                    />
                  </div>

                  <p>
                    I am truly impressed with the level of dedication and
                    expertise provided by the tutors at this platform. My son
                    has improved significantly in his O-levels thanks to the
                    personalized attention he receives.
                  </p>
                  <FormatQuoteOutlined className="qoute-icon" />
                  <div className="details">
                    <span className="name">Ms. Ayesha Khan</span>
                    <span className="job">House wife</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <div>
                    <Image
                      src={testmonialImage2}
                      className="image"
                      alt="Mr. Ahmed Malik - Software Engineer"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    As a parent, I highly recommend this tutoring service. My
                    daughter's confidence in her A-level subjects has soared,
                    and she's achieving remarkable results. Thank you for making
                    a difference!
                  </p>
                  <FormatQuoteOutlined className="qoute-icon" />
                  <div className="details">
                    <span className="name">Mr. Ahmed Malik</span>
                    <span className="job">Software Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <div>
                    <Image
                      src={testmonialImage3}
                      className="image"
                      alt="Dr. Farida Iqbal - Dentist"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    The IGCSE curriculum can be challenging, but our tutor here
                    has made it manageable for my daughter. Her grades have
                    improved, and she's more enthusiastic about learning now.
                    Alhamdulliah!
                  </p>
                  <FormatQuoteOutlined className="qoute-icon" />
                  <div className="details">
                    <span className="name">Dr. Farida Iqbal</span>
                    <span className="job">Dentist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <div>
                    <Image
                      src={testmonialImage4}
                      className="image"
                      alt="Mrs. Samina Ahmed - HR Manager"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    Edexcel exams require thorough preparation, and I'm
                    delighted with the quality of teaching here. My son's
                    progress has been remarkable, and he's better prepared for
                    success.
                  </p>
                  <FormatQuoteOutlined className="qoute-icon" />
                  <div className="details">
                    <span className="name"> Mrs. Samina Ahmed</span>
                    <span className="job">HR Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <div>
                    <Image
                      src={testmonialImage5}
                      className="image"
                      alt="Mr. Usman Qureshi - Businessman"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    My son has been receiving tutoring for his primary school
                    subjects, and the results speak for themselves. His grades
                    have improved significantly, and he really enjoys his
                    lessons.
                  </p>
                  <FormatQuoteOutlined className="qoute-icon" />
                  <div className="details">
                    <span className="name">Mr. Usman Qureshi</span>
                    <span className="job">Businessman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <div>
                    <Image
                      src={testmonialImage6}
                      className="image"
                      alt="Ms. Saba Qazmi - Pre-nursery Teacher"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    I am extremely satisfied with the tutoring services provided
                    by this platform. My son's transition from primary to
                    secondary school has been smooth, thanks to the excellent
                    support and guidance he receives.
                  </p>
                  <FormatQuoteOutlined className="qoute-icon" />
                  <div className="details">
                    <span className="name"> Ms. Saba Qazmi</span>
                    <span className="job">Pre-nursery Teacher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <RequestTutor/>
    </>
  );
};

export default Testimonial;
