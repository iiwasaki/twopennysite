import Carousel from "./Carousel"
import Banner from "./Banner"
import GalleryImage from "./GalleryImage"
import bg_chars from "../assets/chars/bg_chars"
import carousel_chars from "../assets/chars/carousel_chars"
import char_banner from "../assets/banner/characters.jpg"

export default function Characters() {

    const bg_works = bg_chars.map((image) => {
        return (
            <GalleryImage
                key={image.id}
                thumb={image.thumb}
                alt={image.alt}
                full={image.full}
                caption={image.caption}
            />
        )

    })

    return (
        <>
            <Banner
                src={char_banner}
                alt="Drawing of the Portraits of the Rim logo: a woman with red hair and a wide brim hat holding a spray can."
                title="Character Gallery"
            />
            <main className="mx-8 my-4 leading-relaxed 2xl:mx-0 md:text-lg flex-1">
                <section className="select-none">
                    <Carousel
                        images={carousel_chars}
                    />
                </section>
                <section className="">
                    <h2 className="uppercase bg-slate-800 italic text-white text-shadow-noblur shadow-pink-700/50 font-title font-light tracking-wider text-3xl p-4 my-4 rounded-lg"> Full Background Works </h2>
                    <div className="flex flex-wrap gap-3">
                        {bg_works}
                    </div>
                </section>

            </main>
        </>


    )
}