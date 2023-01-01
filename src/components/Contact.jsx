import {EnvelopeIcon, CameraIcon} from "@heroicons/react/24/solid" 

export default function Contact() {
    return (
        <main className="flex-1 flex flex-col items-center gap-10 mx-10 md:mx-4 md:flex-row">
            {/* Left section */}
            <div className="md:w-1/2 text-center">
                <h1 className="text-title font-extralight tracking-wide leading-normal my-4 text-5xl md:text-7xl">
                    <span className="md:block md:my-4">TwoPenny </span>
                    <span className="md:block md:my-4">Contact</span>
                </h1>
            </div>

            {/* Right section */}
            <div className="align-baseline md:w-1/2">
                <a className="leading-relaxed text-lg my-6 block" href="mailto:twopennydoodle@gmail.com">
                    <EnvelopeIcon className="h-8 inline-block align-middle"/> twopennydoodle(at)gmail.com
                </a>
                <a className="leading-relaxed text-lg my-6 block" href="https://instagram.com/twopennydoodle">
                    <CameraIcon className="h-8 inline-block align-bottom"/> TwoPennyDoodle on Instagram
                </a>
            </div>
        </main>
    )
}