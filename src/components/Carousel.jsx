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
                key={image.id}
                show={current === index}
                as="div"
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-[0s]"
                leaveFrom="opacity-0"
                leaveTo="opacity-0"
                className="h-full relative"
            >
                <img
                    src={image.full}
                    alt={image.alt}
                    className="max-h-full"
                />
                <div className="absolute bottom-4 bg-black/60 text-center w-full p-1">
                    <p className="text-slate-200 text-shadow shadow-black text-small md:text-xl"> {image.caption} </p>
                </div>
                
            </Transition>
        )
    })



    return (
        <section className="py-4 grid grid-cols-9 md:grid-cols-12 bg-slate-800 shadow-lg shadow-gray-700 rounded-lg">
            <div className="z-20 col-start-1 col-end-2 row-start-1 transition-colors duration-500 md:hover:bg-slate-700 flex justify-center items-center group rounded-l-lg" onClick={prev} >
                <ArrowLeftIcon className="w-1/2 text-slate-200 transition duration-500 md:group-hover:scale-125 md:group-hover:text-slate-200 md:group-hover:bg-inherit" />
            </div>
            <div className="z-20 col-start-9 col-end-9 md:col-start-12 md:col-end-12 row-start-1 transition-colors duration-500 md:hover:bg-slate-700 flex justify-center items-center group rounded-r-lg" onClick={next}>
                <ArrowRightIcon className="w-1/2 text-slate-200 transition duration-500 md:group-hover:scale-125 md:group-hover:text-slate-200 md:group-hover:bg-inherit" />
            </div>
            <div className="col-start-2 col-end-9 md:col-end-12 row-start-1 h-[500px] md:h-[700px] flex items-center justify-center">
                {data}
            </div>
        </section>
    )
}

