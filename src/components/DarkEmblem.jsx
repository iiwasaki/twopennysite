import Banner from "./Banner"
import debanner from "../assets/banner/de.jpg";
import class1 from "../assets/de/class1.jpg"
import class2 from "../assets/de/class2.jpg"
import class3 from "../assets/de/class3.jpg"
import circe from "../assets/de/circe.jpg"
import malik from "../assets/de/malik.jpg"
import rigel from "../assets/de/rigel.jpg"
import acolyte from "../assets/de/acolyte.jpg"
import apprentice from "../assets/de/apprentice.jpg"
import mender from "../assets/de/mender.jpg"
import dex from "../assets/de/dex.jpg"
import city from "../assets/de/city.jpg"
import crypt from "../assets/de/crypt.jpg"
import slashcritmalik from "../assets/de/slashcritmalik.gif"
import skewercritangelo from "../assets/de/skewercritangelo.gif"
import fight3 from "../assets/de/fight3.gif"

import { LazyLoadImage } from "react-lazy-load-image-component"


export default function DarkEmblem() {
    return (
        <>
            <Banner
                src={debanner}
                alt="An image of lightning striking behind a manor in the darkness."
                title="Dark Emblem"
            />
            <main className="mx-8 my-4 leading-relaxed 2xl:mx-0 md:text-lg">
                {/* The Project */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">The Project</h2>
                    <div className="flex flex-col gap-6 md:flex-row 2xl:mx-4">
                        <p className="leading-relaxed">Project Dark Emblem is the working title to a 2.5D strategy role-playing game (RPG) with action-RPG elements. Taking place in a grimdark fantasy city lost to time, the game pulls aesthetic cues from titles such as Bloodborne and Curse of Strahd. Conceptualized as a hybrid of the Dark Souls and Fire Emblem franchises, the game utilizes a large cast of characters as they navigate the world in smaller party configurations. My role was that of art lead from March 2023 to December 2023 in order to create a demo to show to investors and to potentially obtain crowdfunding.</p>
                    </div>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <a href={class1}>
                                <LazyLoadImage src={class1}
                                    alt="Image a circle with various runes drawn on it."
                                />
                            </a>
                            <a href={class2}><LazyLoadImage src={class2}
                                alt="Image a circle with various runes drawn on it."
                            /></a>
                            <a href={class3}><LazyLoadImage src={class3}
                                alt="Image a circle with various runes drawn on it."
                            /></a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Class tree UI concepts</p>
                </section>
                {/* Role */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg"> ROLE </h2>
                    <div className="flex flex-col gap-6 md:flex-row 2xl:mx-4">
                        <p className="leading-relaxed">As art lead, I coordinated around half a dozen artists from various disciplines (2D illustrative/concept work, 3D modeling/VFX and environment design, and pixel art/animations). Pipelines for each discipline were regularly created and revised to address the needs of the project as funding opportunities and overarching goals in production surfaced. In addition to weekly meetings with each artist, I regularly met with the programming team to ensure coordination of assets from file to engine. While art direction was ultimately at the discretion of the director, I did lead the concept art team in realizing the directed vision.</p>

                    </div>
                    <div className="flex flex-col gap-6 my-4 md:flex-row 2xl:mx-4">
                        <p className="leading-relaxed">In addition to my role as art lead, I also organized business-related responsibilities during my tenure. Research on benchmark games, Kickstarter campaigns in similar genres, and estimated financial costs provided insight into the feasibility of the project. In addition, I drafted an operator’s agreement, employee contracts, and overall business framework to provide structure to the larger start-up studio should funding goals be met. With this information, I created a larger pipeline that illustrated the entirety of production from the beginning to the end of the game’s development, creating several permutations based on overall funding.</p>
                    </div>
                </section>
                {/* Character Concepts */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg"> Concept art - Character Concepts </h2>
                    <div className="flex flex-col md:flex-row gap-6 2xl:mx-4">
                        <div className="flex flex-col items-center md:w-1/3">
                            <a href={circe}><LazyLoadImage
                                src={circe}
                                className="self-center"
                                alt="Drawing of a female witch in a dark robe."
                            /></a>

                            <p className="text-sm text-center mt-0 pt-0"> Concept art of Circe, the Witch</p>
                        </div>
                        <p className="md:w-2/3">Character design was largely based on Fire Emblem as a reference point. Characters were often directed to be “simple” in design with dark overtones and grunginess to lend credence to the desperate nature of their existence. In addition, each character was designed with a “key item” intended to be used later as plot points. All designs were iterated in several stages, with ultimate direction and approval coming from the director for the game.</p>
                    </div>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-4">
                            <a href={malik}>
                                <LazyLoadImage src={malik}
                                    alt="Drawing of a male with bright green eyes holding two scythes."
                                />
                            </a>
                            <a href={rigel}><LazyLoadImage src={rigel}
                                alt="Drawing of a male in fighter clothes and a blue headband."
                            /></a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Left: Concept art of Malik, the Deserter. Right: Concept art of Rigel, the Soldier </p>
                </section>
                {/* Class Concepts */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Class Concepts</h2>
                    <div className="flex flex-col gap-6 md:flex-row 2xl:mx-4">
                        <p className="leading-relaxed">Much like Fire Emblem, characters could change “classes” akin to switching jobs. With these changes, a class-specific costume swap was to be incorporated. Starting from three core branches of classes (might, magic, and dexterity) with each containing three base classes respectively, players could choose to promote their units to new classes as the game progressed. In order to create distinct designs, basic shapes and greyscale color palettes were used to ensure distinct starting silhouettes for the base classes.</p>
                    </div>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-4">
                            <a href={acolyte}>
                                <LazyLoadImage src={acolyte}
                                    alt="Drawing of two tattooed mages in tattered robes."
                                />
                            </a>
                            <a href={apprentice}><LazyLoadImage src={apprentice}
                                alt="Drawing of two mages in formal attire."
                            /></a>
                            <a href={mender}><LazyLoadImage src={mender}
                                alt="Drawing of two mages in modest robes."
                            /></a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Magic class concepts (Acolyte, Apprentice, and Mender respectively)</p>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <a href={dex}>
                                <LazyLoadImage src={dex}
                                    alt="Drawing of several fighters in warrior monk style robes."
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Dexterity class concepts (Skirmisher, Thief, and Monk respectively)</p>
                </section>
                {/* Environment */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Environment Concepts</h2>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <a href={city}>
                                <LazyLoadImage src={city}
                                    alt="Drawing of a dark city alleyway with a mysterious silhouette at the far end."
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Environment concept art for the city</p>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <a href={crypt}>
                                <LazyLoadImage src={crypt}
                                    alt="Drawing of a dimly lit crypt with overgrown roots sprouting from the walls."
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Environment concept art for the crypts</p>
                </section>
                {/* Animations */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Animations</h2>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/XGAlobpurNc?si=9y4CbyHkQxlRQMjV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <p className="text-sm text-center">Title screen animation</p>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <a href={slashcritmalik}>
                                <LazyLoadImage src={slashcritmalik}
                                    alt="Animation of a character sprite slashing with a sword."
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Slashing critical strike animation</p>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <a href={skewercritangelo}>
                                <LazyLoadImage src={skewercritangelo}
                                    alt="Animation of a character sprite stabbing with a spear."
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Skewering critical strike animation</p>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <a href={fight3}>
                                <LazyLoadImage src={fight3}
                                    alt="Animation of a character sprite casting a fire spell."
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-center">Fire spell animation</p>
                </section>
            </main>
        </>
    )
}