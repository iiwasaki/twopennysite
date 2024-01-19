import Carousel from "./Carousel"
import Banner from "./Banner"
import carousel_chars from "../assets/chars/carousel_chars"
import char_banner from "../assets/banner/characters.jpg"

export default function Characters() {

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

            </main>
        </>


    )
}