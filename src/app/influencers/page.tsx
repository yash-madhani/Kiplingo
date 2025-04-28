"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Filter,
  Instagram,
  Linkedin,
  Search,
  InstagramIcon as Tiktok,
  TrendingUp,
  Twitter,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { InfluencerProfile } from "@/components/influencer-profile"
import { influencers } from "@/data/influencers.js"

type Influencer = {
    id: number;
    name: string;
    username: string;
    profilePic: string;
    bio: string;
    location: string;
    categories: string[];
    platforms: {
      name: string;
      handle: string;
      followers: number;
      engagementRate: number;
    }[];
    demographics: {
      countries: { [country: string]: number | undefined };  // Allow undefined as a valid value
    };
    pricing: {
      standard: number;
      discounted: number;
    };
    previousCollaborations: {
      brandName: string;
      product: string;
      campaign: string;
    }[];
  };
  


export default function InfluencersPage() {
    const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null)
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
    const [audienceSize, setAudienceSize] = useState<string>("any")
    const [priceRange, setPriceRange] = useState<number[]>([0, 1000])
    const [engagementRate, setEngagementRate] = useState<number[]>([0, 10])
    const [sortBy, setSortBy] = useState<string>("relevance")

  // Filter influencers based on search and filters
  const filteredInfluencers = influencers.filter((influencer) => {
    // Search filter
    if (
      searchQuery &&
      !influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !influencer.username.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Category filter
    if (
      selectedCategories.length > 0 &&
      !influencer.categories.some((category) => selectedCategories.includes(category))
    ) {
      return false
    }

    // Platform filter
    if (
      selectedPlatforms.length > 0 &&
      !influencer.platforms.some((platform) => selectedPlatforms.includes(platform.name))
    ) {
      return false
    }

    // Audience size filter
    if (audienceSize && audienceSize !== "any") {
      const totalFollowers = influencer.platforms.reduce((sum, platform) => sum + platform.followers, 0)

      switch (audienceSize) {
        case "1K-10K":
          if (totalFollowers < 1000 || totalFollowers > 10000) return false
          break
        case "10K-100K":
          if (totalFollowers < 10000 || totalFollowers > 100000) return false
          break
        case "100K-500K":
          if (totalFollowers < 100000 || totalFollowers > 500000) return false
          break
        case "500K-1M":
          if (totalFollowers < 500000 || totalFollowers > 1000000) return false
          break
        case "1M+":
          if (totalFollowers < 1000000) return false
          break
      }
    }

    // Price range filter
    if (influencer.startingPrice < priceRange[0] || influencer.startingPrice > priceRange[1]) {
      return false
    }

    // Engagement rate filter
    if (influencer.engagementRate < engagementRate[0] || influencer.engagementRate > engagementRate[1]) {
      return false
    }

    return true
  })

  // Sort influencers
  const sortedInfluencers = [...filteredInfluencers].sort((a, b) => {
    switch (sortBy) {
      case "priceAsc":
        return a.startingPrice - b.startingPrice
      case "priceDesc":
        return b.startingPrice - a.startingPrice
      case "followers":
        const aFollowers = a.platforms.reduce((sum, platform) => sum + platform.followers, 0)
        const bFollowers = b.platforms.reduce((sum, platform) => sum + platform.followers, 0)
        return bFollowers - aFollowers
      case "engagement":
        return b.engagementRate - a.engagementRate
      default: // relevance
        return 0
    }
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const openInfluencerProfile = (influencer: Influencer) => {
    setSelectedInfluencer(influencer)
  }

  const categories = ["Fashion", "Fitness", "Tech", "Beauty", "Travel", "Food", "Gaming", "Lifestyle", "Business"]

  const platforms = ["Instagram", "YouTube", "TikTok", "Twitter", "LinkedIn"]

  const audienceSizes = [
    { value: "1K-10K", label: "1K–10K" },
    { value: "10K-100K", label: "10K–100K" },
    { value: "100K-500K", label: "100K–500K" },
    { value: "500K-1M", label: "500K–1M" },
    { value: "1M+", label: "1M+" },
  ]

  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "priceAsc", label: "Price: Low to High" },
    { value: "priceDesc", label: "Price: High to Low" },
    { value: "followers", label: "Follower Count" },
    { value: "engagement", label: "Engagement Rate" },
  ]

  const renderPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "youtube":
        return <Youtube className="h-4 w-4" />
      case "tiktok":
        return <Tiktok className="h-4 w-4" />
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-rose-500" />
            <Link href="/" className="text-xl font-bold">
              InfluConnect
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/influencers" className="text-sm font-medium transition-colors hover:text-primary">
              Influencers
            </Link>
            <Link
              href="/campaigns"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Brand Campaigns
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                Sign up
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Find the Perfect Influencers</h1>
              <p className="text-muted-foreground">Browse and connect with influencers that match your brand's needs</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Mobile Filters */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden mb-4">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="py-4 h-full overflow-auto">
                    {/* Filter Content - Mobile */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Filters</h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="mobile-search">Search</Label>
                            <div className="relative">
                              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="mobile-search"
                                placeholder="Search by name or username"
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                              />
                            </div>
                          </div>

                          <div>
                            <Label className="mb-2 block">Categories</Label>
                            <div className="space-y-2">
                              {categories.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`mobile-category-${category}`}
                                    checked={selectedCategories.includes(category)}
                                    onCheckedChange={() => handleCategoryChange(category)}
                                  />
                                  <label
                                    htmlFor={`mobile-category-${category}`}
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label className="mb-2 block">Platforms</Label>
                            <div className="space-y-2">
                              {platforms.map((platform) => (
                                <div key={platform} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`mobile-platform-${platform}`}
                                    checked={selectedPlatforms.includes(platform)}
                                    onCheckedChange={() => handlePlatformChange(platform)}
                                  />
                                  <label
                                    htmlFor={`mobile-platform-${platform}`}
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {platform}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="mobile-audience-size">Audience Size</Label>
                            <Select value={audienceSize} onValueChange={setAudienceSize}>
                              <SelectTrigger id="mobile-audience-size">
                                <SelectValue placeholder="Select audience size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="any">Any size</SelectItem>
                                {audienceSizes.map((size) => (
                                  <SelectItem key={size.value} value={size.value}>
                                    {size.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="mb-2 block">
                              Price Range (${priceRange[0]} - ${priceRange[1]})
                            </Label>
                            <Slider
                              min={0}
                              max={1000}
                              step={50}
                              value={priceRange}
                              onValueChange={setPriceRange}
                              className="py-4"
                            />
                          </div>

                          <div>
                            <Label className="mb-2 block">
                              Engagement Rate ({engagementRate[0]}% - {engagementRate[1]}%)
                            </Label>
                            <Slider
                              min={0}
                              max={10}
                              step={0.5}
                              value={engagementRate}
                              onValueChange={setEngagementRate}
                              className="py-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Desktop Filters */}
              <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-24 space-y-6 h-[80vh] overflow-auto">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Filters</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="search">Search</Label>
                        <div className="relative">
                          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="search"
                            placeholder="Search by name or username"
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">Categories</Label>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={`category-${category}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => handleCategoryChange(category)}
                              />
                              <label
                                htmlFor={`category-${category}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">Platforms</Label>
                        <div className="space-y-2">
                          {platforms.map((platform) => (
                            <div key={platform} className="flex items-center space-x-2">
                              <Checkbox
                                id={`platform-${platform}`}
                                checked={selectedPlatforms.includes(platform)}
                                onCheckedChange={() => handlePlatformChange(platform)}
                              />
                              <label
                                htmlFor={`platform-${platform}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {platform}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="audience-size">Audience Size</Label>
                        <Select value={audienceSize} onValueChange={setAudienceSize}>
                          <SelectTrigger id="audience-size">
                            <SelectValue placeholder="Select audience size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any size</SelectItem>
                            {audienceSizes.map((size) => (
                              <SelectItem key={size.value} value={size.value}>
                                {size.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="mb-2 block">
                          Price Range (${priceRange[0]} - ${priceRange[1]})
                        </Label>
                        <Slider
                          min={0}
                          max={1000}
                          step={50}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="py-4"
                        />
                      </div>

                      <div>
                        <Label className="mb-2 block">
                          Engagement Rate ({engagementRate[0]}% - {engagementRate[1]}%)
                        </Label>
                        <Slider
                          min={0}
                          max={10}
                          step={0.5}
                          value={engagementRate}
                          onValueChange={setEngagementRate}
                          className="py-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Influencer Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Showing {sortedInfluencers.length} influencers</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="sort-by" className="text-sm whitespace-nowrap">
                      Sort by:
                    </Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sort-by" className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedInfluencers.map((influencer) => (
                    <Dialog key={influencer.id}>
                      <DialogTrigger asChild>
                        <Card className="overflow-hidden transition-all hover:shadow-md cursor-pointer hover:-translate-y-1">
                          <CardContent className="p-0">
                            <div className="relative h-48 w-full">
                              <Image
                                src={influencer.profilePic || "/placeholder.svg"}
                                alt={influencer.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4 space-y-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold">{influencer.name}</h3>
                                  <p className="text-sm text-muted-foreground">{influencer.username}</p>
                                </div>
                                <div className="flex space-x-1">
                                  {influencer.platforms.map((platform) => (
                                    <div key={platform.name} className="p-1 rounded-full bg-muted">
                                      {renderPlatformIcon(platform.name)}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex justify-between text-sm">
                                <div>
                                  <p className="font-medium">
                                    {influencer.platforms
                                      .reduce((sum, platform) => sum + platform.followers, 0)
                                      .toLocaleString()}{" "}
                                    Followers
                                  </p>
                                </div>
                                <div>
                                  <p className="font-medium">{influencer.engagementRate}% Engagement</p>
                                </div>
                              </div>

                              <div className="text-sm">
                                <p>{influencer.location}</p>
                              </div>

                              <div className="flex flex-wrap gap-1">
                                {influencer.categories.map((category) => (
                                  <Badge key={category} variant="secondary" className="text-xs">
                                    {category}
                                  </Badge>
                                ))}
                              </div>

                              <div className="pt-2 border-t">
                                <p className="font-medium text-rose-500">Starting at ${influencer.startingPrice}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <InfluencerProfile influencer={influencer} />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>

                {sortedInfluencers.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-muted p-3 mb-4">
                      <Search className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium">No influencers found</h3>
                    <p className="text-muted-foreground mt-1">Try adjusting your filters to find more influencers</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} InfluConnect. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
