"use client"

import Image from "next/image"
import { Instagram, Linkedin, MapPin, InstagramIcon as Tiktok, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DialogTitle, DialogDescription } from "@/components/ui/dialog"

type Platform = {
  name: string
  handle: string
  followers: number
  engagementRate: number
}

type Collaboration = {
  brand: string
  campaign: string
}

type Demographics = {
  ageGroups: {
    "18-24": number
    "25-34": number
    "35-44": number
    "45+": number
  }
  gender: {
    female: number
    male: number
    other: number
  }
  countries: {
    [country: string]: number
  }
}

type PricingItem = {
  type: string
  price: number
}

type Influencer = {
  name: string
  username: string
  profilePic?: string
  bio: string
  categories: string[]
  location: string
  platforms: Platform[]
  previousCollaborations?: Collaboration[]
  demographics: Demographics
  pricing: PricingItem[]
}

export function InfluencerProfile({ influencer }: { influencer: Influencer }) {
  const renderPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "tiktok":
        return <Tiktok className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <DialogTitle className="text-2xl">{influencer.name}</DialogTitle>
        <DialogDescription>{influencer.username}</DialogDescription>
      </div>

      <div className="relative h-48 w-full rounded-lg overflow-hidden">
        <Image src={influencer.profilePic || "/placeholder.svg"} alt={influencer.name} fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">About</h3>
            <p className="text-muted-foreground">{influencer.bio}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {influencer.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Location</h3>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              {influencer.location}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Platforms</h3>
            <div className="space-y-3">
              {influencer.platforms.map((platform) => (
                <div key={platform.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-muted mr-2">{renderPlatformIcon(platform.name)}</div>
                    <div>
                      <p className="font-medium">{platform.name}</p>
                      <p className="text-sm text-muted-foreground">{platform.handle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{platform.followers.toLocaleString()} followers</p>
                    <p className="text-sm text-muted-foreground">{platform.engagementRate}% engagement</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {influencer.previousCollaborations && (
            <div>
              <h3 className="text-lg font-medium mb-2">Previous Collaborations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {influencer.previousCollaborations.map((collab, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <p className="font-medium">{collab.brand}</p>
                    <p className="text-sm text-muted-foreground">{collab.campaign}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Audience Demographics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Age Groups</span>
                  <span>Percentage</span>
                </div>
                <div className="space-y-2">
                  {(["18-24", "25-34", "35-44", "45+"] as const).map((ageGroup) => (
                    <div key={ageGroup}>
                      <div className="flex justify-between text-sm">
                        <span>{ageGroup}</span>
                        <span>{influencer.demographics.ageGroups[ageGroup]}%</span>
                      </div>
                      <Progress value={influencer.demographics.ageGroups[ageGroup]} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Gender</span>
                  <span>Percentage</span>
                </div>
                <div className="space-y-2">
                  {(["female", "male", "other"] as const).map((gender) => (
                    <div key={gender}>
                      <div className="flex justify-between text-sm">
                        <span>{gender[0].toUpperCase() + gender.slice(1)}</span>
                        <span>{influencer.demographics.gender[gender]}%</span>
                      </div>
                      <Progress value={influencer.demographics.gender[gender]} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Top Countries</span>
                  <span>Percentage</span>
                </div>
                <div className="space-y-2">
                  {Object.entries(influencer.demographics.countries).map(([country, percentage]) => (
                    <div key={country}>
                      <div className="flex justify-between text-sm">
                        <span>{country}</span>
                        <span>{percentage}%</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Pricing</CardTitle>
              <CardDescription>Starting rates for different content types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {influencer.pricing.map((item) => (
                  <div key={item.type} className="flex justify-between items-center py-2 border-b last:border-0">
                    <span>{item.type}</span>
                    <span className="font-medium">${item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-rose-500 hover:bg-rose-600">
            Collaborate with {influencer.name.split(" ")[0]}
          </Button>
        </div>
      </div>
    </div>
  )
}
