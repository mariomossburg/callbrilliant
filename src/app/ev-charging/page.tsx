// export default function Page(){
//     return(
//         <div>page is live</div>
//     )
// }

import Image from 'next/image'
import Link from 'next/link'
import Header from '../_components/header'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header
      title='EV Charging Solutions'
      text='Leading the charge in electric vehicle infrastructure'
      />

      <main className="container mx-auto px-4 py-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Powering the Future of Transportation</h2>
          <p className="mb-4">
            Electric vehicles are becoming more and more popular, but many people don't know what it takes to charge them. Brilliant Home Services offers everything that's needed to get your business or home electrified and prepared for the future.
          </p>
          <p className="mb-4">
            We are your licensed electrical contractor for handling the complete installation of your EV charging station for your new electrical vehicle from start to finish. We are experienced, well established and enthusiastic to be part of the clean vehicle wave.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our EV Charging Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-base-200 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Home Installations</h3>
              <p>
                Owning an Electric Vehicle is hard to do without having a charging station. Let us provide you with turnkey EV charging solutions for your home! We work with you to implement your own needs and ensure you can charge your vehicle conveniently and efficiently.
              </p>
            </div>
            <div className="bg-base-200 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Business Solutions</h3>
              <p>
                Whether you're electrifying your business EV fleet or providing charging stations for your customers, we have the expertise to help. We offer comprehensive solutions for businesses of all sizes, ensuring you're ready for the electric future.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Visit your location and analyze the conditions</li>
              <li>Go over options and provide a total cost up front</li>
              <li>Work with your municipality to handle all permitting issues</li>
              <li>Install your charging station with expert precision</li>
              <li>Provide warranty for our work</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="mb-4">
              Brilliant Home Services has been at the forefront of EV charging station installation. We provide cost effective electric vehicle charger installation and servicing. We have the capability to install all categories of chargers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Level 1 charging station</li>
              <li>Level 2 charger</li>
              <li>Level 3 DC fast charger</li>
              <li>Tesla wall charger and supercharger</li>
            </ul>
            <p className="mt-4">
              Our EV charger experts stay up to date on technical developments and the changing regulatory environment and have the experience and depth to help you conceptualize, design and execute an electric vehicle charging station plan that meets your goals.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="mb-4">
              Whatever your charging needs are, we got your back! We also offer:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assessments</li>
              <li>Site designs & engineering services</li>
              <li>Ongoing maintenance agreements</li>
            </ul>
            <p className="mt-4">
              These services ensure that you can stay connected at all times without hassle.
            </p>
          </div>
        </section>

        <section>
          <div className="bg-secondary text-secondary-content rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Ready to Charge Ahead?</h2>
            <p className="mb-4">
              You've made a major investment in your new electric vehicle, feel confident knowing it will have reliable power every charge. Contact us today to discuss your EV charging needs!
            </p>
            <Link href="mailto:EVCharging@callbrilliant.com" className="btn btn-primary">
              Email Us: EVCharging@callbrilliant.com
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}