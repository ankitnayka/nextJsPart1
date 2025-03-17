"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { div } from "framer-motion/client";

const testimonials= [
      {
        "quote": "The only way to do great work is to love what you do.",
        "name": "Steve Jobs",
        "title": "Co-founder of Apple"
      },
      {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "name": "Winston Churchill",
        "title": "Former UK Prime Minister"
      },
      {
        "quote": "Believe you can and you're halfway there.",
        "name": "Theodore Roosevelt",
        "title": "26th President of the United States"
      },
      {
        "quote": "Do what you can, with what you have, where you are.",
        "name": "Theodore Roosevelt",
        "title": "26th President of the United States"
      },
      {
        "quote": "Your time is limited, so don’t waste it living someone else’s life.",
        "name": "Steve Jobs",
        "title": "Co-founder of Apple"
      },
      {
        "quote": "It always seems impossible until it’s done.",
        "name": "Nelson Mandela",
        "title": "Former President of South Africa"
      }
    ]
  
  


function MusicSchoolTestimonials(){
    return(
        <div className="">
                <h2 className="font-bold text-4xl text-center my-8 underline ">Hear our Harmony : Voices of success</h2>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
    </div>
        </div>

    )
}

export default MusicSchoolTestimonials