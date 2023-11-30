import React from "react";
import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("../components/AboutUs/AboutUs"));

export const metadata = {
  title: "TuTurns | About Us",
  description:
    "Learn about TuTurns, your one-stop solution for comprehensive tutoring services. Get to know our mission and vision.",
};

const About = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default About;
