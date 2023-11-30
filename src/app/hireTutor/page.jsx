import dynamic from "next/dynamic";
import React from "react";

const HireATutorForm = dynamic(() =>
  import("../components/HireATutorForm/HireATutorForm")
);

export const metadata = {
  title: "TuTurns | Hire a Tutor",
  description:
    "Hire a dedicated and experienced tutor from TuTurns for personalized tutoring services. Achieve academic excellence with our tutors.",
};

const hireATutor = () => {
  return (
    <div>
      <HireATutorForm />
    </div>
  );
};

export default hireATutor;
