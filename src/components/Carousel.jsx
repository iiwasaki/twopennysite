import { Fragment, useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import { Transition } from "@headlessui/react"

{/* A large portion of this Carousel is from Brian Design's YouTube tutorial on how to "Build a
React Image Slider Carousel from Scratch" - Thank you Brian! */}

export default function Carousel({ images }) {


    {/* Chooses which image is current displayed */ }
    const [current, setCurrent] = useState(1)
    const length = images.length;

    {/* Blank if there is something wrong with the data */ }
    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    {/* Controls next/previous slides */ }
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const data = images.map((image, index) => {
        return (
            <Transition
                show={current === index}
                as="img"
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-[0s]"
                leaveFrom="opacity-0"
                leaveTo="opacity-0"
                src={image.full}
                alt={image.alt}
                className="max-h-full"
            >
               
            </Transition>
        )
    })



    return (
        <section className="grid grid-cols-12">
            <div className="z-20 col-start-1 col-end-2 row-start-1 bg-red-500 flex justify-center items-center" onClick={prev} >
                <ArrowLeftIcon className="h-10 w-10" />
            </div>
            <div className="z-20 col-start-12 col-end-12 row-start-1 bg-green-500 flex justify-center items-center" onClick={next}>
                <ArrowRightIcon className="h-10 w-10" />
            </div>
            <div className="bg-gray-600 col-span-full row-span-full h-[500px] md:h-[700px] flex items-center justify-center">
                {data}
            </div>
        </section>
    )
}

