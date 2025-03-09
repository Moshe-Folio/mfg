import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building2, Calendar, FileText, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">MFG Hub</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Manufacturing Ecosystem Hub
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Discover and track key players in the manufacturing ecosystem. Enhance your go-to-market strategies with our centralized hub.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-4 lg:p-8">
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
                  <Calendar className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-bold">Tradeshows</h3>
                  <p className="text-center text-sm text-gray-500">
                    Find relevant tradeshows for your industry
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
                  <FileText className="h-8 w-8 text-green-500" />
                  <h3 className="text-lg font-bold">Publications</h3>
                  <p className="text-center text-sm text-gray-500">
                    Discover industry publications and journals
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
                  <Users className="h-8 w-8 text-purple-500" />
                  <h3 className="text-lg font-bold">Communities</h3>
                  <p className="text-center text-sm text-gray-500">
                    Connect with manufacturing communities
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
                  <Building2 className="h-8 w-8 text-orange-500" />
                  <h3 className="text-lg font-bold">Organizations</h3>
                  <p className="text-center text-sm text-gray-500">
                    Track key organizations in the ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything You Need
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides all the tools you need to discover and track key players in the manufacturing ecosystem.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Comprehensive Database</h3>
              <p className="text-center text-sm text-gray-500">
                Access our extensive database of tradeshows, publications, communities, and organizations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Tracking System</h3>
              <p className="text-center text-sm text-gray-500">
                Track and organize your favorite entities for easy reference and follow-up.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Insights & Analytics</h3>
              <p className="text-center text-sm text-gray-500">
                Gain valuable insights into the manufacturing ecosystem to enhance your strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-100">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
              © 2023 MFG Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
