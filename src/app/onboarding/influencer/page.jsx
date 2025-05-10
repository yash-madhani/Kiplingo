"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, Instagram, Youtube } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function InfluencerOnboarding() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [niche, setNiche] = useState("");
  const [bio, setBio] = useState("");
  const [followerCount, setFollowerCount] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [pricings, setPricings] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    const { data: userData } = await supabase.auth.getUser();
    const userId = userData?.user?.id;

    if (!userId) {
      setError("Not logged in");
      setIsSubmitting(false);
      return;
    }

    const social_links = {
      instagram,
      youtube,
    };

    let parsedPricings;
    try {
      parsedPricings = JSON.parse(pricings);
    } catch (e) {
      setError("Please enter valid JSON for pricings");
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from("influencers").insert({
      id: userId,
      name,
      niche,
      bio,
      follower_count: Number(followerCount),
      location,
      profile_picture: profilePicture,
      social_links,
      pricings: parsedPricings,
    });

    if (error) {
      console.error(error);
      setError("Error submitting form");
      setIsSubmitting(false);
    } else {
      await supabase.auth.updateUser({ data: { user_type: "influencer" } });
      router.push("/dashboard");
    }
  };

  // Helper function to get initials from name
  const getInitials = () => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="container max-w-3xl py-10 m-20">
      <Card className="border-slate-200 shadow-md my-10">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                Influencer Profile
              </CardTitle>
              <CardDescription className="mt-2">
                Complete your profile to start connecting with brands
              </CardDescription>
            </div>
            {profilePicture && (
              <Avatar className="h-16 w-16 border-2 border-slate-100">
                <AvatarImage
                  src={profilePicture || "/placeholder.svg"}
                  alt="Profile"
                />
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
            )}
          </div>
        </CardHeader>

        <Tabs defaultValue="basic" className="w-full">
          <CardContent className="border-b border-slate-200 pb-2">
            <TabsList className="">
              <TabsTrigger value="basic">Personal Info</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
          </CardContent>

          <CardContent className="pt-6">
            <TabsContent value="basic" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="mb-1.5 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <Label htmlFor="niche" className="mb-1.5 block">
                    Content Niche
                  </Label>
                  <Input
                    id="niche"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="Fashion, Beauty, Tech, etc."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio" className="mb-1.5 block">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell brands about yourself and your content"
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="followerCount" className="mb-1.5 block">
                    Total Followers
                  </Label>
                  <Input
                    id="followerCount"
                    type="number"
                    value={followerCount}
                    onChange={(e) => setFollowerCount(e.target.value)}
                    placeholder="Combined follower count"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="mb-1.5 block">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="profilePicture" className="mb-1.5 block">
                  Profile Picture URL
                </Label>
                <Input
                  id="profilePicture"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  placeholder="https://example.com/your-image.jpg"
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  Enter a direct link to your profile image
                </p>
              </div>
            </TabsContent>

            <TabsContent value="social" className="space-y-4">
              <div>
                <Label
                  htmlFor="instagram"
                  className="mb-1.5 flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" /> Instagram Profile
                </Label>
                <Input
                  id="instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="https://instagram.com/yourusername"
                />
              </div>

              <div>
                <Label
                  htmlFor="youtube"
                  className="mb-1.5 flex items-center gap-2"
                >
                  <Youtube className="h-4 w-4" /> YouTube Channel
                </Label>
                <Input
                  id="youtube"
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  placeholder="https://youtube.com/c/yourchannel"
                />
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-4">
              <div className="rounded-md border border-slate-200 p-4">
                <h3 className="mb-4 font-medium">
                  Content Pricing (JSON Format)
                </h3>
                <Textarea
                  value={pricings}
                  onChange={(e) => setPricings(e.target.value)}
                  placeholder='e.g. {"story": 100, "post": 200, "reel": 300}'
                  className="min-h-[120px]"
                />
              </div>
              <div className="rounded-md bg-slate-50 p-4 text-sm">
                <p className="font-medium text-slate-700">
                  Pricing Format Example:
                </p>
                <pre className="mt-2 overflow-x-auto text-xs text-slate-600">
                  {`{
  "story": 100,   // Price for Instagram/Facebook stories
  "post": 200,    // Price for standard posts
  "reel": 300     // Price for video content
}`}
                </pre>
                <p className="mt-3 text-xs text-slate-500">
                  These are your standard rates. You can always negotiate
                  specific rates for individual campaigns.
                </p>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>

        {error && (
          <CardContent>
            <Alert variant="destructive" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </CardContent>
        )}

        <CardFooter className="flex justify-between border-t border-slate-200 p-6">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="min-w-[120px]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
