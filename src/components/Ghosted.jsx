import Banner from "./Banner"
import { LazyLoadImage } from "react-lazy-load-image-component"

/* Image assets */
import ghosted_banner from "../assets/banner/ghosted.jpg"
import guin_rules from "../assets/ghosted/animation_rules.jpg"
import floorplan from "../assets/ghosted/compref.png"
import prop1 from "../assets/ghosted/prop1.png"
import prop2 from "../assets/ghosted/prop2.png"
import prop3 from "../assets/ghosted/prop3.png"
import prop4 from "../assets/ghosted/prop4.png"
import prop5 from "../assets/ghosted/prop5.png"
import indicator from "../assets/ghosted/indicator.gif"
import phasing_1 from "../assets/ghosted/phasing.gif"
import phasing_2 from "../assets/ghosted/phasing2.gif"
import regular_guin from "../assets/ghosted/gif.gif"
import transform from "../assets/ghosted/final.gif"
import ghostform from "../assets/ghosted/ghostform.gif"
import heightchart from "../assets/ghosted/height_chart.jpg"
import dweller from "../assets/ghosted/dweller_rules.jpg"



export default function Ghosted() {
    return (
        <>
            <Banner
                src={ghosted_banner}
                alt="Cutout of a drawing of an attic with wooden walls. Cardboard boxes and a dresser are against the wall."
                title="Ghosted"
            />
            {/* About the Game */}
            <main className="mx-8 my-4 leading-relaxed 2xl:mx-0 md:text-lg flex-1">
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">About the Game</h2>
                    <div className="flex flex-col gap-6 md:flex-row 2xl:mx-4">
                        <div className="flex flex-col items-center md:w-1/3">
                            <a href={guin_rules}>
                                <LazyLoadImage src={guin_rules}
                                    className="self-center"
                                    alt="Image of concept art and animation rules for Guin, a blob-like ghost character."
                                />
                            </a>
                            <p className="text-sm text-center"> Animation rules for Guin, the main character of the game.</p>
                        </div>
                        <p className="leading-relaxed md:w-2/3">Ghosted is a Unity-based, isometric puzzle game with a sneaking mechanic (think Untitled Goose Game), branching narratives, and a calm, lofi aesthetic. The game tells the story of Guin, a ghost who has been haunting the same house since her death over a hundred years ago and who now seeks to move on to the Afterlife. Unfortunately, she has significant unfinished business and personal fulfillment to attend to before she can pass onward. In order to fill her existential quota, she must complete a series of tasks and objectives that orbit around the current tenants of the house, a family who is navigating their own struggles and successes with identity, connection, and community. Throughout the game, Guin can “haunt” or “help” objects in the family’s life in order to reach her own objectives. The manner through which Guin seeks to solve the puzzles will ultimately shift the family’s own fate and story. Ghosted is a story about consequences and community, and a reminder that even when we feel like we are a “ghost” in the lives of others, our presence is never truly gone. </p>
                    </div>
                </section>

                {/* Development of the game */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Development of the Game</h2>
                    <div className="flex flex-col md:flex-row md:h-min gap-6 2xl:mx-4">
                        <p className="leading-relaxed">Development of the game began during the winter of 2021. My role within the project was as lead art director, animator, and sprite designer. I oversaw the work of the lead character concept artist, Taru Tillman, and environmental artist, Mike Sidnor. All images and animations below are of my own work. If you are interested further in looking at the character concept work by Taru, you can see it at her website: <a className="font-bold text-indigo-700" href="https://taru-tillman.wixsite.com">https://taru-tillman.wixsite.com.</a></p>
                    </div>
                </section>

                {/* Art Design and Aesthetic */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Art Design and Aesthetic</h2>
                    <div className="flex flex-col md:flex-row md:h-min gap-6 2xl:mx-4">
                        <div className="leading-relaxed md:w-2/3">
                            <p>Inspiration for the art direction of Ghosted came from popular lofi aesthetics, ligne claire, and retro anime in order to foster the contemplative, maximalist, and ultimately inviting atmosphere of the game.</p>
                            <p className="my-4">The house was modelled after turn-of-the-century craftsman houses. Initial floorplan design made by Mike Sidnor, environment designer, and floor textures and various windows and doors were created by Taru Tillman, lead character concept artist. Wall textures, lighting, and rendering completed by me. </p>
                        </div>
                        <div className="flex flex-col items-center md:w-1/3">
                            <a href={floorplan}>
                                <LazyLoadImage
                                    src={floorplan}
                                    alt="Isometric view of a see-through floor plan view of the house, including designs for the walls, flooring, and windows."
                                    className="self-center"
                                />
                            </a>
                            <p className="text-sm text-center">Blank floorplan of the homebase/house of the Martinez family.</p>
                        </div>
                    </div>
                </section>

                {/* Prop Design */}

                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Setting and Goals of Prop Design </h2>
                    <div className="flex flex-col gap-6 md:flex-row 2xl:mx-4">
                        <div className="flex flex-col items-center md:w-1/3">
                            <a href={prop2}>
                                <LazyLoadImage src={prop2}
                                    className="self-center"
                                    alt="Drawing of a water heater pot, coffee press, and mug."
                                />
                            </a>
                            <p className="text-sm text-center">Prop coffee making kit used for the game.</p>
                        </div>
                        <p className="leading-relaxed md:w-2/3">The setting of Ghosted takes place in a small, run-down New England town. The town’s community is fairly connected with one another, and it is common to see people settle down in the area out of comfort and familiarity, often brushing their own aspirations aside. The characters and story are contemporary with the times, although there is somewhat of a lag in terms of fashion and ubiquity of technology due to the nature of the small town. </p>

                    </div>
                    <div className="flex gap-6 my-4 items-center ">

                        <div className="w-1/3">
                            <a href={prop1}>
                                <LazyLoadImage src={prop1}
                                    alt="Drawing of a chair used in game."
                                    className="max-h-[200px] mx-auto"
                                />
                            </a>
                        </div>
                        <div className="w-1/3">
                            <a href={prop3}>
                                <LazyLoadImage src={prop3}
                                    alt="Drawing of a wooden table."
                                    className="max-h-[200px] mx-auto"
                                />
                            </a>
                        </div>
                        <div className="w-1/3">
                            <a href={prop4}>
                                <LazyLoadImage src={prop4}
                                    alt="Drawing of a kitchen sink with soap, dishes, and bottles around it."
                                    className="max-h-[200px] mx-auto"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="my-4 flex flex-col md:flex-row md:h-min gap-6 2xl:mx-4">
                        <div className="leading-relaxed md:w-2/3">
                            <p>Outside of distinct character design and aesthetic, props and set design of the game will followed the principle goal of meeting aesthetics and reflecting the character of the space. Since so much of the game is contingent on interacting with objects, great effort was put in to show the personality of the family implicitly through the space they live in - trying to make the environment as much of a character as the characters themselves.</p>
                        </div>
                        <div className="flex flex-col items-center md:w-1/3">
                            <a href={prop5}>
                                <LazyLoadImage
                                    src={prop5}
                                    alt="Drawing of the stairs used in-game."
                                    className="self-center max-h-[200px]"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Character animation */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Character Design and Animation</h2>
                    <div className="flex flex-col gap-6 md:flex-row 2xl:mx-4">
                        <div className="flex flex-col items-center md:w-1/2">
                            <div className="flex flex-row gap-4">
                                <a href={indicator}>
                                    <LazyLoadImage src={indicator}
                                        className="self-center h-[200px]"
                                        alt="Drawn animation of Guin next to a wall with a circular indicator for interactivity."
                                    />
                                </a>
                                <a href={phasing_1}>
                                    <LazyLoadImage src={phasing_1}
                                        className="self-center h-[200px]"
                                        alt="Drawn animation of Guin phasing into a wall."
                                    />
                                </a>
                                <a href={phasing_2}>
                                    <LazyLoadImage src={phasing_2}
                                        className="self-center h-[200px]"
                                        alt="Drawn animation of Guin phasing out of a wall."
                                    />
                                </a>

                            </div>

                            <p className="text-sm text-center">Animation samples of Guin phasing in and out of the wall.</p>
                        </div>
                        <p className="leading-relaxed md:w-1/2">Character design for the majority of the cast was completed by Taru Tillman, the lead character designer on the project. In order to keep to the "Halloween coziness", the many monsters and characters throughout the game were designed to be as equally unsettling as  they were charming. After the character design stage, sprite design, animation rules, and ultimately the animations themselves were my responsibility. </p>
                    </div>
                    <div className="flex gap-6 my-4 items-center ">

                        <div className="w-1/3">
                            <a href={regular_guin}>
                                <LazyLoadImage src={regular_guin}
                                    alt="Drawn animation of the ghost, Guin, in a mode visible to humans wearing a sheet in an idle bobbing motion."
                                    className="max-h-[200px] mx-auto"
                                />
                            </a>
                        </div>
                        <div className="w-1/3">
                            <a href={transform}>
                                <LazyLoadImage src={transform}
                                    alt="Drawn animation of Guin spinning to transform into an incorporeal ghost form with a translucent glow."
                                    className="max-h-[200px] mx-auto"
                                />
                            </a>
                        </div>
                        <div className="w-1/3">
                            <a href={ghostform}>
                                <LazyLoadImage src={ghostform}
                                    alt="Drawn animation of Guin in an idle bobbing motion as a ghost."
                                    className="max-h-[200px] mx-auto"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                {/** Character sprite design */}

                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Character Sprite Design</h2>
                    <div className="flex flex-col my-4 md:flex-row md:h-min gap-6 2xl:mx-4">
                        <div className="leading-relaxed">
                            <p>Concept design sketches provided by Taru Tillman were translated into overworld sprites that fit the design rules laid out at the beginning of game development.</p>
                        </div>
                    </div>
                    <div className="flex items-center md:h-min gap-6 my-4 2xl:mx-4">
                        <div className="md:w-1/2 flex flex-col items-center">
                            <a href={heightchart}>
                                <LazyLoadImage
                                    src={heightchart}
                                    alt="Drawing of five characters in Ghosted next to each other."
                                    className="self-center"
                                />
                            </a>
                            <p className="text-sm text-center">Height chart of some of the characters from Ghosted.</p>
                        </div>
                        <div className="md:w-1/2 flex flex-col items-center">
                            <a href={dweller}>
                                <LazyLoadImage
                                    src={dweller}
                                    alt="Drawing of character rules for Dweller, a lanky monster living in the basement."
                                    className="self-center"
                                />
                            </a>
                            <p className="text-sm text-center">Animation rules for Dweller, a monster living in the basement.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}