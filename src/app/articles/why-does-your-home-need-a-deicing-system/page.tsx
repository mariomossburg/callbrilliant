import Header from '@/app/_components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function DeicingSystemArticlePage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header 
      title={'Why Does Your Home Need a Deicing System?'} 
      text={'Protect your home from winter damage in Chicago'} 
      />

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2021-02-16">February 16, 2021</time> by siteadmin
          </div>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Icy roof" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />

          <p>
            Here in Chicago, with the average snowfall being 36 inches per winter it's imperative that you prepare for winter storms, and that your home is equipped to handle the storms as well. People who install deicing systems prior to Chicago's winter season are able to prevent water damage, ice build up, and blistered paint all of which are all costly damages to repair.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Does a Deicing System Do?</h2>
          <p>
            Here in the midwest where ice and snow storms are commonplace in the winter, you can expect your home to have ice blockages which will end up slowing the melting process. This allows the ice to get underneath your roof's shingles, and cause water damage in your home. A deicing system is able to detect and melt snow and ice that would otherwise build up in your gutters, and melts the ice and snow so that there is enough space for the water to run down your gutters. This also prevents trapped water to ensure your house will not suffer from water damage.
          </p>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Heat Cables on Roof – Ice Dam Prevention" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2">
            "Heat Cables on Roof – Ice Dam Prevention" by Tony Webster is licensed under CC BY 2.0
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Brilliant Home Services Can Install Deicing Systems</h2>
          <p>
            When installed correctly, deicing systems are extremely efficient in preventing ice build up. Brilliant Home Services can install and check to make sure self-installed deicing systems are working properly.
          </p>
          <p>
            Brilliant Home Services offers complimentary home evaluations for new deicing systems. Give us a call this spring to prevent damages to your home from winter storms!
          </p>

          <div className="bg-secondary text-secondary-content rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4">Protect Your Home This Winter</h2>
            <p className="mb-4">
              Don't let ice and snow damage your home. Contact Brilliant Home Services today for a complimentary evaluation and learn how a deicing system can safeguard your property.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Free Evaluation
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}