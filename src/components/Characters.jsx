import Carousel from "./Carousel"
import characters from "../assets/chars/characters"

export default function Characters() {

    return (
        <main className="flex-1">
            <div className="select-none">
                <Carousel
                    images={characters}
                />
            </div>
        </main>
        
    )
}