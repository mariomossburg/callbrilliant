import Header from '@/app/_components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function FlickeringLightsArticlePage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header 
      title={'Are Your Lights Flickering?'} 
      text={'Solving the mystery of flickering lights in your home'}     
       />

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2020-08-15">August 15, 2020</time> by siteadmin
          </div>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Flickering light bulb" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />

          <p>
            Are your lights flickering in a room when you adjust the dimmer? Did changing the bulbs not solve the problem? The issue is probably an outdated dimmer. Many of the dimmers in homes were manufactured before LED bulbs were the mainstream. Older versions of dimmers will cause LED bulbs to blink or flicker leaving frustrated homeowners unaware of the cause. If you have this problem, pick yourself up a new dimmer.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Option 1: DIY</h2>
          <p>
            There are a couple of things to check before you take on this project though. First, make sure that before you walk to the register you have checked the new dimmer packaging. It should say that it can be used with LED bulbs. Second, you always need to make sure you turn off the circuit breaker before you start any electrical project.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Option 2: Leave it to the pros</h2>
          <p>
            If DIY electrical projects aren't your thing, then call a certified electrician. Brilliant Home Services can have your dimmer replaced by a certified electrician quickly and safely. Give us a call and we will take the headaches out for you! You can follow these links to find out more about additional indoor lighting issues and other electrical services from Brilliant Home Services.
          </p>

          <div className="bg-secondary text-secondary-content rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4">Need Help with Flickering Lights?</h2>
            <p className="mb-4">
              Don't let flickering lights frustrate you any longer. Our certified electricians at Brilliant Home Services can quickly diagnose and solve your lighting issues.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule an Electrician
            </Link>
          </div>

          <div className="bg-base-200 p-4 rounded-lg my-6">
            <p className="mb-2">Learn more about our services:</p>
            <ul className="list-disc list-inside">
              <li>
                <Link href="/services/indoor-lighting" className="text-primary hover:underline">
                  Indoor Lighting Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-primary hover:underline">
                  Electrical Services
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  )
}