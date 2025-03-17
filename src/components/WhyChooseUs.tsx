"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    { title: "Introduction to React", description: "Learn the basics of React.js and component-based architecture." },
    { title: "State Management", description: "Understanding state and props to manage data efficiently in React." },
    { title: "React Hooks", description: "Exploring useState, useEffect, and custom hooks for functional components." },
    { title: "Routing in React", description: "Implementing navigation using React Router for seamless user experience." },
    { title: "Performance Optimization", description: "Improving React app performance with memoization and lazy loading." }
  ];
  
  
function WhyChooseUs(){
    return(
        <div>
                <StickyScroll content={content}></StickyScroll>
        </div>
    )
}

export default WhyChooseUs