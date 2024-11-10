'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(0); // Initialize to 0 or use a default value
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    // Set the initial screen size on mount
    handleResize();

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

  const getDropdownClass = () => {
    return screenSize <= 450 ? 'dropdown-bottom' : 'dropdown-right';
  };

  return (
    <div ref={navRef} className="navbar bg-base-300  shadow-lg p-4 fixed flex z-50" aria-label="Main navigation">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" aria-label="Toggle navigation menu" aria-expanded={isOpen ? "true" : "false"} className="btn btn-ghost text-secondary btn-circle shadow-md" onClick={toggleMenu}>
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
            className={`menu menu-lg border dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl ${isOpen ? '' : 'hidden'}`}>

            <li aria-label="Toggle navigation submenu">
              <details className={`dropdown ${getDropdownClass()}`}>
                <summary className="m-1 text-black">Services</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black border">
                  <li><Link aria-label="Electrician services" href={"/electrician"}>Electrician</Link></li>
                  <li><Link aria-label="Construction services" href={"/construction"}>Construction</Link></li>
                  <li><Link aria-label="Heating services" href={"/heating"}>Heating</Link></li>
                  <li><Link aria-label="Air conditioning services" href={"/air-conditioning"}>Air Conditioning</Link></li>
                  <li><Link aria-label="Generator System services" href={"/generator-systems-and-service"}>Generator Systems & Service</Link></li>
                </ul>
              </details>
            </li>

            <li aria-label="Toggle navigation submenu">
              <details className={`dropdown ${getDropdownClass()}`}>
                <summary className="m-1 text-black">EV's</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black border">
                  <li><Link href={"/ev-charging"}>EV Charging</Link></li>
                  <li><Link href={"/ev-charging-faq"}>EV Home Charging FAQ</Link></li>
                </ul>
              </details>
            </li>

            <li aria-label="Toggle navigation submenu">
              <details className={`dropdown ${getDropdownClass()}`}>
                <summary className="m-1 text-black">About Us</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg text-black border">
                  <li><Link href={"/about-us/affiliations"}>Affiliations</Link></li>
                  <li><Link href={"/about-us/privacy-policy"}>Privacy Policy</Link></li>
                  <li><Link href={"/about-us/service-areas"}>Service Areas</Link></li>
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
        <Link href={'/'} className="btn btn-ghost lg:text-xl md:text-xl sm:text-lg text-base text-secondary">Brilliant Home Services</Link>
      </div>

      <div className="navbar-end">
        <Link href="/contact-us" >
          <button className="bg-secondary text-base-100 px-4 py-2 md:btn-wide rounded-lg shadow-xl hover:bg-base-100 hover:text-black hover:underline transform hover:scale-105 transition-transform duration-200 border-2 border-transparent hover:border-secondary">
            Contact 
          </button>
        </Link>
      </div>
    </div>
  );
}
