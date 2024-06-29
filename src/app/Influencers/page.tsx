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
    profilePic: "https://example.com/jane.jpg",
    bio: "Lifestyle influencer with a passion for travel and fashion.",
    followers: "120K",
    location: "New York, USA",
    rating: "4.8",
  },
  {
    name: "James Johnson",
    type: "Fitness",
    profilePic: "https://example.com/john.jpg", // Assuming the same profile picture as before
    bio: "Fitness guru sharing tips on healthy living and workouts.",
    followers: "200K",
    location: "Los Angeles, USA",
    rating: "4.9",
  },
  {
    name: "Emily Johnson",
    type: "Food",
    profilePic: "https://example.com/emily.jpg",
    bio: "Food blogger exploring culinary delights around the world.",
    followers: "90K",
    location: "Chicago, USA",
    rating: "4.7",
  },
  {
    name: "Michael Brown",
    type: "Travel",
    profilePic: "https://example.com/michael.jpg",
    bio: "Travel enthusiast sharing experiences from around the globe.",
    followers: "150K",
    location: "San Francisco, USA",
    rating: "4.6",
  },
  {
    name: "Sarah Wilson",
    type: "Beauty",
    profilePic: "https://example.com/sarah.jpg",
    bio: "Beauty expert with tutorials on makeup and skincare.",
    followers: "180K",
    location: "Miami, USA",
    rating: "4.9",
  },
  {
    name: "David Brown",
    type: "Photography",
    profilePic: "https://example.com/david.jpg",
    bio: "Photographer capturing moments with a unique perspective.",
    followers: "100K",
    location: "Seattle, USA",
    rating: "4.5",
  },
];

function Influencers() {

  const [influencersInfo, setInfluencersInfo] = useState(influencersInfoData);

  return (
    <div className="flex flex-wrap justify-center">
      {influencersInfo.map((influencer) => (
        <Card className="m-2 w-[325px] text-left">
        <CardHeader>
          <CardTitle className="text-2xl" >{influencer.name}</CardTitle>
          <CardDescription>Category: {influencer.type}</CardDescription>
        </CardHeader>
        <CardContent>
          <img className="w-full h-36" src={influencer.profilePic} alt="Profile Pic" />
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
  );
}

export default Influencers;
