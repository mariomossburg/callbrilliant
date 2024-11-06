import Header from '@/app/_components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header
      title='How To Install and Style LED Lights for Winter'
      text='Illuminate your outdoor space during the dark Chicago winters'
      />

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2021-09-08">September 8, 2021</time> by Sydney M
          </div>

          <p>
            Here in Chicago, winters can be long, cold, and… Dark. Oftentimes, families find themselves without quality outdoor lighting which can lead to injuries on ice and snow. Despite this common occurrence we have an easy fix!
          </p>

          <p>When installing or assessing current lighting for your home ask yourself these three questions:</p>

          <ul>
            <li>How long do my bulbs last? (are they durable?)</li>
            <li>Is my lighting choice energy-efficient?</li>
            <li>Does my lighting offer comparable or better lighting than other choices?</li>
          </ul>

          <p>
            Despite lighting being such a common occurrence, many people aren't aware that LED lights in particular are able to withstand the harshest and coldest weather conditions while still remaining energy-efficient; meaning LED lights are comparably better than any competing lighting on the market making it a great choice for lighting in the winter.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How to Style Outdoor LED Lighting</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Tip #1: Ensure Waterproof Bulbs</h3>
          <p>
            The most important thing to remember when installing LED lighting is to ensure the bulbs you are using are waterproof!
          </p>
          <p>
            Popular LED designs that feature waterproof lighting include vintage hanging bulbs that can be strung from umbrellas, trees, fences, or entryways! These lighting fixtures create a unique 'boho' style that decorates the landscaping of your home.
          </p>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="LED Lights in bulbs" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />

          <h3 className="text-xl font-semibold mt-6 mb-3">Tip #2: Choose the Correct Color</h3>
          <p>
            When choosing LED lighting, there are different colors that will affect how your home looks, as well as how well-lit it is. LEDs provide clearer visibility with brighter emissions, but you may not find extremely bright lights to be what looks best on your home and may want softer (more yellow!) lighting that still serves a purpose of providing safety for your family.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Image 
              src="/placeholder.svg?height=300&width=400" 
              alt="Blue LED Lighting" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/placeholder.svg?height=300&width=400" 
              alt="Yellow LED Lighting" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Tip #3: String Lights or Bulbs?</h3>
          <p>
            When choosing what type of LED lighting you are interested in installing, a common question is: what kind? The two large categories to choose between are string lights and bulbs. String lights are great for lighting walkways, for styling by wrapping around trees or on bushes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Image 
              src="/placeholder.svg?height=300&width=400" 
              alt="LED Lighting on trees" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/placeholder.svg?height=300&width=400" 
              alt="LED Lighting on a pathway up to your home" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <p>
            Whereas, bulbs are often purchased with a more expensive lighting fixture that often creates a more modern look for your home. This type of lighting is oftentimes attached to your home, and makes it simple to replace bulbs!
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Check out some of our inspiration….</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <Image 
              src="/placeholder.svg?height=300&width=300" 
              alt="Wall Fixtures with LED Lighting" 
              width={300} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/placeholder.svg?height=300&width=300" 
              alt="Stairway LED Lighting" 
              width={300} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/placeholder.svg?height=300&width=300" 
              alt="Modern LED Lighting" 
              width={300} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Planning for Installation</h2>
          <p>
            When planning to install outdoor lighting of any kind, don't hesitate to reach out to professionals in order to ensure that you have the correct lighting, cords, and set up so that your lighting lasts you through the winter months!
          </p>

          <div className="bg-secondary text-secondary-content rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Illuminate Your Outdoor Space?</h2>
            <p className="mb-4">
              Don't let the dark Chicago winters catch you off guard. Contact Brilliant Home Services today to discuss your outdoor LED lighting needs and ensure a safe, well-lit environment for your home.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Lighting Consultation
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}