import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Inviting Homes transformed our living room beyond our expectations. The 3D preview tool helped us visualize exactly what we wanted before any work began.",
      author: "Sarah Johnson",
      role: "Homeowner",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "Working with the Inviting Homes team was a pleasure from start to finish. Their attention to detail and creative solutions made our renovation stress-free.",
      author: "Michael Chen",
      role: "Apartment Owner",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The designers at Inviting Homes have an incredible eye for color and space. They made our small apartment feel twice as large with their smart design choices.",
      author: "Emma Rodriguez",
      role: "Condo Owner",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            Inviting Homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-blue-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

