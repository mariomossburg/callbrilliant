import Link from "next/link"
export default function Page() {
    return (
        <div className="text-center flex flex-col p-8 ">
            <Link href={'/articles/landscape-lights-not-working'}>
                <button className="btn btn-primary">
                    Article Page
                </button>
                <Link href={'/articles/why-every-ev-owner-needs-a-home-charging-station'}>
                    <button className="btn btn-primary">
                        why-every-ev-owner-needs-a-home-charging-station 
                    </button>
                </Link>
                <Link href={'/articles/landscape-lighting-inspiration'}>
                    <button className="btn btn-primary">
                        Landscape lighting inspiration
                    </button>
                </Link>            <Link href={'/articles/home-automation'}>
                    <button className="btn btn-primary">
                        home automation
                    </button>
                </Link>            <Link href={'/articles/how-to-install-and-style-led-lights'}>
                    <button className="btn btn-primary">
                        how-to-install-and-style-led-lights
                    </button>
                </Link>            <Link href={'/articles/why-does-your-home-need-a-deicing-system'}>
                    <button className="btn btn-primary">
                        Diecing system
                    </button>
                </Link>            <Link href={'/articles/do-your-smoke-detecters-beep-for-no-reason'}>
                    <button className="btn btn-primary">
                        Smoke Detectors
                    </button>
                </Link>            <Link href={'/articles/are-your-lights-flickering'}>
                    <button className="btn btn-primary">
                        Are Your Lights Flickering?
                    </button>
                </Link>            <Link href={'/articles/maintain-your-heat-pump-as-spring-starts-no-matter-the-weather'}>
                    <button className="btn btn-primary">
                        Maintain Your Heat Pump
                    </button>
                </Link>
            </Link>
        </div>
    )
} 