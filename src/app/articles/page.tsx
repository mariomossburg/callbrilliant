import Link from "next/link"
export default function Page(){
    return (
        <div className="text-center">
            <Link href={'/articles/landscape-lights-not-working'}>
                <button className="btn btn-primary">
                Article Page
                </button>
            </Link>
        </div>
    )
} 