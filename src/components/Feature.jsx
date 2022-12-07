export default function Feature(props){
    return (
        <div className={`grid bg-black md:transition-all md:duration-700 aspect-square md:aspect-auto md:flex-1 md:hover:grow-[15] ${props.gridPosition} group`}>

            <img
                className="w-0 h-0 min-w-full min-h-full object-cover col-start-1 row-start-1 opacity-50 aspect-square contrast-100 md:saturate-50 md:group-hover:saturate-200"
                src={`${props.url}`}
                alt={`${props.alt}`}
            />
            <section className="z-10 m-auto col-span-full row-span-full text-slate-100 text-center p-6 md:p-1">
                <h1 className="font-feature italic tracking-wide font-extralight text-shadow-noblur shadow-pink-700/50 text-[7vw] md:text-[3vw]"> {props.heading} </h1>
                <p className="font-light text-sm text-shadow shadow-black pt-6 md:hidden md:group-hover:block md:px-8"> {props.subheading} </p>
            </section>
        </div>
    )
}