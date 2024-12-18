"use client"; // Mark this as a client component

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSComponent = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);

  return null; 
};

export default AOSComponent;
