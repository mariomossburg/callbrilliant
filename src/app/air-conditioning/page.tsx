import Image from 'next/image'
import Link from 'next/link'
import Header from '../_components/header'

export default function AirConditioningPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header 
        title='Air Conditioning Services'
        text='Expert cooling solutions for Chicago homes since 1959'
      />

      <main className="container mx-auto px-4 py-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Beat the Chicago Heat</h2>
          <p className="mb-4">
            Summers in the Chicago area can get hot, with some extreme days reaching into the 90s. But even average summer temperatures are warm enough that you'll need your home's air conditioning system running to make everyone in your household feel comfortable. A broken AC, or one that simply can't live up to your demands for cooling, can mean a miserable few months.
          </p>
          <p className="mb-4">
            To make sure that you never have to go through an unpleasant summer in Chicago, call on professionals to fix your air conditioning system or put in a new one that will get the job done.
          </p>
          <p className="mb-4">
            If you're looking for experience and skill in a Chicago air conditioning contractor, call Brilliant Home Services. We've served homes in the area with high quality air conditioning services since 1959. We offer same-day, on-time service and upfront pricing: it's the kind of reliability you want when it comes to providing your home with comfort. Call us any time of the day or night.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Finding the Right Air Conditioner Installation</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="mb-4">
              If you're currently in the market for a new cooling system—either a replacement or the first AC for a new house—you need to make sure that you choose the air conditioner carefully. There are numerous factors involved in correctly matching an AC with a home, and a wrong choice will mean poor comfort, massive energy waste, and the need to replace the system before its time.
            </p>
            <p className="mb-4">
              This is why you must always work with licensed HVAC technicians for an air conditioner replacement or installation. The professionals will be able to determine the cooling output necessary to match the comfort needs of the house, and then locate an air conditioner that meets these requirements. They'll then see that the new system is put in place fast and will work just the way it should for many years to come.
            </p>
            <p className="mb-4">
              Never trust this work to an amateur quoting a suspiciously low price. You'll save money and time when you go straight to a professional.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Air Conditioning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-base-200 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Installation and Replacement</h3>
              <p>
                We offer expert installation and replacement services for all types of air conditioning systems. Our team will help you choose the right AC for your home, ensuring optimal cooling performance and energy efficiency.
              </p>
            </div>
            <div className="bg-base-200 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Repairs and Maintenance</h3>
              <p>
                No matter how well an central air conditioner was installed in the first place, it may eventually need to have repair work done to get it back into shape. We offer 24/7 emergency response because we know how vital AC service is when the heat is intense.
              </p>
              <p className="mt-4">
                Also make sure that you arrange for annual maintenance for your air conditioner. This service should be done each spring. Once our technicians are finished inspecting and tuning–up your AC, it should run with few problems over the summer and keep your cooling bills low.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Brilliant Home Services?</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Serving Chicago since 1959</li>
              <li>Same-day, on-time service</li>
              <li>Upfront pricing</li>
              <li>24/7 emergency response</li>
              <li>Expertly trained staff</li>
              <li>High-quality air conditioning work for all jobs</li>
              <li>Comprehensive understanding of family comfort needs</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="bg-secondary text-secondary-content rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Ready to Cool Your Home?</h2>
            <p className="mb-4">
              Place us at the top of your list when it comes to AC services in Chicago, IL and the surrounding areas, and we promise we won't let you down! Contact us today to discuss your air conditioning needs.
            </p>
            <Link href="/contact-us" className="btn btn-primary">
              Schedule a Service
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}