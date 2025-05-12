import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover image skeleton */}
      <div className="h-48 sm:h-64 w-full bg-gray-200 animate-pulse" />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 -mt-20">
        <div className="flex justify-between mb-4">
          <Link href="/influencers">
            <Button variant="outline" size="sm" className="bg-white shadow-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Influencers
            </Button>
          </Link>
        </div>

        {/* Profile header skeleton */}
        <Card className="shadow-lg border-0 overflow-hidden mb-6">
          <CardHeader className="pt-6 pb-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Skeleton className="w-28 h-28 rounded-full" />
              <div className="text-center sm:text-left flex-1">
                <Skeleton className="h-8 w-48 mx-auto sm:mx-0 mb-2" />
                <Skeleton className="h-4 w-32 mx-auto sm:mx-0 mb-1" />
                <Skeleton className="h-4 w-24 mx-auto sm:mx-0" />
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Content skeleton */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32 mb-2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32 mb-2" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32 mb-2" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
