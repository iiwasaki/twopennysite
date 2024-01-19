import Banner from "./Banner";
import animbanner from "../assets/banner/anim.jpg";
import afflict from "../assets/animations/ts/afflict.gif";
import assault from "../assets/animations/ts/assault.gif";
import engage from "../assets/animations/ts/engage.gif";
import recover from "../assets/animations/ts/recover.gif";
import secure from "../assets/animations/ts/secure.gif";
import slashcritmalik from "../assets/de/slashcritmalik.gif";
import skewercritangelo from "../assets/de/skewercritangelo.gif";
import fight3 from "../assets/de/fight3.gif";
import malikwalk from "../assets/de/malikwalk.gif";
import regular_guin from "../assets/ghosted/gif.gif"
import transform from "../assets/ghosted/final.gif"
import wallsketch from "../assets/ghosted/wallsketch.gif"

import { LazyLoadImage } from "react-lazy-load-image-component";


export default function Animations() {
    return (
        <>
            <Banner
                src={animbanner}
                alt="Storyboard of an animation loop for a ghost sprite in a video game"
                title="ANIMATIONS"
            />
            <main className="mx-8 my-4 leading-relaxed 2xl:mx-0 md:text-lg">
                {/* Dark Emblem */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Project: Dark Emblem (2023)</h2>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/XGAlobpurNc?si=9y4CbyHkQxlRQMjV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-4">
                            <a href={slashcritmalik}>
                                <LazyLoadImage src={slashcritmalik}
                                    alt="Animation of a character sprite slashing with a sword."
                                />
                            </a>
                            <a href={skewercritangelo}><LazyLoadImage src={skewercritangelo}
                                alt="Animation of a character sprite stabbing with a spear."
                            /></a>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-4">
                            <a href={fight3}>
                                <LazyLoadImage src={fight3}
                                    alt="Animation of a character sprite casting a fire spell."
                                />
                            </a>
                            <a href={malikwalk}>
                                <LazyLoadImage src={malikwalk}
                                    alt="Animation of a character sprite walking in different directions."
                                />
                            </a>
                        </div>
                    </div>
                </section>
                {/* Tower Song */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Tower Song (2023)</h2>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-4">
                            <a href={afflict}>
                                <LazyLoadImage src={afflict}
                                    className="max-h-[200px]"
                                    alt="Animation of three orbs circling to indicate an enemy's intent to afflict a status effect."
                                />
                            </a>
                            <a href={assault}>
                                <LazyLoadImage src={assault}
                                    className="max-h-[200px]"
                                    alt="Animation of three swords moving up and down to indicate an enemy's intent to attack a party."
                                />
                            </a>
                            <a href={engage}>
                                <LazyLoadImage src={engage}
                                    className="max-h-[200px]"
                                    alt="Animation of a single sword moving up and down to indicate an enemy's intent to attack a single character."
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-4">
                            <a href={recover}>
                                <LazyLoadImage src={recover}
                                    className="max-h-[200px]"
                                    alt="Animation of a green plus sign moving up and down to indicate an enemy's intent to recover."
                                />
                            </a>
                            <a href={secure}>
                                <LazyLoadImage src={secure}
                                    className="max-h-[200px]"
                                    alt="Animation of a shield moving up and down to indicate an enemy's intent to use a defensive ability."
                                />
                            </a>
                        </div>
                    </div>
                </section>
                {/* Ghosted */}
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Ghosted (2021)</h2>
                    <div className="flex justify-center gap-6 2xl:mx-4">
                        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-4">
                            <a href={regular_guin}>
                                <LazyLoadImage src={regular_guin}
                                    alt="Animation of a cartoon ghost bobbing up and down."
                                />
                            </a>
                            <a href={transform}><LazyLoadImage src={transform}
                                alt="Animation of a cartoon ghost covered in a sheet spinning and transforming into an invisible version of itself."
                            /></a>
                            <a href={wallsketch}><LazyLoadImage src={wallsketch}
                                alt="Animation of a cartoon ghost phasing through a wall."
                            /></a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}