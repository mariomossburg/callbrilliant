import Image from 'next/image'
import Link from 'next/link'
import Header from '../_components/header'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header 
      title='Our Electrical Services'
      text='Licensed & experienced electricians in Chicago, IL'
      />

      <div className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Electrical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Electrical wiring and rewiring",
              "Electrical panel installation",
              "GFCI & AFCI outlets",
              "Home automation systems",
              "Indoor & Outdoor lighting",
            //   "Outdoor lighting",
              "Carbon monoxide detectors",
              "Smoke detectors",
              "Surge protection",
              "Home electric car charger installation",
            ].map((service, index) => (
              <div key={index}  
            className="bg-base-200 shadow rounded-lg p-4 opacity-0 transform transition-opacity duration-500 ease-in-out delay-100"
            style={{
              animation: `fadeIn 0.5s forwards ${index * 0.1}s`, // Adds staggered delay
            }}
          >
                <h3 className="font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {service}
                </h3>
              </div>
            ))}
          </div>
          <div className='mt-8'>
          {/* <div className='mt-6 text-center'> */}
          <button className="btn-primary btn md:btn-md lg:btn-lg lg:btn-wide">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <Link href="/contact-us">
              Contact Us Today
            </Link>
          </button>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-base-200 shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Why Choose Brilliant Home Services?</h2>
            <p className="text-base-content mb-4">Experience unparalleled electrical services from top-notch electricians</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>100% satisfaction guarantee on every job</li>
              <li>Expert team with industry-leading expertise</li>
              <li>Trusted choice for homeowners in the area</li>
              <li>Comprehensive electrical system solutions</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="bg-base-200 shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Installation & Replacement
              </h3>
              <p>Get the best electrical installation for your new home or replace outdated systems with our qualified electricians in Chicago, IL. We ensure precision and attention to detail in every aspect of your electrical design and installation.</p>
            </div>
            <div className="bg-base-200 shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Maintenance & Repairs
              </h3>
              <p>Guarantee a safe and reliable electrical supply with our routine maintenance and inspection services. Don't ignore warning signs like tripped breakers or flickering lights - call us for prompt electrical repairs and peace of mind!</p>
            </div>
          </div>
        </section>

        <section className="mb-10 shadow-lg">
          <div className="bg-base-200 shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Why Hire a Professional Electrician?</h2>
            <p>Maximize safety and satisfaction at your property with our top-rated Chicago electricians. Our experienced technicians use the latest tools and follow stringent codes to protect you from electrical dangers. Trust us to handle all your electrical needs with expertise and efficiency.</p>
          </div>
        </section>

        <section>
          <div className="bg-secondary text-secondary-content rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="https://www.eaton.com/us/en-us/products/residential/my-home.html?utm_source=redirect&utm_medium=direct&utm_campaign=redirect" className="hover:underline">
                Eaton Certified Electrical Contractor
              </Link>
            </h2>
            <p>Experience exceptional electrical services with our Eaton certified team. We deliver reliable and trustworthy solutions, backed by our certifications from Eaton.</p>
            <button className="mt-4 btn btn-primary sm:btn-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <Link href={"/contact-us"}>
              Schedule an Appointment
              </Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
