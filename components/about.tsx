"use client"

import { GiPencilRuler } from "react-icons/gi";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export default function About() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section
      id="about"
    className=" bg-gray-200 w-full relative pt-20 md:pb-20 overflow-clip"
    ref={ref}
  >
    <GoogleGeminiEffect
      pathLengths={[
        pathLengthFirst,
        pathLengthSecond,
        pathLengthThird,
        pathLengthFourth,
        pathLengthFifth,
      ]}
    />
    
  </section>
  
  )
}
