import Link from 'next/link'
import Header from '../../_components/header'

import { Metadata } from "next";

export const metadata: Metadata = {
    title: ``,
    description: ``,
    applicationName: 'Brilliant Home Services',
    keywords: [""],
    openGraph: {
      images: [],
  
      title: ``,
      description: ``,
    },
  };

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header 
      title='Privacy Policy'
      text='Protecting your personal information'
      />

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <p>
            Brilliant Home Services is sensitive to the private nature of information you provide to us over the Internet. Our Privacy Policy is designed to protect your personal information while at the same time giving you the opportunity to obtain interesting and useful information, products and services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Information</h2>
          <p>
            Personal information may include your name, phone number, address and e–mail address along with other information by which you can be personally identified.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Usage Information</h2>
          <p>
            We also collect usage information from you when you visit us. Web Site usage information is not identifiable information. It describes how our Web Site is used and navigated, including the number and frequency of visitors to each Web page and the length of their stay. Web Site usage information also includes the domain names of browsers that visit our Web Site, time of day the Web Site was visited and other non–personally identifiable information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            Please <Link href="/contact" className="text-primary hover:underline">click here to contact us</Link> if you have any further questions about our privacy policy or to stop receiving future emails, phone calls, or other direct communications from Brilliant Home Services.
          </p>
        </article>
      </main>
    </div>
  )
}