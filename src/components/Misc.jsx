import misc_banner from "../assets/banner/misc.jpg"
import Banner from "./Banner"
import GalleryImage from "./GalleryImage"
import misc_art from "../assets/misc/misc_art"

export default function Misc() {

    const misc_works = misc_art.map((image) => {
        console.log(image)
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
                src={misc_banner}
                alt="Logo made of a tessellation of various drawn cartoon animals"
                title="Misc Art"
            />
            <main className="mx-8 my-4 leading-relaxed 2xl:mx-0 md:text-lg flex-1">
                <section className="">
                    <div className="flex flex-wrap gap-3">
                        {misc_works}
                    </div>
                </section>

            </main>
        </>
    )
}