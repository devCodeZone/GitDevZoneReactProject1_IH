import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RoomViewer } from "@/components/room-viewer"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Visualize Your Dream Space in 3D</h2>
          <div className="bg-white rounded-lg shadow-lg p-4 mb-12">
            <RoomViewer />
          </div>
        </div>
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

