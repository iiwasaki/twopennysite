import Feature from "./Feature"
import { Link } from "react-router-dom"
import portraits from "../assets/front/portraits.png"
import characters from "../assets/front/characters.png"
import ghosted from "../assets/front/ghosted.png"
import misc from "../assets/front/misc.png"

export default function Home() {
    return (
        <div className="bg-indigo-400/60">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left side */}
                <header className="font-title md:w-1/2 text-center p-4">
                    <h1 className="text-[7vw] m-3 tracking-widest font-extralight">
                        <span className="md:block">two</span>
                        <span className="md:block">penny</span>
                        <span className="md:block">doodle</span>
                    </h1>
                    <hr className="my-4 md:mt-4 md:mb-10 mx-auto w-2/3 border-pink-600/40" />
                    <div className="tracking-wider font-light text-lg md:text-[2vw]">
                        <h4 className="p-2 md:p-6">about</h4>
                        <h4 className="p-2 md:p-6"><Link to="/contact">contact</Link></h4>
                    </div>
                </header>

                {/* Right side */}
                <div className="md:w-1/2">
                    <div className="flex flex-col divide-y-2 md:justify-evenly md:min-h-screen divide-pink-600/40">
                        <Feature
                            url={portraits}
                            gridPosition="md:row-start-1"
                            alt="Drawing of the Portraits of the Rim logo: a woman with red hair and a wide brim hat holding a spray can."
                            heading="PORTRAITS OF THE RIM"
                            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."
                        />
                        <Feature
                            url={characters}
                            gridPosition="md:row-start-2"
                            alt="Drawing of a girl in a dress standing in front of an Eldritch horror."
                            heading="CHARACTERS"
                            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."
                        />
                        <Feature
                            url={ghosted}
                            gridPosition="md:row-start-3"
                            alt="Drawing of an empty attic. "
                            heading="GHOSTED"
                            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."
                        />
                        <Feature
                            url={misc}
                            gridPosition="md:row-start-4"
                            alt="Drawing of several small logos for a farm."
                            heading="MISC"
                            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}