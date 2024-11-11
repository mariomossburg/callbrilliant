
export default function Hero() {
    // const photo = '/assets/construction/construction-one.png'


    const photo = '/assets/hero-photo/hero-photo.png'
    return (
        <div
            className="hero min-h-[50vh] rounded-xl shadow-xl "
            style={{
                backgroundImage: '/assets/construction/hero-photo.png',
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">After 70 years, we've made it easy for you. </h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}