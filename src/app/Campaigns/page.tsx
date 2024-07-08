"use client";
import CampaignsFilterBar from "@/components/CampaignsFilterBar";
import CampaignCards from "@/components/CampaignCards";

function Campaigns() {
  return (
    <div className="h-full flex gap-2">
      <CampaignsFilterBar />
      <CampaignCards />
    </div>
  );
}

export default Campaigns;
