import { HoverEffect } from "./ui/card-hover-effect";

export function ServicesSection() {
  return (
    <div className="max-w-5xl text-lg mx-auto px-8 pt-28">
        <h1 className="text-6xl text-zinc-200 text-center">OUR SERVICES</h1>
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    title: "Campaign Management",
    description:
      "Easily manage all your influencer campaigns in one place, from start to finish.",
    link: "/services/campaign-management",
  },
  {
    title: "Brand Collaboration",
    description:
      "Connect with top brands and collaborate on exciting projects that align with your niche.",
    link: "/services/brand-collaboration",
  },
  {
    title: "Performance Analytics",
    description:
      "Track the performance of your campaigns with detailed analytics and insights.",
    link: "/services/performance-analytics",
  },
  {
    title: "Influencer Networking",
    description:
      "Build your network by connecting with other influencers and sharing best practices.",
    link: "/services/influencer-networking",
  },
  {
    title: "Content Creation Tools",
    description:
      "Access a suite of tools designed to help you create high-quality content for your campaigns.",
    link: "/services/content-creation-tools",
  },
  {
    title: "Monetization Opportunities",
    description:
      "Discover new ways to monetize your influence through diverse opportunities.",
    link: "/services/monetization-opportunities",
  },
];
