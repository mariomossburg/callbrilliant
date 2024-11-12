import Card from './card'
import { services } from "../../lib/services";

export default function CardGrid() {

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
