import FocusedImage from "./FocusedImage"
import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function GalleryImage( props ) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex-auto hover:shadow-md flex py-2 hover:scale-110 transition duration-300 ease-in-out">
            <LazyLoadImage
                src={props.thumb}
                alt="Alt text temp"
                className="mx-auto"
                onClick={() => setIsOpen(true)}
            />
            <FocusedImage
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                srcFull={props.full}
                srcCaption={props.caption}
            />
        </div>
    )
}