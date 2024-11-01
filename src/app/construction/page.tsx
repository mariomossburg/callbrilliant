import Image from 'next/image'
import Link from 'next/link'
import Header from '../_components/header'


export default function Page() {
  const recentWork = [
    {
      image: "/placeholder.svg?height=400&width=600",
      address: "101 Devonshire Rd, Tower Lakes, IL 60010",
      description: "FULLY RENOVATED HOME IN TOWER LAKES"
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      address: "1 Le Moyne Pkwy,Oak Park, IL 60302",
      description: "FULLY RENOVATED HOME IN OAK PARK"
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      address: "3015 N Olcott Ave,Chicago, IL 60707",
      description: "NEW CONSTRUCTION, CUSTOM BUILT SINGLE FAMILY HOME WITH OPEN CONCEPT FLOOR PLAN"
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      address: "1249 MARION, CHICAGO",
      description: "NEW CONSTRUCTION, SINGLE FAMILY IN WICKER PARK, 5 MONTHS TOTAL FROM GROUND BREAKING TO CLOSING"
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      address: "3633 N RAVENSWOOD, CHICAGO",
      description: "COMPLETE GUT & RENOVATION OF 2 FLAT IN LAKEVIEW"
    },
    // ... Add more projects here
  ]

  const photo = '/assets/construction/construction-one.png'

  return (
    <div className="min-h-screen bg-base-100">
      <Header 
      title='Construction & Renovation Services'
      text='High-quality construction services in Barrington, IL and surrounding Chicagoland areas'
      />

      <main className="container mx-auto px-4 py-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Construction Services</h2>
          <p className="mb-4">
            In addition to our electrical and HVAC expertise, we offer high quality construction & renovation services to the Barrington IL and surrounding Chicagoland areas. We offer services ranging from the small and simple to big and complex. This may include simple drywall repair to complete home remodels done by a team of licensed professionals.
          </p>
          <p className="mb-4">
            If you are in the market for trustworthy and reliable professionals to help you with your home renovation project, give us a call at <a href="tel:8475882533" className="text-primary hover:underline">(847) 588-2533</a>.
          </p>
        </section>


        <section className="mb-12 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Our Recent Work</h2>
          <div className="carousel w-full">
            {recentWork.map((project, index) => (
              <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                <Image src={photo} alt={project.description} width={600} height={400} className="w-full" />
                {/* <Image src={project.image} alt={project.description} width={600} height={400} className="w-full" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? recentWork.length - 1 : index - 1}`} className="btn btn-circle">❮</a> 
                  <a href={`#slide${index === recentWork.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="font-bold">{project.address}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Construction Needs?</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Experienced team of licensed professionals</li>
              <li>Wide range of services from small repairs to complete home remodels</li>
              <li>High-quality workmanship and attention to detail</li>
              <li>Trusted by homeowners in the Chicagoland area</li>
              <li>Comprehensive project management from start to finish</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="bg-secondary text-secondary-content rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Ready to Start Your Project?</h2>
            <p className="mb-4">Contact us today to discuss your construction or renovation needs. We're here to bring your vision to life!</p>
            <Link href="/contact-us" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}