import React from "react";
import dynamic from "next/dynamic";

const SignupPage = dynamic(() => import("../components/signup/signup"));

export const metadata = {
  title: "TuTurns | Sign Up",
  description:
    "Sign up for TuTurns tutoring services. Achieve academic success with our experienced tutors.",
};

const signup = () => {
  return (
    <div>
      <SignupPage />
    </div>
  );
};

export default signup;
