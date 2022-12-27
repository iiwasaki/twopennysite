import about_pic from "../assets/about/temp.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"


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
            <div className="md:w-1/2">
                <p className="leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi non odio dignissim feugiat in quis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at magna ornare, facilisis elit ac, dignissim dolor. Sed rutrum diam ac felis posuere accumsan. Suspendisse enim eros, efficitur eu nisi ut, dapibus porttitor sapien. Aliquam porttitor neque in odio iaculis, ornare tristique mi scelerisque. Nunc dignissim lacus justo. Nullam sit amet mauris quis dui auctor faucibus mollis quis sapien. Etiam feugiat dui id aliquam viverra. In faucibus at eros vitae malesuada. Ut malesuada erat id est placerat, nec faucibus enim elementum. Nullam ac ultrices lorem, eu bibendum velit. Integer vel lectus interdum, tempor eros eu, porttitor odio. Praesent at feugiat neque. Quisque a tempor ante.
                </p>
            </div>
        </main>
    )
}