"use client";
import InfluencerCards from "@/components/InfluencerCards";
import InfluencersFilterBar from "@/components/InfluencersFilterBar";

function InfluencersPage() {
  return (
    <div className="h-full flex gap-2" >
      <InfluencersFilterBar />
      <InfluencerCards />
    </div>
  );
}

export default InfluencersPage;
