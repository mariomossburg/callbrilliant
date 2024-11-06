import Header from '@/app/_components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function SmokeDetectorArticlePage() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="bg-primary text-primary-content py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold"></h1>
          <p className="mt-2"></p>
        </div>
      </header>
      <Header 
      title={'Do your smoke detectors beep for no reason?'} 
      text={"Understanding and maintaining your home's safety devices"}     
    />

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2020-09-01">September 1, 2020</time> by siteadmin
          </div>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Service reminder watch" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />

          <p>
            Smoke detectors will sometimes let us know when their battery is running low by beeping randomly. Many homes have 120 volt smoke detectors with a battery backup in case the power goes out and those units will beep as well. 120V devices are interconnected so if you have more than one in your home, when one goes, off, they all go off. This is a safety issue to let you know there is smoke somewhere in your home regardless of where you are.
          </p>

          <p>
            Both smoke and carbon monoxide detectors do need to be replaced. Underwriter Laboratories [UL] who approve the various detectors give them on average, a 10 year approval duration. That duration is based on the devices' inside components that detect either smoke or carbon monoxide. They are manufactured to not go off when minute traces of smoke or CO2 are in the air but with years of exposure to dust build up, replacement is necessary to properly protect you and your family.
          </p>

          <p>
            If your home is older than 10 years old and you haven't replaced your devices, turn off the power to them and put in new ones so you can rest assured they will work when needed. Check out our page on Smoke Detectors for more information. If you'd prefer to have a certified electrician handle it for you, please give us a call!
          </p>

          <div className="bg-secondary text-secondary-content rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4">Ensure Your Home's Safety</h2>
            <p className="mb-4">
              Don't compromise on your family's safety. If your smoke detectors are over 10 years old or you're experiencing issues, it's time for an upgrade. Let Brilliant Home Services ensure your home is protected.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Safety Inspection
            </Link>
          </div>

          <div className="bg-base-200 p-4 rounded-lg my-6">
            <Link href="/services/smoke-detectors" className="text-primary hover:underline">
              Learn more about our Smoke Detector services
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}