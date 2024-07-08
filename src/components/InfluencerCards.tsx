"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const influencersInfoData = [
    {
      name: "Jane Doe",
      type: "Lifestyle",
      profilePic: "",
      bio: "Lifestyle influencer with a passion for travel and fashion.",
      followers: "120K",
      location: "New York, USA",
      rating: "4.8",
    },
    {
      name: "James Johnson",
      type: "Fitness",
      profilePic: "https://plus.unsplash.com/premium_photo-1683733841845-29e325968e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D", 
      bio: "Fitness guru sharing tips on healthy living and workouts.",
      followers: "200K",
      location: "Los Angeles, USA",
      rating: "4.9",
    },
    {
      name: "Emily Johnson",
      type: "Food",
      profilePic: "",
      bio: "Food blogger exploring culinary delights around the world.",
      followers: "90K",
      location: "Chicago, USA",
      rating: "4.7",
    },
    {
      name: "Michael Brown",
      type: "Travel",
      profilePic: "https://media.istockphoto.com/id/1445790210/photo/female-influencer-vlogging-online-with-smartphone-from-home.webp?b=1&s=170667a&w=0&k=20&c=-nAD7HuDBgRaPR3ZFs417-qVyTmJWrfkt_CFS5e0TCo=",
      bio: "Travel enthusiast sharing experiences from around the globe.",
      followers: "150K",
      location: "San Francisco, USA",
      rating: "4.6",
    },
    {
      name: "Sarah Wilson",
      type: "Beauty",
      profilePic: "",
      bio: "Beauty expert with tutorials on makeup and skincare.",
      followers: "180K",
      location: "Miami, USA",
      rating: "4.9",
    },
    {
      name: "David Brown",
      type: "Photography",
      profilePic: "",
      bio: "Photographer capturing moments with a unique perspective.",
      followers: "100K",
      location: "Seattle, USA",
      rating: "4.5",
    },
  ];
  

function InfluencerCards() {

    const [influencersInfo, setInfluencersInfo] = useState(influencersInfoData);

  return (
    <div className="flex flex-wrap justify-center p-0 my-2 w-[80%]">
      {influencersInfo.map((influencer) => (
        <Card className="m-2 w-[325px] text-left rounded-lg">
        <CardHeader className="">
        <img className="w-full h-44 m-0 rounded-lg" src={ influencer.profilePic || '/images/influencerImage.jpeg'} alt="Profile Pic" />
          
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl" >{influencer.name}</CardTitle>
          <CardDescription>Category: {influencer.type}</CardDescription>
        </CardContent>
        <CardFooter className="flex-col items-start text-left" >
          <p className="pb-1 flex">Bio: <span className="text-neutral-500">{influencer.bio}</span> </p>
          <p className="pb-1 flex">Followers: <span className="text-neutral-500">{influencer.followers}</span> </p>
          <p className="pb-1 flex">Location: <span className="text-neutral-500">{influencer.location}</span> </p>
          <p className="pb-1 flex">Rating: <span className="text-neutral-500">{influencer.rating}</span> </p>
        </CardFooter>
      </Card>
      ))}
    </div>
  )
}

export default InfluencerCards;