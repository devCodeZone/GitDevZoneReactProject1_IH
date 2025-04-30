import { Palette, Home, Ruler, ShoppingBag, Clock, HeartHandshake } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Palette className="h-10 w-10 text-blue-600" />,
      title: "Custom Design",
      description: "Personalized interior design solutions tailored to your style, needs, and budget.",
    },
    {
      icon: <Home className="h-10 w-10 text-blue-600" />,
      title: "3D Visualization",
      description: "See your space come to life before any work begins with our advanced 3D rendering technology.",
    },
    {
      icon: <Ruler className="h-10 w-10 text-blue-600" />,
      title: "Space Planning",
      description: "Optimize your floor plan for functionality, flow, and aesthetic appeal.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-blue-600" />,
      title: "Furniture Selection",
      description: "Expert guidance on selecting the perfect furniture pieces for your space.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Timely Execution",
      description: "Efficient project management to ensure your design is completed on schedule.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-blue-600" />,
      title: "Client Satisfaction",
      description: "We work closely with you throughout the process to ensure your complete satisfaction.",
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Inviting Homes can transform your living spaces with our comprehensive design services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

