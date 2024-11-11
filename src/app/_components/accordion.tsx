import Link from "next/link";
import { services } from "../../lib/services";

export default function Accordion() {
  return (
    <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-secondary my-6">Our Services</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 animate-fadeInTwo"></div>
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
