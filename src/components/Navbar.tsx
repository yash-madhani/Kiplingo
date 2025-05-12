'use client';

import React from 'react'
import { TrendingUp } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div>
        {/* Navbar */}
              <header className="sticky top-0 z-40 w-full border-b bg-background">
                <div className="container flex h-16 items-center justify-between">
                  <div className="flex items-center gap-2">
                    
                    <Link href="/" className="text-xl font-bold flex gap-1">
                      <TrendingUp className="h-6 w-6 text-rose-500" />
                      Kiplingo
                    </Link>
                  </div>
        
                  <nav className="hidden md:flex items-center gap-6">
                    <Link
                      href="/"
                      className="text-sm font-medium transition-colors hover:text-red-700"
                    >
                      Home
                    </Link>
                    <Link
                      href="/influencers"
                      className="text-sm font-medium transition-colors hover:text-red-700"
                    >
                      Influencers
                    </Link>
                    <Link
                      href="/campaigns"
                      className="text-sm font-medium transition-colors hover:text-red-700"
                    >
                      Brand Campaigns
                    </Link>
                    <Link
                      href="/about"
                      className="text-sm font-medium transition-colors hover:text-red-700"
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
                    <Link href="/sign-up">
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
    </div>
  )
}

export default Navbar