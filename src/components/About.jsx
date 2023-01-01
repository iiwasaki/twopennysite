import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import logo from "../assets/about/twopennylogo.png"

export default function About() {
    return (
        <main className="flex-1 flex flex-col items-center gap-10 mx-10 md:mx-4 md:flex-row">
            {/* Left section */}
            <div className="md:w-1/2 text-center">
                <h1 className="text-title font-extralight tracking-wide leading-normal my-4 text-5xl md:text-7xl">
                    <span className="md:block md:my-4">About </span>
                    <span className="md:block md:my-4">TwoPenny</span>
                </h1>
            </div>

            {/* Right section */}
            <div className="md:w-1/2 flex flex-col gap-10 items-center">
            <LazyLoadImage
                    src={logo}
                    alt="TwoPennyDoodle logo"
                    className="h-[150px]"
                />
                <p className="leading-relaxed text-lg">
                    Howdy! I’m TwoPenny, a digital artist in the Pacific Northwest of the United States. While not formally trained, I have worked for almost a decade on various art projects, commissions, and personal projects. Much of my professional work has been in character commissions for Dungeons and Dragons, RWBY, and World of Warcraft, but I have also worked extensively in video game asset design, creation, and animation on my own time. If you have a bigger project (especially for video game art), please feel free to <Link to="/contact" className="font-bold text-indigo-700">reach out</Link>! I’m always excited to talk shop and gauge if my work is a good fit for your vision!
                </p>
                
            </div>
        </main>
    )
}