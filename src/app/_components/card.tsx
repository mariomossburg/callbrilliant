import Link from "next/link";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  badgeText?: string;
  linkHref: string;
  buttonText: string;
}

export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  badgeText,
  linkHref,
  buttonText
}: CardProps) {
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img
          src={imageSrc}
          alt={imageAlt}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
        <h2 className="card-title">
          {title}
          {badgeText && <div className="badge badge-secondary">{badgeText}</div>}
        </h2>
        <Link href={linkHref}>
            <button className="btn btn-primary">{buttonText}</button>
        </Link>
        </div>
      <p>{description}</p>
      </div>
    </div>
  )
}


{/* <div className="card-actions justify-end">
  <Link href={linkHref}>
    <button className="btn btn-primary">{buttonText}</button>
  </Link>
</div> */}