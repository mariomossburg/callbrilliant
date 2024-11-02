// import Link from "next/link"
// import Image from "next/image"
// import Header from "../_components/header"

// export default function Page() {
//     const photo = '/assets/construction/affiliations.png'

//     return (
//         <div>
//             <Header title="Affiliations" text="" />
            
//             <div className="flex justify-center">
//                 <div className="rounded-lg overflow-hidden shadow-lg">
//                     <Image alt="Callbriant Affiliations" src={photo} width={600} height={400} className="w-full" />
//                 </div>
//             </div>

//             <div className="text-center my-4">
//                 <h2 className="mb-2">Check out our esteemed affiliations:</h2>
//                 <div className="space-x-2">
//                     <Link href="https://barringtonchamber.com/" className="text-primary hover:underline">Barrington Chamber of Commerce</Link>
//                     <Link href="https://www.schaumburgbusiness.com/" className="text-primary hover:underline">Schaumburg Business Association</Link>
//                     <Link href="https://www.iaei.org/" className="text-primary hover:underline">IAEI</Link>
//                     <Link href="https://www.angi.com/" className="text-primary hover:underline">Angi</Link>
//                     <Link href="https://www.comed.com/" className="text-primary hover:underline">Comed</Link>
//                     <Link href="https://www.eaton.com/us/en-us.html" className="text-primary hover:underline">EATON</Link>
//                     <Link href="https://www.tesla.com/" className="text-primary hover:underline">Tesla</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }



import Image from "next/image"
import Link from "next/link"
import Header from "../_components/header"

export default function AffiliationsPage() {
    const photo = '/assets/construction/affiliations.png'

    const affiliations = [
        { name: "Barrington Chamber of Commerce", url: "https://barringtonchamber.com/" },
        { name: "Schaumburg Business Association", url: "https://www.schaumburgbusiness.com/" },
        { name: "IAEI", url: "https://www.iaei.org/" },
        { name: "Angi", url: "https://www.angi.com/" },
        { name: "Comed", url: "https://www.comed.com/" },
        { name: "EATON", url: "https://www.eaton.com/us/en-us.html" },
        { name: "Tesla", url: "https://www.tesla.com/" },
    ]

    return (
        <div className="min-h-screen bg-base-100">
            <Header title="Affiliations" text="" />
            
            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-center mb-12">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image alt="Callbriant Affiliations" src={photo} width={600} height={400} className="w-full" />
                    </div>
                </div>

                <section className="text-center">
                    <h2 className="text-2xl font-semibold mb-6">Check out our esteemed affiliations:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {affiliations.map((affiliation, index) => (
                            <Link 
                                key={index} 
                                href={affiliation.url}
                                className="btn btn-outline btn-primary normal-case text-base h-auto py-3 px-4 hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                                {affiliation.name}
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

