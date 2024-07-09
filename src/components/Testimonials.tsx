"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-full pt-28 text-center">
      <h1 className="text-6xl text-zinc-200">OUR TESTIMONIALS</h1>
      <InfiniteMovingCards
        className="text-sm"
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "This platform has revolutionized the way I connect with brands. The campaigns are engaging, and the support team is fantastic!",
      name: "Emily Johnson",
      title: "Fashion Influencer",
    },
    {
      quote:
        "I’ve been able to grow my following and work with amazing brands thanks to this marketplace. Highly recommended for influencers at any stage.",
      name: "Michael Smith",
      title: "Tech Enthusiast",
    },
    {
      quote:
        "As a fitness influencer, I love how easy it is to find and join campaigns that align with my values. It’s a game-changer for my brand.",
      name: "Sarah Williams",
      title: "Fitness Coach",
    },
    {
      quote:
        "The collaboration tools on this platform make it so simple to work with other influencers and create amazing content. It’s a must-have for any serious influencer.",
      name: "Daniel Brown",
      title: "Travel Blogger",
    },
    {
      quote:
        "From giveaways to brand ambassadorships, the variety of campaigns available is impressive. It’s helped me diversify my content and keep my audience engaged.",
      name: "Jessica Davis",
      title: "Beauty Guru",
    },
    {
      quote:
        "This marketplace is perfect for finding new opportunities and building lasting relationships with brands. It’s a crucial part of my business strategy.",
      name: "Chris Martinez",
      title: "Lifestyle Influencer",
    },
  ];
  
