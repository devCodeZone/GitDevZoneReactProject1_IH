import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70 z-10" />
      <div className="relative h-[500px] md:h-[600px]">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Modern interior design"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Transform Your Space with Inviting Homes
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional interior design solutions that bring your vision to life with our innovative 3D visualization
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

