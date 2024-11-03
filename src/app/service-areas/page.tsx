import Link from 'next/link'

export default function Page() {
  const serviceAreas = [
    "Arlington Heights, IL",
    "Barrington, IL",
    "Buffalo Grove, IL",
    "Chicago, IL",
    "Des Plaines, IL",
    "Downers Grove, IL",
    "Elmhurst, IL",
    "Evanston, IL",
    "Glenview, IL",
    "Highland Park, IL",
    "Hoffman Estates, IL",
    "Lombard, IL",
    "Mount Prospect, IL",
    "Naperville, IL",
    "Niles, IL",
    "Northbrook, IL",
    "Oak Park, IL",
    "Palatine, IL",
    "Park Ridge, IL",
    "Schaumburg, IL",
    "Skokie, IL"
  ]

  return (
    <div className="min-h-screen bg-base-100">
      <header className="bg-primary text-primary-content py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Service Areas</h1>
          <p className="mt-2">Servicing the entire Chicagoland area since 1956</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Service Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-base-200 p-4 rounded-lg shadow">
                <p className="text-center">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="bg-secondary text-secondary-content rounded-lg p-6 inline-block">
            <h2 className="text-2xl font-semibold mb-4">Ready to Schedule a Visit?</h2>
            <p className="mb-4">
              Contact us today to schedule a visit and be sure to check out our promotions!
            </p>
            <div className="space-x-4">
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/promotions" className="btn btn-primary">
                View promotions
              </Link>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}