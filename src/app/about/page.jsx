'use client';

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Globe, MessageSquare, ShoppingBag, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
    {/* Company Description */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our influencer marketplace connects content creators with brands seeking authentic partnerships. We
                provide a streamlined platform where influencers can discover marketing campaigns, showcase their unique
                talents, and collaborate with brands that align with their values and audience. Brands can find the
                perfect creators to amplify their message and reach targeted audiences effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="w-full py-12 bg-slate-100 rounded-lg p-8">
        <div className="container px-4 md:px-6">
          
              <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-3xl md:text-4xl">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src="https://yashmadhani.me/images/yash_madhani.jpg"
                width={300}
                height={300}
                alt="Yash Madhani"
                className="rounded-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">Yash Madhani</h3>
              <p className="text-muted-foreground mb-4">
                Yash Madhani founded this platform with a vision to revolutionize how influencers and brands collaborate
                in the digital marketing space. With extensive experience in both content creation and brand marketing,
                Yash identified the need for a transparent, efficient marketplace that benefits both creators and
                companies.
              </p>
              <Link href="https://yashmadhani.me/">
                <Button className="">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
