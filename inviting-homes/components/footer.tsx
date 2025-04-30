import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Inviting Homes</h3>
            <p className="mb-4">Transforming houses into dream homes with innovative interior design solutions.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-blue-300 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span>123 Design Street, Creative City</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-300" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-300" />
                <span>info@invitinghomes.com</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Inviting Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

