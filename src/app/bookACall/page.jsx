import dynamic from "next/dynamic";
import React from "react";

const BookACall = dynamic(() => import("../components/BookACall/BookACall"));


export const metadata = {
  title: "TuTurns | Book a Call",
  description:
    "Book a call with TuTurns to discuss your tutoring needs. Our team is ready to assist you in achieving your academic goals.",
};

const BookCall = () => {
  return (
    <div>
      <BookACall />
    </div>
  );
};

export default BookCall;
