import { LazyLoadImage } from "react-lazy-load-image-component"


export default function Banner(props) {
    return (
        <div className="grid  h-[25vh] md:h-[300px] bg-black">
            <LazyLoadImage
                src={props.src}
                alt={props.alt}
                className="w-0 h-0 min-w-full min-h-full object-cover col-start-1 row-start-1 opacity-50 saturate-50"
            />
            <h1
                className="uppercase z-10 m-auto col-span-full row-span-full text-slate-100 text-center p-6 md:p-1 font-feature italic tracking-wide font-extralight text-shadow-noblur shadow-pink-700/50 text-[7vw] md:text-6xl"
            >
                {props.title}
            </h1>
        </div>
    )
}