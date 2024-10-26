// 'use client'
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//         const dropdowns = document.querySelectorAll('details.dropdown');
//         dropdowns.forEach((dropdown) => {
//           dropdown.removeAttribute('open');
//         });
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, []);

//   useEffect(() => {
//     const dropdowns = document.querySelectorAll('details.dropdown');

//     dropdowns.forEach((dropdown) => {
//       dropdown.addEventListener('click', function (e) {
//         e.stopPropagation();
//         dropdowns.forEach((otherDropdown) => {
//           if (otherDropdown !== dropdown) {
//             otherDropdown.removeAttribute('open');
//           }
//         });
//       });
//     });
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (isOpen) {
//       const dropdowns = document.querySelectorAll('details.dropdown');
//       dropdowns.forEach((dropdown) => {
//         dropdown.removeAttribute('open');
//       });
//     }
//   };

//   return (
//     <div ref={navRef} className="navbar bg-base-300 shadow-lg p-3 fixed flex z-50">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost text-secondary btn-circle" onClick={toggleMenu}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h7" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className={`menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl ${isOpen ? '' : 'hidden'}`}>

//             <li>
//               <details className="dropdown dropdown-bottom">
//                 <summary className="m-1 text-black">Services</summary>
//                 <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black">
//                   <li><Link href={"/electrician"}>Electrician</Link></li>
//                   <li><Link href={"/construction"}>Construction</Link></li>
//                   <li><Link href={"/heating"}>Heating</Link></li>
//                   <li><Link href={"/air-conditioning"}>Air Conditioning</Link></li>
//                   <li><Link href={"/generator-systems-and-service"}>Generator Systems & Service</Link></li>
//                 </ul>
//               </details>
//             </li>

//             <li>
//               <details className="dropdown dropdown-right">
//                 <summary className="m-1 text-black">
//                   EV's
//                 </summary>
//                 <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black">
//                   <li><Link href={"/ev-charging"}>EV Charging</Link></li>
//                   <li><Link href={"/ev-charging-faq"}>EV Home Charging FAQ</Link></li>
//                 </ul>
//               </details>
//             </li>

//             <li>
//               <details className="dropdown dropdown-right">
//                 <summary className="m-1 text-black">About Us</summary>
//                 <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black">
//                   <li><Link href={"/affiliations"}>Affiliations</Link></li>
//                   <li><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
//                   <li><Link href={"/service-areas"}>Service Areas</Link></li>
//                 </ul>
//               </details>
//             </li>

//             <li className="text-black">
//               <Link href={"/contact-us"}>Contact Us</Link>
//             </li>
//             <li className="text-black">
//               <Link href={"/articles"}>Articles</Link>
//             </li>
//             <li className="text-black">
//               <Link href={"/promotions"}>Promotions</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="navbar-center">
//         <a className="btn btn-ghost sm:text-xl text-secondary">Brilliant Home Services</a>
//       </div>

//       <div className="navbar-end">
//         <Link href="/contact-us">
//           <button className="bg-secondary text-base-100 px-4 py-2 rounded-lg shadow-xl hover:bg-base-100 hover:text-black hover:underline transform hover:scale-105 transition-transform duration-200 border-2 border-transparent hover:border-secondary">
//             Contact 
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }


'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        const dropdowns = document.querySelectorAll('details.dropdown');
        dropdowns.forEach((dropdown) => {
          dropdown.removeAttribute('open');
        });
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const dropdowns = document.querySelectorAll('details.dropdown');

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.removeAttribute('open');
          }
        });
      });
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      const dropdowns = document.querySelectorAll('details.dropdown');
      dropdowns.forEach((dropdown) => {
        dropdown.removeAttribute('open');
      });
    }
  };

  return (
    <div ref={navRef} className="navbar bg-base-300 shadow-lg p-3 fixed flex z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-secondary btn-circle" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl ${isOpen ? '' : 'hidden'}`}>

            <li>
              <details className={`dropdown ${screenSize <= 450 ? 'dropdown-bottom' : 'dropdown-right'}`}>
                <summary className="m-1 text-black">Services</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black">
                  <li><Link href={"/electrician"}>Electrician</Link></li>
                  <li><Link href={"/construction"}>Construction</Link></li>
                  <li><Link href={"/heating"}>Heating</Link></li>
                  <li><Link href={"/air-conditioning"}>Air Conditioning</Link></li>
                  <li><Link href={"/generator-systems-and-service"}>Generator Systems & Service</Link></li>
                </ul>
              </details>
            </li>

            <li>
              <details className={`dropdown ${screenSize <= 450 ? 'dropdown-bottom' : 'dropdown-right'}`}>
                <summary className="m-1 text-black">EV's</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black">
                  <li><Link href={"/ev-charging"}>EV Charging</Link></li>
                  <li><Link href={"/ev-charging-faq"}>EV Home Charging FAQ</Link></li>
                </ul>
              </details>
            </li>

            <li>
              <details className={`dropdown ${screenSize <= 450 ? 'dropdown-bottom' : 'dropdown-right'}`}>
                <summary className="m-1 text-black">About Us</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black">
                  <li><Link href={"/affiliations"}>Affiliations</Link></li>
                  <li><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
                  <li><Link href={"/service-areas"}>Service Areas</Link></li>
                </ul>
              </details>
            </li>

            <li className="text-black">
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
            <li className="text-black">
              <Link href={"/articles"}>Articles</Link>
            </li>
            <li className="text-black">
              <Link href={"/promotions"}>Promotions</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost sm:text-xl text-secondary">Brilliant Home Services</a>
      </div>

      <div className="navbar-end">
        <Link href="/contact-us">
          <button className="bg-secondary text-base-100 px-4 py-2 rounded-lg shadow-xl hover:bg-base-100 hover:text-black hover:underline transform hover:scale-105 transition-transform duration-200 border-2 border-transparent hover:border-secondary">
            Contact 
          </button>
        </Link>
      </div>
    </div>
  );
}
