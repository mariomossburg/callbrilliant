import Card from './card'

export default function ResponsiveCardGrid() {
  const services = [
    {
      imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      imageAlt: "electrical",
      title: "Electrical",
      description: "Building dreams, one project at a time.",
      badgeText: "NEW",
      linkHref: "/electrician",
      buttonText: "Our Services"
    },
    {
      imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      imageAlt: "Generators",
      title: "Generators",
      description: "Powering your world with expertise.",
      badgeText: "POPULAR",
      linkHref: "/generator-systems-and-service",
      buttonText: "Explore"
    },
    {
      imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      imageAlt: "Heating",
      title: "Heating",
      description: "Keeping your pipes flowing smoothly.",
      linkHref: "/heating",
      buttonText: "Discover"
    },
    {
      imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      imageAlt: "Construction",
      title: "Construction",
      description: "Comfort in every season.",
      badgeText: "Fast",
      linkHref: "/construction",
      buttonText: "Get Started"
    },
    {
      imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      imageAlt: "Air Conditioning",
      title: "Air Conditioning",
      description: "Transforming spaces, renewing life.",
      linkHref: "/air-conditioning",
      buttonText: "See Projects"
    },
    {
      imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      imageAlt: "Indoor Air Quality",
      title: "EV Charging",
      description: "Keeping your property in top shape.",
      badgeText: "24/7",
      linkHref: "/maintenance",
      buttonText: "Schedule"
    },
  ]

  return (
    <main className="min-h-screen bg-base-100">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary my-6">Our Services</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 animate-fadeInTwo"></div>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] flex">
              <Card
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                title={service.title}
                description={service.description}
                badgeText={service.badgeText}
                linkHref={service.linkHref}
                buttonText={service.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
