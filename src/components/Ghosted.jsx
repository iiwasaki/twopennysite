import Banner from "./Banner"
import ghosted_banner from "../assets/banner/ghosted.jpg"


export default function Ghosted() {
    return (
        <>
            <Banner
                src={ghosted_banner}
                alt="Cutout of a drawing of an attic with wooden walls. Cardboard boxes and a dresser are against the wall."
                title="Ghosted"
            />
            <main className="mx-8 my-4 leading-relaxed 2xl:mx-0 md:text-lg flex-1">
                <div>
                    <p className="text-xl font-bold text-center"> Coming soon! </p>
                </div>

            </main>
        </>
    )
}