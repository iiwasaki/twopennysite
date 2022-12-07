import Feature from "./Feature"
import portraits from "../assets/front/portraits.png"
import characters from "../assets/front/characters.png"
import ghosted from "../assets/front/ghosted.png"
import misc from "../assets/front/misc.png"

export default function Home(){
    return (
        <div className="bg-amber-500 flex flex-col md:flex-row min-h-screen">
            {/* Left side */}
            <header className="font-title md:w-1/2 text-center p-4">
                <h1 className="text-[8vw] m-3 tracking-widest font-extralight">
                    <span className="md:block">two</span>
                    <span className="md:block">penny</span>
                    <span className="md:block">doodle</span>
                </h1>
                <hr className="my-4 mx-auto w-2/3 border-indigo-800"/>
                <div className="">
                    <h4 className="p-2"> About </h4>
                    <h4 className="p-2"> Contact </h4>
                </div>
            </header>

            {/* Right side */}
            <div className="md:w-1/2">
                <div className="flex flex-col">
                    <Feature
                        url={portraits}
                        alt="Drawing of the Portraits of the Rim logo: a woman with red hair and a wide brim hat holding a spray can."
                        heading="Portraits of the Rim"
                        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."    
                    />
                    <Feature
                        url={characters}
                        alt="Drawing of a girl in a dress standing in front of an Eldritch horror."
                        heading="Characters"
                        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."    
                    />
                    <Feature
                        url={ghosted}
                        alt="Drawing of an empty attic. "
                        heading="Ghosted"
                        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."    
                    />
                    <Feature
                        url={misc}
                        alt="Drawing of several small logos for a farm."
                        heading="Misc."
                        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Hendrerit gravida rutrum quisque non tellus."    
                    />
                </div>
            </div>
        </div>
    )
}