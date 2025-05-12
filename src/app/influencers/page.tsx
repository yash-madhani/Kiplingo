"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { MapPin, Users, AlertCircle } from "lucide-react"

// Type for influencer data
type Influencer = {
  id: string
  name: string
  profile_picture: string
  niche: string
  follower_count: number
  location: string
}

export default function InfluencerList() {
  const [influencers, setInfluencers] = useState<Influencer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        setIsLoading(true)
        const { data, error } = await supabase.from("influencers").select("*")

        if (error) throw new Error(error.message)
        if (data) setInfluencers(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load influencers")
      } finally {
        setIsLoading(false)
      }
    }

    fetchInfluencers()
  }, [])

  // Format follower count (e.g., 10000 -> 10K)
  const formatFollowerCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  // Get color for niche badge
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
    <div className="container py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top Influencers</h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Connect with the most engaging content creators in your niche
        </p>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error loading influencers</h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? // Loading skeletons
            Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="overflow-hidden border border-gray-200">
                <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                  <Skeleton className="h-24 w-24 rounded-full" />
                  <Skeleton className="h-6 w-32 mt-4" />
                </CardHeader>
                <CardContent className="text-center p-6">
                  <Skeleton className="h-4 w-20 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto mb-2" />
                  <Skeleton className="h-4 w-28 mx-auto" />
                </CardContent>
              </Card>
            ))
          : influencers.map((influencer) => (
              <Link href={`/influencers/${influencer.id}`} key={influencer.id} className="group">
                <Card className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 h-full flex flex-col">
                  <CardHeader className="flex flex-col items-center text-center p-6 pb-4">
                    <div className="relative">
                      <Avatar className="w-24 h-24 border-2 border-white shadow-sm group-hover:shadow-md transition-all">
                        <AvatarImage src={influencer.profile_picture || "/placeholder.svg"} alt={influencer.name} />
                        <AvatarFallback className="text-lg bg-gradient-to-br from-rose-400 to-orange-300 text-white">
                          {influencer.name?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-sm p-1">
                        <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs font-medium">
                          <Users className="h-3 w-3 mr-1" />
                          {formatFollowerCount(influencer.follower_count)}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl mt-4 group-hover:text-rose-600 transition-colors">
                      {influencer.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-4 pt-0 flex-grow">
                    <Badge className={`mb-2 ${getNicheColor(influencer.niche)}`} variant="outline">
                      {influencer.niche}
                    </Badge>
                  </CardContent>
                  <CardFooter className="px-6 py-3 bg-gray-50 flex items-center justify-center text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                    {influencer.location}
                  </CardFooter>
                </Card>
              </Link>
            ))}
      </div>

      {!isLoading && influencers.length === 0 && !error && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No influencers found. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
