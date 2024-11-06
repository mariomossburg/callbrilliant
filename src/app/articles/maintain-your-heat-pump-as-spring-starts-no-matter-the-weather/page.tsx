import Header from '@/app/_components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header
      title='Maintain Your Heat Pump as Spring Starts—No Matter the Weather'
      text='Preparing your HVAC system for the changing seasons'
      />

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2017-03-20">March 20, 2017</time> by siteadmin
          </div>

          <Image 
            src="/placeholder.svg?height=300&width=600" 
            alt="Service reminder watch" 
            width={600} 
            height={300} 
            className="my-8 rounded-lg shadow-lg"
          />

          <p>
            Although Chicago had a far better week of later winter weather than the Northeast, which suffered under the chill and snowfall of Winter Storm Stella, we're still experiencing temperatures that can dip down into the 20s during the nights and struggle to make it out of the 40s during the day. This isn't a surprise for March: even though spring starts officially this week, Chicagoland must deal with cold spells through April and sometimes into May.
          </p>

          <p>
            No matter the weather outside, however, this is the time of the year to consider your heat pump and its annual maintenance. This is both a preparation for the coming summer season and a way to close out the winter.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">But I just had the heat pump maintained in fall</h2>
          <p>
            And be glad that you did! If you enjoyed steady performance from your home's heat pump over the winter, it's partially and maybe even largely because it received a professional inspection and tune-up before the harsh cold swept in. But heat pumps aren't like furnaces or standard air conditioning systems that only require a single pre-season maintenance visit per year. Heat pumps must have biannual maintenance.
          </p>

          <p>
            Keep in mind the dual function of a heat pump: it operates as a heater during the winter and an air conditioner during summer. That adds up to an immense amount of work over a single year, especially in a place like Chicago where the summers are hot and humid and the winters… well, we all know what those are like. Because a heat pump uses the same components whether it's in heating or cooling mode, it builds up immense strain each season, enough to make maintenance necessary twice a year.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">An early start on spring maintenance helps at the end of winter</h2>
          <p>
            For homes that have a separate heater and air conditioner (such as a combination of a natural gas furnace and AC), having early maintenance for one of these systems is always a good idea since it preps the unit for the coming weather. But it only affects one half of the HVAC system: except for the blower fan, the AC and furnace don't use the same components.
          </p>

          <p>
            But if your home has a heat pump, having it tuned-up in early spring when cold weather is still frequent helps the system to handle both hot and cold conditions. You get an early start for the late spring and summer weather (plus those heat wave surprises of early spring) as well as receive a boost to deal with the remaining cold spells.
          </p>

          <p>
            So take advantage of a period of weather in the 40s and have our professionals come to your home and inspect your heat pump to find how we can best help it during the change of seasons.
          </p>

          <div className="bg-secondary text-secondary-content rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4">Need Heat Pump Service?</h2>
            <p className="mb-4">
              No matter what service you may need for your heat pump in Arlington Heights, IL, you can depend on us. We offer 24/7 emergency service for when the heating or cooling repair can't wait.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule Heat Pump Service
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}