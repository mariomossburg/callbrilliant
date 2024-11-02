import Image from 'next/image'
import Link from 'next/link'
import Header from '../_components/header'

export default function GeneratorSystemsPage() {
  return (
    <div className="min-h-screen bg-base-100">

      <Header 
        title='Generator Systems and Service'
        text='Reliable power solutions for Chicago homes'
      />

      <main className="container mx-auto px-4 py-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Importance of Whole-House Generators</h2>
          <p className="mb-4">
            As an adult, you likely view power outages quite differently from when you were a child: as the annoyances that they are. In some instances, power outages are more than annoying. They can be incredibly inconvenient, and may even lead to dangerous situations in certain cases.
          </p>
          <p className="mb-4">
            If you want to keep your entire home up and running, even when the power does go out, just give us a call to inquire about the installation of a whole-house generator or automatic standby generator in Chicago, IL. Using a whole-house generator is a great way in which to stop your day from grinding to a halt just because the power has gone out.
          </p>
          <p className="mb-4">
            At Brilliant Home Services, we specialize in the installation of Cummins generators, ensuring you receive a reliable and efficient solution for your power needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Invest in a Whole-House Generator?</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="mb-4">
              With our snowy winter seasons and frequently strong winds, a power outage is a very real possibility in the Chicago area. While portable generators may be fine for keeping a few electronics running by plugging them directly into the system, this is not exactly an ideal way in which to keep your whole house up and running.
            </p>
            <p className="mb-4">
              By investing in a whole-house generator, which is wired right into your electrical system, you can keep your entire home powered. You won't have to worry about picking and choosing the systems that you run off the generator, nor will you have to plug everything in manually.
            </p>
            <p className="mb-4">
              With an automatic transfer switch, you won't even have to be around in order to start up your whole-house generator in Chicago, IL on your own!
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Generator Installation</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="mb-4">
              A whole-house generator must be wired directly into a home's electrical system. This alone is a compelling reason to ensure that your generator installation is handled professionally. However, there's more to consider than just the installation process.
            </p>
            <p className="mb-4">
              You need to be confident that your generator can meet your energy demands, that it uses fuel suitable for your area and preferences, and most importantly, that it comes from a reputable manufacturer. We exclusively install Cummins generators, a brand known for its reliability and performance. Our team ensures that your Cummins generator system is perfectly tailored to your needs.
            </p>
            <p className="mb-4">
              In addition to specializing in Cummins generator installations, we at Brilliant Home Services are equipped to service and repair all brands and models of generators. Our technicians are trained and knowledgeable in a wide range of generator systems, ensuring that no matter what type of generator you have, we can keep it running smoothly.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">When to Call for Generator Repairs</h2>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="mb-4">
              You really don't want to wait for a scenario in which you'll need your generator in order to realize that you are in need of generator repairs. Of course, this is a system that you won't really be using, hopefully, on a regular basis, so operational problems may not be immediately noticeable.
            </p>
            <p className="mb-4">
              Keep in mind how important scheduling routine generator maintenance is, as this can help you to diagnose problems early on. Also, remember that your generator should run self-tests in predetermined intervals. If problems are detected, be sure to schedule generator repairs with us as soon as possible.
            </p>
            <p className="mb-4">
              Our experienced team is ready to service any brand or model, ensuring your generator is always ready when you need it.
            </p>
          </div>
        </section>

        <section>
          <div className="bg-secondary text-secondary-content rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Ready to Secure Your Home's Power?</h2>
            <p className="mb-4">
              Don't let power outages disrupt your life. Contact Brilliant Home Services today to discuss your generator needs and ensure your home stays powered, no matter what.
            </p>
            <Link href="/contact-us" className="btn btn-primary">
              Get a Generator Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}