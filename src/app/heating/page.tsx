import Image from 'next/image'
import Link from 'next/link'
import Header from '../_components/header'

export default function HeatingPage() {
  return (
    <div className="min-h-screen bg-base-100">

      <Header
      title='Heating Services'
      text='Expert heating solutions for Chicago homes'
      />

      <main className="container mx-auto px-4 py-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Choosing Your Heating System</h2>
          <p className="mb-4">
            When you are choosing a new heating system, you are going to have to take the time necessary for choosing your system with care. You don't want to miss out on a great system that would suit your needs perfectly, just because you weren't aware of the benefits that it has to offer.
          </p>
          <p className="mb-4">
            There are a whole lot of available systems out there, including boilers, ductless systems, furnaces, and heat pumps. We install and service them all, including Mitsubishi ductless mini splits.
          </p>
          <p className="mb-4">
            If you want to get the very best performance possible from your Chicago home heating system, no matter what make or model of system you may use, then ours is certainly the number to dial. Just give us a call today, and we'll get you started on a path toward a very warm and cozy winter. Working with Brilliant Home Services means being able to heat your home in an effective, efficient, and reliable manner.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Which Heating System Is Right for Me in Chicago?</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="mb-4">
              As mentioned above, there are a whole lot of heaters to choose from. Working with a skilled professional not only ensures that you'll choose your type of system well, but also that your system will be of the right size for your needs, and that it is integrated into your home successfully.
            </p>
            <p className="mb-4">
              Whether you want to stick with a classic heater, such as a furnace or a boiler, or the efficiency of systems like heat pumps and ductless mini splits are just too good to pass up, we've got what you need. With our heating contractors on your side, you won't have to worry about suffering through our legendary winter seasons in discomfort.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Heating Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-base-200 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Installation and Replacement</h3>
              <p>
                We offer full heating installation and replacement services. If your heater is not of the right size for handling your heating demand, you are not going to be able to heat your home in as even and effective a manner as possible. You'll also probably wind up paying more money for a lesser performance from your heater.
              </p>
              <p className="mt-4">
                Schedule your heating installation or replacement with a member of our team, and you can count on your heater functioning precisely as it ought to, well within the necessary parameters for heating your home effectively and safely.
              </p>
            </div>
            <div className="bg-base-200 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Maintenance and Repairs</h3>
              <p>
                When you schedule routine heating maintenance, you are taking the first step toward keeping your heater in the best working condition possible. Even with routine heating maintenance, though, there is a very good chance that you are going to eventually require professional heating repairs in Chicago, IL.
              </p>
              <p className="mt-4">
                If your heater is making alarming sounds, blowing cool air, or short cycling frequently, give us a call so that we can complete any repairs that it may need to be put back on track.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Heating Needs?</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Expert installation and replacement services</li>
              <li>Comprehensive maintenance to prevent costly repairs</li>
              <li>Quick and efficient repair services</li>
              <li>Wide range of heating systems available</li>
              <li>Experienced professionals familiar with Chicago's climate</li>
              <li>Commitment to energy efficiency and cost-effectiveness</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="bg-secondary text-secondary-content rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Ready to Improve Your Home's Heating?</h2>
            <p className="mb-4">Contact us today to discuss your heating needs. We're here to ensure you stay warm and comfortable all winter long!</p>
            <Link href="/contact-us" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}