import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Instagram,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {

  const imageSources = [
    "/images/homepage/Brand 1.jpg",
    "/images/homepage/Brand 2.jpg",
    "/images/homepage/Brand 3.jpg",
    "/images/homepage/Brand 4.png",
    "/images/homepage/Brand 5.png",
    "/images/homepage/Brand 6.png",
  ];

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 lg:py-16 xl:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect Brands with Perfect Influencers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The ultimate marketplace where brands find authentic voices
                    and influencers discover exciting campaigns.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button size="lg" variant="outline">
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <video
                  src="/images/homepage-hero.mp4"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trusted by Thousands
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join our growing community of brands and influencers creating
                  authentic connections.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Active Influencers
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
                <div className="text-3xl font-bold">5K+</div>
                <div className="text-sm text-muted-foreground">
                  Brand Partners
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
                <div className="text-3xl font-bold">20M+</div>
                <div className="text-sm text-muted-foreground">
                  Audience Reach
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-sm text-muted-foreground">
                  Campaigns Completed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Kiplingo?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We make influencer marketing simple, transparent, and
                  effective.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <Search className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Smart Matching</h3>
                <p className="text-center text-muted-foreground">
                  Our AI-powered algorithm connects brands with the perfect
                  influencers for their target audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <CheckCircle className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Verified Profiles</h3>
                <p className="text-center text-muted-foreground">
                  All influencers are verified to ensure authentic engagement
                  and reliable partnerships.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <Star className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Transparent Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Real-time campaign performance metrics to measure ROI and
                  optimize your marketing strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Simple steps to successful influencer marketing campaigns.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-center text-muted-foreground">
                  Sign up as a brand or influencer and create your detailed
                  profile.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Connect & Collaborate</h3>
                <p className="text-center text-muted-foreground">
                  Brands create campaigns, influencers apply or get matched
                  automatically.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Measure & Grow</h3>
                <p className="text-center text-muted-foreground">
                  Track campaign performance and build long-term partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear from our satisfied brands and influencers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                  </div>
                  <p className="text-muted-foreground">
                    "Kiplingo helped us find the perfect influencers for our
                    product launch. The ROI was incredible, and we've built
                    lasting relationships with creators who truly understand our
                    brand."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted">
                    <Image
                      src="/images/SarahJohson.jpeg"
                      width={40}
                      height={40}
                      alt="Sarah Johnson"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Marketing Director, BeautyBrand
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                  </div>
                  <p className="text-muted-foreground">
                    "As an influencer, Kiplingo has connected me with brands
                    that align with my values. The platform is easy to use, and
                    I've been able to grow my business significantly."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted">
                    <Image
                      src="/images/alexRivera.jpeg"
                      width={40}
                      height={40}
                      alt="Alex Rivera"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Alex Rivera</p>
                    <p className="text-sm text-muted-foreground">
                      Lifestyle Influencer, 500K followers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Brands & Influencers */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Community
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join these amazing brands and influencers on our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 md:grid-cols-3 lg:grid-cols-6">
            {imageSources.map((src, index) => (
  <div key={index} className="flex items-center justify-center p-4">
    <Image
      src={src}
      width={80}
      height={80}
      alt={`Brand logo ${index + 1}`}
      className="grayscale transition-all hover:grayscale-0"
    />
  </div>
))}
            </div>
            <div className="flex justify-center">
              <Link href="/influencers">
                <Button size="lg" variant="outline" className="mt-4">
                  <Users className="mr-2 h-4 w-4" />
                  Browse All Influencers
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-rose-800 sm:text-4xl md:text-5xl">
                  Ready to Transform Your Marketing?
                </h2>
                <p className="max-w-[900px] text-rose-700 md:text-xl">
                  Join thousands of brands and influencers creating authentic
                  connections and driving results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    Sign Up Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
