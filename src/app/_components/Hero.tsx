import Image from 'next/image'


export default function Hero() {
  const photo = '/assets/hero-photo/hero-photo.png'

  return (
    <div className="relative min-h-[50vh] rounded-xl shadow-xl overflow-hidden">
      <Image
        src={photo}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center min-h-[50vh]">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">After 70 years, we've made it easy for you.</h1>
            <p className="mb-5">
              Description text for the main hero call to action.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
