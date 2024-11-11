

import Link from "next/link";

const services = [
  {
    imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    imageAlt: "electrical",
    title: "Electrical",
    description: "Building dreams, one project at a time.",
    badgeText: "NEW",
    linkHref: "/electrician",
    buttonText: "Our Services",
  },
  {
    imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    imageAlt: "Generators",
    title: "Generators",
    description: "Powering your world with expertise.",
    badgeText: "POPULAR",
    linkHref: "/generator-systems-and-service",
    buttonText: "Explore",
  },
  {
    imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    imageAlt: "Heating",
    title: "Heating",
    description: "Keeping your pipes flowing smoothly.",
    linkHref: "/heating",
    buttonText: "Discover",
  },
  {
    imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    imageAlt: "Construction",
    title: "Construction",
    description: "Comfort in every season.",
    badgeText: "Fast",
    linkHref: "/construction",
    buttonText: "Get Started",
  },
  {
    imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    imageAlt: "Air Conditioning",
    title: "Air Conditioning",
    description: "Transforming spaces, renewing life.",
    linkHref: "/air-conditioning",
    buttonText: "See Projects",
  },
  {
    imageSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    imageAlt: "Indoor Air Quality",
    title: "EV Charging",
    description: "Keeping your property in top shape.",
    badgeText: "24/7",
    linkHref: "/maintenance",
    buttonText: "Schedule",
  },
];

export default function Accordion() {
  return (
    <div className="mt-12">
      {services.map((service, index) => (
        <div key={index} className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="accordion-services" />
          <div className="collapse-title text-xl font-medium flex items-center gap-2">
            {service.title}
            {service.badgeText && (
              <span className="badge badge-secondary ml-2">{service.badgeText}</span>
            )}
          </div>
          <div className="collapse-content">
            <p className="mb-4">{service.description}</p>
            <Link href={service.linkHref}>
              <button className="btn btn-primary">{service.buttonText}</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
