import React from "react";
import dynamic from "next/dynamic";

const WhoWeServe = dynamic(() => import("../components/WhoWeServe/WhoWeServe"));
export const metadata = {
  title: "TuTurns | Who We Serve",
  description:
    "Discover who TuTurns serves with our comprehensive tutoring services. We cater to O/A Level, GCSE, and IGCSE boards.",
};

const whoWeServe = () => {
  return (
    <div>
      <WhoWeServe />
    </div>
  );
};

export default whoWeServe;
