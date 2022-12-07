export default function Feature(props){
    return (
        <div className="grid place-content-center bg-indigo-900">
            <img
                className="col-span-full row-span-full opacity-50 h-auto w-100"
                src={`${props.url}`}
                alt={`${props.alt}`}
            />
            <section className="z-10 m-auto col-span-full row-span-full text-slate-200 text-center p-6">
                <h1 className="font-bold text-[6vw] text-shadow shadow-black pb-5"> {props.heading} </h1>
                <p className="font-light text-sm text-shadow shadow-black"> {props.subheading} </p>
            </section>
        </div>
    )
}