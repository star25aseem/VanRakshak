import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useSpring, animated } from "@react-spring/web";
import {motion} from "framer-motion"
import "./Section.css";

const Section = ({ section }) => {
  const fadeProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5 });
  console.log(section);
  if (!section) {
    return <div>Loading...</div>;
  }

  return (
    <div    style={{
      backgroundImage: `url('./src/EducationHub/Images/commonImage1.jpeg')`, 
      backgroundSize: "cover", 
      backgroundPosition: "center",
    }} >
    <motion.h2
    style={{overflow:"hidden"}}
    initial={{width:0}}
    animate={{width:"100%"}}
    transition={{duration:2,ease:"easeInOut"}}
    >
      Name:{section.name}
      <br></br>
      <br></br>
      Scientific_Name:{section.scientific_name}
      <br></br>
      <br></br>
      Description
      <br></br>
      <p>
      {section.description.page_0}
      {section.description.page_1}
      {section.description.page_2}
      {section.description.page_3}
      {section.description.page_4}
      <br></br>
      <br></br>
      <br></br>
       Found In
       <br></br>
       <br></br>
       {section.forest_type}
      </p>
      
    </motion.h2>

        </div>

  );
};

export default Section;
