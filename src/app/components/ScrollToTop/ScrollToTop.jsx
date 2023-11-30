"use client"
import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
