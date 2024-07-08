import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

const CampaignsInfo = [
  {
    title: "Summer Skincare Essentials Review",
    brandName: "Glow Beauty",
    campaignType: "Product Review",
    description:
      "Influencers will receive a range of our summer skincare products to review and share their experiences with their followers, highlighting the benefits and effectiveness of each product.",
  },
  {
    title: "Ultimate Tech Gadget Giveaway",
    brandName: "Tech Innovators",
    campaignType: "Giveaway",
    description:
      "Influencers will host a giveaway where their followers can win the latest tech gadgets. The aim is to boost engagement and increase brand visibility by encouraging followers to like, comment, and share the giveaway posts.",
  },
  {
    title: "Healthy Living with FreshFoods",
    brandName: "FreshFoods",
    campaignType: "Sponsored Content",
    description:
      "Influencers will create content showcasing how they incorporate FreshFoods products into their daily meals. The goal is to promote healthy eating habits and drive traffic to the FreshFoods online store.",
  },
  {
    title: "Fashion Forward Affiliate Program",
    brandName: "Chic Apparel",
    campaignType: "Affiliate Marketing",
    description:
      "Influencers will promote Chic Apparel's latest clothing line using unique affiliate links. They will earn a commission on every sale made through their links, while helping to boost brand sales and awareness.",
  },
  {
    title: "Virtual Fitness Fest",
    brandName: "FitLife",
    campaignType: "Event Promotion",
    description:
      "Influencers will promote and participate in FitLife's Virtual Fitness Fest, a live-streamed event featuring workout sessions, wellness tips, and more. The goal is to increase event attendance and engage with fitness enthusiasts.",
  },
  {
    title: "Eco-Friendly Living with GreenEarth",
    brandName: "GreenEarth",
    campaignType: "Brand Ambassadorship",
    description:
      "Selected influencers will become brand ambassadors for GreenEarth, regularly promoting eco-friendly products and lifestyle choices. This long-term collaboration aims to build a strong, sustainable community around the GreenEarth brand.",
  },
];

function CampaignCards() {
  return (
    <div className="p-0 my-2 w-[80%]">
      {CampaignsInfo.map((campaign) => (
        <div>
          <Card className="mb-2 mr-2">
            <CardHeader>
              <CardTitle>{campaign.title}</CardTitle>
              <CardDescription>{campaign.brandName}</CardDescription>
              <CardDescription>Category: {campaign.campaignType}</CardDescription>
            </CardHeader>
            {/* <CardContent>
              <p className="text-sm" > Category: {campaign.campaignType}</p>
            </CardContent> */}
            <CardFooter>
              <p>{campaign.description}</p>
              <Button>Apply now</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CampaignCards;
