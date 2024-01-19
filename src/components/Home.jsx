import Feature from "./Feature"
import { Link } from "react-router-dom"
import portraits from "../assets/front/portraits.jpg"
import characters from "../assets/front/characters.jpg"
import ghosted from "../assets/front/ghosted.jpg"
import animations from "../assets/front/anims.jpg"
import temp from "../assets/chars/carousel/eleven.jpg"
import de from "../assets/front/de.jpg"

export default function Home() {
    return (
        <div>
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
                        <h4 className="p-2 md:p-6"><Link to="/about">about</Link></h4>
                        <h4 className="p-2 md:p-6"><Link to="/commissions">commissions</Link></h4>
                        <h4 className="p-2 md:p-6"><Link to="/contact">contact</Link></h4>
                        <img src={temp} className="hidden" />
                    </div>
                </header>

                {/* Right side */}
                <div className="md:w-1/2">
                    <div className="flex flex-col divide-y-2 md:justify-evenly md:min-h-screen divide-pink-600/40">
                        <Feature
                            url={de}
                            link="/darkemblem"
                            gridPosition="md:row-start-1"
                            alt="Still image of a flower on a cliffside overlooking a large manor with lightning in the background."
                            heading="DARK EMBLEM"
                            subheading="A dark fantasy tactical RPG"
                        />
                        <Feature
                            url={portraits}
                            link="/portraits"
                            gridPosition="md:row-start-2"
                            alt="Drawing of the Portraits of the Rim logo: a woman with red hair and a wide brim hat holding a spray can."
                            heading="PORTRAITS OF THE RIM"
                            subheading="A portrait generation mod for RimWorld."
                        />
                        <Feature
                            url={ghosted}
                            link="/ghosted"
                            gridPosition="md:row-start-4"
                            alt="Drawing of an empty attic. "
                            heading="GHOSTED"
                            subheading="An isometric, lofi-style puzzle game about a ghost named Guin."
                        />
                        <Feature
                            url={characters}
                            link="/characters"
                            gridPosition="md:row-start-3"
                            alt="Drawing of a girl in a dress standing in front of an Eldritch horror."
                            heading="CHARACTERS"
                            subheading="Commissions and original characters."
                        />
                        <Feature
                            url={animations}
                            link="/animations"
                            gridPosition="md:row-start-5"
                            alt="Storyboard of an animation loop for a ghost sprite in a video game"
                            heading="ANIMATIONS"
                            subheading="Video game animations and sprites"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}