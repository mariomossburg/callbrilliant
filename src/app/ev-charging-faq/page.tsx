import Link from 'next/link'

export default function Page() {
  const faqs = [
    {
        question: "Why is the 'Tesla Wall Connector' the preferred charging solution for electric vehicles?",
        answer: (
          <>
            {`The `}
            <Link href="https://shop.tesla.com/product/wall-connector" target="_blank" className="text-primary hover:underline">
              Tesla Wall Connector
            </Link>
            {` is engineered to replenish your car's battery swiftly and reliably, providing up to 44 miles of range per hour of charge. This tailored charging solution harmonizes with the advanced technology of your EV, ensuring that you're investing in a system that optimizes charging efficiency, reduces charging times, and integrates seamlessly with your vehicle. Other EV manufacturers are already adapting to the Tesla charger due to their nationwide supercharging station network. We expect this trend to continue.`}
          </>
        )
      },
      
    {
      question: "What makes a professional installation of Tesla Wall Connector beneficial?",
      answer: "Entrusting the installation to seasoned professionals ensures the safety, efficiency, and longevity of your Wall Connector. Our certified electricians are adept at navigating local electrical codes, securing necessary permits, and executing a flawless installation. This investment not only buys peace of mind but also guarantees that your Wall Connector operates at peak performance from day one."
    },
    {
      question: "Are there any technical and/or electrical requirements for installing a Tesla Wall Connector?",
      answer: "The technical intricacies of installing a Tesla Wall Connector necessitate a dedicated 240-volt circuit, and the expertise to align the installation with local electrical standards. Our team's proficiency ensures that your home's electrical system harmonizes with the Wall Connector, establishing a foundation for reliable, efficient charging."
    },
    {
      question: "How do I choose the most suitable location for my Tesla Wall Connector installation?",
      answer: "Selecting an optimal location is pivotal for the performance and accessibility of your Wall Connector. Our pre-installation consultation includes a comprehensive assessment to identify the prime location that minimizes cable length, ensures easy access, and adheres to safety standards, ensuring a convenient and safe charging experience."
    },
    {
      question: "How can your services ensure a safe and efficient installation of the Tesla Wall Connector?",
      answer: "Our approach centers around careful planning, technical expertise, and a focus on meeting your needs. Safety and efficiency are our priorities at every stage, from obtaining the necessary permits to conducting the final inspection. Choosing our professional installation service means you're opting for a smooth, hassle-free process and a reliable, well-performing charging solution for your EV."
    },
    {
      question: "What is the process to schedule an installation appointment with you?",
      answer: "Scheduling with us is a breeze. A simple call or online appointment request is the first step towards enhancing your Tesla ownership experience. Our responsive team will contact you to set up a convenient appointment, ensuring a smooth transition to faster, reliable home charging."
    },
    {
      question: "What is the estimated cost and time required for the installation of a Tesla Wall Connector?",
      answer: "Over time, the value derived from a professionally installed Wall Connector easily transcends the upfront cost. While the cost and time may vary, our transparent pricing and efficient installation process ensure that you are investing in a durable, high-performance charging solution that serves you excellently for years to come."
    },
    {
      question: "Do I need a permit and/or inspections for Tesla Wall Connector installations?",
      answer: "Permits and inspections ensure compliance with local electrical standards. Our team adeptly handles these formalities when needed, ensuring your installation is up to code, safe, and ready for seamless operation."
    },
    {
      question: "What kind of support and warranty do you offer post-installation?",
      answer: "We offer a full 1 year warranty on our labor and any materials we provide. Our post-installation support embodies our commitment to your satisfaction. The comprehensive warranty underscores the quality of our workmanship, and our dedicated support team is always at your beck and call to address any concerns, ensuring your Wall Connector continues to serve you efficiently."
    },
    {
      question: "How can I prepare my home for the installation of a Tesla Wall Connector?",
      answer: "A little preparation goes a long way in ensuring a smooth installation. Clearing the area around the installation site and ensuring easy access to your electrical panel are key steps. Our pre-installation guidance provides a detailed checklist to prepare your home for this upgrade."
    },
    {
      question: "Can I contact you for a pre-installation consultation to assess my specific needs and requirements?",
      answer: "Our pre-installation consultation is tailored to understand your unique needs and provide personalized solutions. This engagement is a step towards making an informed, confident decision and enjoying a seamless transition to faster home charging for your Tesla."
    }
  ]

  return (
    <div className="min-h-screen bg-base-100">
      <header className="bg-primary text-primary-content py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Electric Vehicle Home Charging FAQs</h1>
          <p className="mt-2">Your questions about Tesla Wall Connector installation answered</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{index + 1}. {faq.question}</h2>
              <p className="bg-base-200 p-4 rounded-lg">{faq.answer}</p>
            </div>
          ))}
        </section>

        <section>
          <div className="bg-secondary text-secondary-content rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Ready to Get Started?</h2>
            <p className="mb-4">
              Contact us today to learn more about Tesla Wall Connector installation and how we can help you upgrade your EV charging experience!
            </p>
            <Link href="/contact-us" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}