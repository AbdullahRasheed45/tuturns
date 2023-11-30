import React from "react";

import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("../components/login/login"));

export const metadata = {
  title: "TuTurns | Log In",
  description:
    "Log in to TuTurns for comprehensive tutoring services. Achieve academic success with our experienced tutors.",
};

const Login = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;
