import GalleryImage from "./GalleryImage"
import characters from "../assets/chars/characters"

export default function Characters() {

    const renderChars = characters.map(image => {
        return (
            <GalleryImage
                thumb={image.thumb}
                full={image.full}
                alt={image.alt}
            />
        )
    })

    return (
        <main className="flex-1">
            <div className="flex flex-wrap gap-6">
                {renderChars}
            </div>
        </main>
        
    )
}