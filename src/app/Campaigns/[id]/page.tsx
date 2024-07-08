'use client';
import { useParams } from 'next/navigation';

const CampaignsInfo = [
    {
      id: 1,
      title: "Summer Skincare Essentials Review",
      brandName: "Glow Beauty",
      campaignType: "Product Review",
      description:
        "Influencers will receive a range of our summer skincare products to review and share their experiences with their followers, highlighting the benefits and effectiveness of each product.",
    },
    {
      id: 2,
      title: "Ultimate Tech Gadget Giveaway",
      brandName: "Tech Innovators",
      campaignType: "Giveaway",
      description:
        "Influencers will host a giveaway where their followers can win the latest tech gadgets. The aim is to boost engagement and increase brand visibility by encouraging followers to like, comment, and share the giveaway posts.",
    },
    {
      id: 3,
      title: "Healthy Living with FreshFoods",
      brandName: "FreshFoods",
      campaignType: "Sponsored Content",
      description:
        "Influencers will create content showcasing how they incorporate FreshFoods products into their daily meals. The goal is to promote healthy eating habits and drive traffic to the FreshFoods online store.",
    },
    {
      id: 4,
      title: "Fashion Forward Affiliate Program",
      brandName: "Chic Apparel",
      campaignType: "Affiliate Marketing",
      description:
        "Influencers will promote Chic Apparel's latest clothing line using unique affiliate links. They will earn a commission on every sale made through their links, while helping to boost brand sales and awareness.",
    },
    {
      id: 5,
      title: "Virtual Fitness Fest",
      brandName: "FitLife",
      campaignType: "Event Promotion",
      description:
        "Influencers will promote and participate in FitLife's Virtual Fitness Fest, a live-streamed event featuring workout sessions, wellness tips, and more. The goal is to increase event attendance and engage with fitness enthusiasts.",
    },
    {
      id: 6,
      title: "Eco-Friendly Living with GreenEarth",
      brandName: "GreenEarth",
      campaignType: "Brand Ambassadorship",
      description:
        "Selected influencers will become brand ambassadors for GreenEarth, regularly promoting eco-friendly products and lifestyle choices. This long-term collaboration aims to build a strong, sustainable community around the GreenEarth brand.",
    },
  ];

  const CampaignDetail = () => {
    const params = useParams();
    const { id } = params;
    const campaign = CampaignsInfo.find(c => c.id === parseInt(id as string));
  
    if (!campaign) {
      return <p>ERROR 404! PAGE DOESN'T EXIST</p>;
    }
  
    return (
      <div>
        <h1>{campaign.title}</h1>
        <p>Brand: {campaign.brandName}</p>
        <p>Type: {campaign.campaignType}</p>
        <p>Description: {campaign.description}</p>
      </div>
    );
  };
  
  export default CampaignDetail;