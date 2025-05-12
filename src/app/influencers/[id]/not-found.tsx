import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, UserX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-gray-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <UserX className="h-12 w-12 text-gray-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Influencer Not Found</h1>
        <p className="text-gray-600 mb-6">
          We couldn't find the influencer you're looking for. They may have been removed or the URL might be incorrect.
        </p>
        <Link href="/influencers">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Influencers
          </Button>
        </Link>
      </div>
    </div>
  )
}
