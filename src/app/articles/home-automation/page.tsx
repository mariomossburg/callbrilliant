// import Link from "next/link"
// export default function Page(){
//     return (
//         <div>
//             <Link href={'https://callbrilliant.com/home-improvement/are-there-real-advantages-of-home-automation/'}>
//                 Hello, I'm an article
//             </Link>
//         </div>
//     )
// } 

import Header from '@/app/_components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">

      <Header
      title='Are There Real Advantages of Home Automation?'
      text='Discover the benefits of smart home technology'
      />
      

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2021-09-08">September 8, 2021</time> by Sydney M
          </div>

          <p>
            What is home automation? In short, it's the automatic control of household features, activity, and appliances. Many people still consider home automation to be mainly, a luxury- but we have found that it actually contributes to a lot more than that.
          </p>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Overview of a Home Automation System" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />

          <h2 className="text-2xl font-semibold mt-8 mb-4">The Intersection Between Home Automation and Children</h2>
          <p>
            A concern that many of our customers with children face is, what if my child is home alone and leaves an appliance on that could threaten their lives? Luckily, home automation can help with this. Home automation is advanced enough that you can monitor and receive notifications for when appliances are on and when doors are opened or closed. This makes it easier to leave your kids home with peace of mind.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Home Automation To Prevent Break Ins</h2>
          <p>
            Have you ever gone out of town and had to leave on lights to discourage break ins? Although this is common, it leads to a high electricity bill by leaving outside lights on all day and night and lamps in your home. But, home automation solves this! By utilizing home automation you are able to turn on and off lights depending on the time of day, and even schedule lighting to go on and off so you don't have to be worried on your trip.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Other Benefits of Home Automation</h2>
          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Home Automation System Monitoring Appliances" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />
          <p>
            Have a greater control over energy use, home security, and appliance functionality. When owning a home, it's key to be able to depend on a system that allows you to manage your home all from one place! You will be able to be one step ahead, and always be able to monitor your home even when you are away.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Installations + Different Choices</h2>
          <p>
            Here at Brilliant Home Services, we recommend utilizing Eaton's product line. Eaton is a reliable choice to keep you and your family safe with ease. Brilliant Home Services is a Eaton certified contracting company that will help you set up home automation so that it runs smoothly and allows you to control your home from the tips of your fingers.
          </p>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Scope of a Home Automation System" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />

          <div className="bg-secondary text-secondary-content rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Automate Your Home?</h2>
            <p className="mb-4">
              Experience the convenience and peace of mind that comes with home automation. Contact Brilliant Home Services today to discuss your home automation needs and take the first step towards a smarter, safer home.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get a Free Consultation
            </Link>
          </div>
        </article>
      </main>

      <footer className="bg-neutral text-neutral-content py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Brilliant Home Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}