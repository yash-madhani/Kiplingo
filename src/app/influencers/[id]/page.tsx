import { notFound } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  MapPin,
  Users,
  Instagram,
  Twitter,
  Youtube,
  Twitch,
  Globe,
  TwitterIcon as TikTok,
  Mail,
  DollarSign,
  Award,
  BarChart3,
} from "lucide-react"

// Type definitions
type SocialLinks = {
  instagram?: string
  twitter?: string
  youtube?: string
  tiktok?: string
  twitch?: string
  website?: string
}

type Pricing = {
  type: string
  price: number
  description: string
}

type Influencer = {
  id: string
  name: string
  profile_picture: string
  cover_image?: string
  niche: string
  bio: string
  location: string
  follower_count: number
  engagement_rate?: number
  social_links: SocialLinks
  pricings: Pricing[]
  languages?: string[]
  achievements?: string[]
}

// Helper function to format numbers
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toString()
}

// Helper function to get social icon
function getSocialIcon(platform: string) {
  switch (platform) {
    case "instagram":
      return <Instagram className="h-5 w-5" />
    case "twitter":
      return <Twitter className="h-5 w-5" />
    case "youtube":
      return <Youtube className="h-5 w-5" />
    case "tiktok":
      return <TikTok className="h-5 w-5" />
    case "twitch":
      return <Twitch className="h-5 w-5" />
    case "website":
      return <Globe className="h-5 w-5" />
    default:
      return <Globe className="h-5 w-5" />
  }
}

export default async function InfluencerProfile({ params }: { params: { id: string } }) {
  const { data: influencer, error } = await supabase.from("influencers").select("*").eq("id", params.id).single()

  if (error || !influencer) {
    return notFound()
  }

  const rawPricings = influencer.pricings
const parsedPricings = Object.entries(rawPricings).map(([type, price]) => ({
  type,
  price,
  description: `${type} content`, // or leave empty if none
}))

const typedInfluencer = {
  ...influencer,
  pricings: parsedPricings,
} as Influencer


  // Get niche color
  const getNicheColor = (niche: string) => {
    const nicheMap: Record<string, string> = {
      Fashion: "bg-pink-100 text-pink-800",
      Beauty: "bg-purple-100 text-purple-800",
      Fitness: "bg-green-100 text-green-800",
      Travel: "bg-blue-100 text-blue-800",
      Food: "bg-orange-100 text-orange-800",
      Tech: "bg-slate-100 text-slate-800",
      Lifestyle: "bg-yellow-100 text-yellow-800",
    }

    return nicheMap[niche] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover image */}
      <div
        className="h-48 sm:h-64 w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
        style={{
          backgroundImage: typedInfluencer.cover_image
            ? `url(${typedInfluencer.cover_image})`
            : "linear-gradient(to right, #f43f5e, #d946ef, #6366f1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 -mt-20">
        <div className="flex justify-between mb-4">
          <Link href="/influencers">
            <Button variant="outline" size="sm" className="bg-white shadow-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Influencers
            </Button>
          </Link>
        </div>

        {/* Profile header */}
        <Card className="shadow-lg border-0 overflow-hidden mb-6">
          <CardHeader className="pt-6 pb-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Avatar className="w-28 h-28 border-4 border-white shadow-md">
                <AvatarImage src={typedInfluencer.profile_picture || "/placeholder.svg"} alt={typedInfluencer.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-rose-400 to-orange-300 text-white">
                  {typedInfluencer.name?.[0]}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-between">
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">{typedInfluencer.name}</CardTitle>
                    <CardDescription className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1">
                      <Badge className={`${getNicheColor(typedInfluencer.niche)}`}>{typedInfluencer.niche}</Badge>
                      <span className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {typedInfluencer.location}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3 mt-3 sm:mt-0">
                    <div className="flex flex-col items-center px-3 py-1 bg-gray-50 rounded-lg">
                      <div className="flex items-center text-sm font-medium">
                        <Users className="h-3.5 w-3.5 mr-1 text-gray-500" />
                        {formatNumber(typedInfluencer.follower_count)}
                      </div>
                      <span className="text-xs text-gray-500">Followers</span>
                    </div>
                    {typedInfluencer.engagement_rate && (
                      <div className="flex flex-col items-center px-3 py-1 bg-gray-50 rounded-lg">
                        <div className="flex items-center text-sm font-medium">
                          <BarChart3 className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          {typedInfluencer.engagement_rate}%
                        </div>
                        <span className="text-xs text-gray-500">Engagement</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Tabs for different sections */}
        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* About tab */}
          <TabsContent value="about">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Bio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line">{typedInfluencer.bio}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Languages */}
                {typedInfluencer.languages && typedInfluencer.languages.length > 0 && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {typedInfluencer.languages.map((language) => (
                          <Badge key={language} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Achievements */}
                {typedInfluencer.achievements && typedInfluencer.achievements.length > 0 && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {typedInfluencer.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Award className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Pricing tab */}
          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Collaboration Pricing</CardTitle>
                <CardDescription>Rates for different types of content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {typedInfluencer.pricings &&
                    typedInfluencer.pricings.map((pricing, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{pricing.type}</CardTitle>
                          <div className="flex items-center text-2xl font-bold text-rose-600">
                            <DollarSign className="h-5 w-5" />
                            {pricing.price}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{pricing.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>Connect with {typedInfluencer.name} on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {typedInfluencer.social_links &&
                    Object.entries(typedInfluencer.social_links).map(([platform, url]) => {
                      if (!url) return null
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                            {getSocialIcon(platform)}
                          </div>
                          <div>
                            <div className="font-medium capitalize">{platform}</div>
                            <div className="text-sm text-gray-500 truncate max-w-[200px]">{url}</div>
                          </div>
                        </a>
                      )
                    })}

                  <div className="sm:col-span-2 mt-4">
                    <Button className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact for Collaboration
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
