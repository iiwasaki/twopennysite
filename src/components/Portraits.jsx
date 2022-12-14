import Banner from "./Banner"
import portraits from "../assets/banner/portraits.jpg"
import pawns from "../assets/potr/rimworld1.jpg"
import port from "../assets/potr/rimworld2.png"
import asset_gen from "../assets/potr/rimworld3.jpg"
import demo_gif from "../assets/potr/rimworldgif_sm.gif"

export default function Portraits() {
    return (
        <div>
            <Banner
                src={portraits}
                alt="Drawing of the Portraits of the Rim logo: a woman with red hair and a wide brim hat holding a spray can."
                title="Portraits of the Rim"
            />
            <main className="mx-8 my-4 leading-relaxed 2xl:mx-0 md:text-lg">
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg">Overview of the Game</h2>
                    <div className="flex flex-col gap-6 md:flex-row 2xl:mx-4">
                        <div className="flex flex-col items-center md:w-1/3">
                            <img src={pawns}
                                className="self-center"
                                alt="Image of two pawns of a character named Tail in Rimworld"
                            />
                            <p className="text-sm text-center"> The pawn for the character "Tail"</p>
                        </div>
                        <p className="leading-relaxed md:w-2/3">Rimworld is a space-western, colony-management game created by Ludeon Studios that utilizes the Unity engine. Branded as a "story generator", Rimworld tells the narratives of randomly generated colonists and their adventures (and often mis-adventures) across a titular rimworld. Rimworld shows its diverse collection of colonists (often dubbed as "pawns") as small, armless sprites viewed as if from far above by the player. These pawns can experience a lifetime of struggle, success, and the scars that reflect their stories. Despite the deep storytelling and emotional impact these small sprites can create, visual record-keeping is kept to a minimum. With this in mind, in May 2022 creation of Portraits of the Rim began.</p>
                    </div>
                </section>
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg"> THE MOD </h2>
                    <div className="flex flex-col md:flex-row md:h-min gap-6 2xl:mx-4">
                        <p className="leading-relaxed md:w-2/3"> At its core, Portraits of the Rim is a portrait generator that pulls from the pre-existing character sprites and creates a corresponding, dynamic character portrait. Generation of these portraits is done through a layering system much like a paper doll: a base is generated that includes a head and neck upon which layers and layers of individual assets are placed. With over 30 layers and a hierarchy that allows for complex combinations of hair, scars, genetic alterations, and clothing that look cohesive when placed, Portraits of the Rim is intended to show the breadth of character that the base game provides. </p>
                        <div className="flex flex-col items-center md:w-1/3">
                            <img
                                src={port}
                                alt="Drawn portrait of a character named Tail in Rimworld"
                                className="self-center"
                            />
                            <p className="text-sm text-center"> The generated portrait of "Tail" above</p>
                        </div>

                    </div>
                </section>
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg"> ASSET GENERATION </h2>
                    <div className="flex flex-col md:flex-row gap-6 2xl:mx-4">
                        <div className="flex flex-col items-center md:w-1/3">
                            <img src={asset_gen}
                                className="self-center"
                                alt="A work in progress drawing of a man with horns"
                            />
                            <p className="text-sm text-center mt-0 pt-0"> A work in progress view of asset generation</p>
                        </div>
                        <p className="md:w-2/3">From the base game alone, Portraits of the Rim generates over 800 unique assets with essentially infinite combinations to create individual portraits. In addition to the base game, the thriving mod community of Rimworld provides a near limitless amount of further customization. In addition, pawns can age from infancy to elderhood, providing another challenge in terms of consistency across assets and their function/placement on the portraits. To balance this need of cohesion without compromising the uniqueness of different gender identity and age, several different sizes and permutations of certain assets were also created. This has required extensive balancing on what is feasible and what is necessary in terms of asset creation on the mod. In addition, a grid system was created to provide guidelines for the location of assets relative to one another, allowing for consistency across demographics. In order to help reduce bias and "same-face syndrome", faces and expressions were pulled from <span className="italic">6 Billion Others</span>, a book of portraits from photographer Yann Arthus-Bertrand.</p>
                    </div>
                </section>
                <section className="my-2">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg"> Release </h2>
                    <div className="flex flex-col md:flex-row gap-6 2xl:mx-4">
                        <p className="md:w-2/3">Portraits of the Rim is planned to be released in early 2023 with the help of Oskar Potocki, a graphic designer and leader of the Vanilla Expanded series, and Taranchuk, a programmer well-known in the Rimworld modding community for his work. Oskar has provided coordination with Taranchuk, continual feedback, advice, as well as very appreciated words of encouragement. Taranchuk programmed the framework for the mod within Rimworld. By time of release, Portraits of the Rim will have well over 1000 unique assets pulling from Rimworld itself and the Vanilla Expanded mod series.</p>
                        <div className="flex flex-col items-center md:w-1/3">
                            <img
                                src={demo_gif}
                                alt="A slide show GIF image of various faces that are possible to generate using Portraits of the Rim"
                                className="self-center max-h-[250px]"
                            />
                            <p className="text-sm text-center"> Sample faces possible with Portraits of the Rim</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg"> Future Plans </h2>
                    <div className="flex flex-col md:flex-row gap-6 2xl:mx-4">
                        <p>Portraits of the Rim is intended to show the stories of all players and pawns. This means that it will include the many, many other aesthetic mods generated by the community. No date can be set on when the mod is "completed" and all unique assets are generated, but updates are planned to include these community mods.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}