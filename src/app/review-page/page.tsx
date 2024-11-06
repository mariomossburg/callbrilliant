'use client'
import Image from 'next/image'
import Header from "../_components/header"

export default function ReviewPhotosPage() {
    // const photo = '/reviews/review-one.png'


  const reviews = [
    { id: 1, image: "/reviews/review-one.png", alt: "Customer review 1" },
    { id: 2, image: "/reviews/review-two.png", alt: "Customer review 2" },
    { id: 3, image: "/reviews/review-three.png", alt: "Customer review 3" },
    { id: 4, image: "/reviews/review-four.png", alt: "Customer review 4" },
    { id: 5, image: "/reviews/review-five.png", alt: "Customer review 5" },
    { id: 6, image: "/reviews/review-six.png", alt: "Customer review 6" },
  ]

  return (
    <div className="min-h-screen bg-base-100">
      <Header 
        title='Customer Reviews'
        text='See what our satisfied customers have to say'
      />

      <div className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <div 
                key={review.id}  
                className="bg-base-200 shadow rounded-lg  opacity-0 transform transition-opacity duration-500 ease-in-out delay-100"
                style={{
                  animation: `fadeIn 0.5s forwards ${index * 0.1}s`,
                }}
              >
                <Image 
                  src={review.image} 
                  alt={review.alt} 
                  width={600} 
                  height={150} 
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}