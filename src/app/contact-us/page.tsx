// export default function Page(){
//     return(
//         <div className="text-center p-4">page is live</div>
//     )
// }



// 'use client'

// import { useState } from 'react'

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     service: '',
//     contactMethod: '',
//     couponCode: '',
//     message: ''
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({ ...prevState, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // send the form data
//     console.log('Form submitted:', formData)
//     // Reset form/redirect
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       service: '',
//       contactMethod: '',
//       couponCode: '',
//       message: ''
//     })
//   }

//   return (
//     <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
//       <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title text-3xl font-bold text-center mb-6">Contact Us</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-control mb-4">
//               <label className="label">
//                 <span className="label-text">Preferred contact method *</span>
//               </label>
//               <div className="flex gap-4">
//                 <label className="label cursor-pointer">
//                   <input
//                     type="radio"
//                     name="contactMethod"
//                     value="phone"
//                     checked={formData.contactMethod === 'phone'}
//                     onChange={handleChange}
//                     className="radio"
//                     required
//                   />
//                   <span className="label-text ml-2">Phone</span>
//                 </label>
//                 <label className="label cursor-pointer">
//                   <input
//                     type="radio"
//                     name="contactMethod"
//                     value="email"
//                     checked={formData.contactMethod === 'email'}
//                     onChange={handleChange}
//                     className="radio"
//                     required
//                   />
//                   <span className="label-text ml-2">Email</span>
//                 </label>
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label" htmlFor="name">
//                 <span className="label-text">Name *</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label" htmlFor="email">
//                 <span className="label-text">
//                   Email {formData.contactMethod === 'phone' ? '(Optional)' : '*'}
//                 </span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 required={formData.contactMethod === 'email'}
//               />
//             </div>
//             <div className="form-control">
//               <label className="label" htmlFor="phone">
//                 <span className="label-text">
//                   Phone {formData.contactMethod === 'email' ? '(Optional)' : '*'}
//                 </span>
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 required={formData.contactMethod === 'phone'}
//               />
//             </div>
//             <div className="form-control">
//               <label className="label" htmlFor="address">
//                 <span className="label-text">Address (Optional)</span>
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label" htmlFor="service">
//                 <span className="label-text">What Kind of service do you need?</span>
//               </label>
//               <select
//                 id="service"
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 className="select select-bordered w-full"
//               >
//                 <option value="">Select a service</option>
//                 <option value="maintenance">Maintenance Visit</option>
//                 <option value="service">Service Call</option>
//               </select>
//             </div>
//             <div className="form-control">
//               <label className="label" htmlFor="couponCode">
//                 <span className="label-text">Coupon Code?</span>
//               </label>
//               <input
//                 type="text"
//                 id="couponCode"
//                 name="couponCode"
//                 value={formData.couponCode}
//                 onChange={handleChange}
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label" htmlFor="message">
//                 <span className="label-text">How can we help *</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="textarea textarea-bordered h-24"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control mt-6">
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, ChangeEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    contactMethod: '',
    couponCode: '',
    message: '',
    image: null as File | null,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({ ...prevState, image: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // send the form data
    console.log('Form submitted:', formData)
    // Reset form/redirect
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      contactMethod: '',
      couponCode: '',
      message: '',
      image: null,
    })
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Preferred contact method *</span>
              </label>
              <div className="flex gap-4">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === 'phone'}
                    onChange={handleChange}
                    className="radio"
                    required
                  />
                  <span className="label-text ml-2">Phone</span>
                </label>
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleChange}
                    className="radio"
                    required
                  />
                  <span className="label-text ml-2">Email</span>
                </label>
              </div>
            </div>

            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name *</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered"
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email {formData.contactMethod === 'phone' ? '' : '*'}</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered"
                required={formData.contactMethod === 'email'}
                placeholder={formData.contactMethod === 'phone' ? "Email (Optional)" : "Your email"}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="phone">
                <span className="label-text">Phone {formData.contactMethod === 'email' ? '' : '*'}</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered"
                required={formData.contactMethod === 'phone'}
                placeholder={formData.contactMethod === 'email' ? "Phone (Optional)" : "Your phone number"}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="address">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Optional"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="service">
                <span className="label-text">What Kind of service do you need?</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Select a service</option>
                <option value="maintenance">Maintenance Visit</option>
                <option value="service">Service Call</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="couponCode">
                <span className="label-text">Coupon Code</span>
              </label>
              <input
                type="text"
                id="couponCode"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Optional"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="message">
                <span className="label-text">How can we help *</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-24"
                required
                placeholder="Please describe how we can assist you"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="image">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full"
                accept="image/*"
              />
              <label className="label">
                <span className="label-text-alt">Optional: Upload an image if needed</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
