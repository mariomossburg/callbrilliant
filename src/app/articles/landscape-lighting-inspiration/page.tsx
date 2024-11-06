import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="bg-primary text-primary-content py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Landscape Lighting Inspiration</h1>
          <p className="mt-2">Illuminate your outdoor space with style</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <time dateTime="2021-09-08">September 8, 2021</time> by Sydney M
          </div>

          <p>
            Is your backyard in need of a 'Refresh'? Oftentimes as the years pass us by we don't even notice that the space we once dreamed of hosting dinner parties, roasting marshmallows with our children, or growing our own vegetable garden in has lost its feel of tranquility. Although, with all the work Brilliant Home Services has done in backyards, we can recommend an easy (and quick) fix to create a backyard that will get compliments at all your summer parties, and it's simpler than you'd think! Adding landscape lighting can create a backyard that is stylish and inviting.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How Call Brilliant Can Help!</h2>
          <p>
            A great trick to create a backyard that will enhance your property and highlight your decor is to install landscape lighting.
          </p>
          <p>
            Most lights today are low voltage, underground circuit tracers have a harder time locating those buried boxes. So, when the lights stop working, if those boxes are buried beneath the mulch, it makes the repairs that much harder.
          </p>
          <p>
            Many times, those boxes are in the ground and fill up with water. After you have turned off the power, check the connections in the box for short circuits where the moisture has caused the problem. If you need assistance, feel free to call us or contact us through the website.
          </p>
          <div className="bg-base-200 p-4 rounded-lg my-6">
            <Link href="/promotions" className="text-primary hover:underline">
              Click here for $25 off an electrical repair or installation.
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Landscape Lighting Look book</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Modern Landscape Lighting</h3>
          <p>
            Modern design encompasses clean, crisp lines and a color pallet that encompasses wood, steel, and metal. If you like a sense of simplicity and an industrial look; then modern landscape lighting might be for you! Check out some of our favorite designs to install in your home:
          </p>
          
          {/* Placeholder for modern landscape lighting images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Image src="/placeholder.svg?height=300&width=400" alt="Modern landscape lighting example 1" width={400} height={300} className="rounded-lg" />
            <Image src="/placeholder.svg?height=300&width=400" alt="Modern landscape lighting example 2" width={400} height={300} className="rounded-lg" />
          </div>

          <div className="bg-secondary text-secondary-content rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Illuminate Your Outdoor Space?</h2>
            <p className="mb-4">
              Contact Brilliant Home Services today to discuss your landscape lighting needs and transform your backyard into a stunning nighttime retreat.
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