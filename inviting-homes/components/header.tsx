"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Inviting Homes
          </Link>

          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          ) : (
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link href="#services" className="hover:text-blue-200 transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="hover:text-blue-200 transition-colors">
                Portfolio
              </Link>
              <Link href="#about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
              <Link href="#contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </nav>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <nav className="flex flex-col gap-4 mt-4 pb-4">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="hover:text-blue-200 transition-colors">
              Portfolio
            </Link>
            <Link href="#about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

