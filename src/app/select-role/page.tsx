"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SelectRole() {
  const router = useRouter();

  return (
    <div className="container flex items-center justify-center h-screen bg-gray-50">
      <div className=" bg-white p-8 rounded-lg shadow-md space-y-6 text-center inline-block">
        <h1 className="text-2xl font-semibold text-gray-800">
          Are you a Brand or an Influencer?
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => router.push("/onboarding/brand")}>
            Brand
          </Button>
          <Button onClick={() => router.push("/onboarding/influencer")}>
            Influencer
          </Button>
        </div>
      </div>
    </div>
  );
}
