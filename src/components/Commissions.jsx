import { Link } from "react-router-dom"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function Commissions() {
    return (
        <main className="flex-1 flex flex-col items-center gap-10 mx-10 md:mx-4 md:flex-row">
            {/* Left section */}
            <div className="md:w-1/2 text-center">
                <h1 className="text-title font-extralight tracking-wide leading-normal my-4 text-5xl md:text-7xl">
                    <span className="md:block md:my-4">TwoPenny </span>
                    <span className="md:block md:my-4">Commissions</span>
                </h1>
            </div>

            {/* Right section */}
            <div className="md:w-1/2 text-medium leading-relaxed">
                <p className="">
                For all commission work, after the initial email and discussion of scope, a price estimate will be provided. Half of the commission will be paid prior to the initial sketch, and once the sketch is completed and it meets what you’re looking for, I’ll send you the invoice for the second half. Once I get that, I’ll get going with the rest of the work. Pricing for character commissions start at:
                </p>
                <section>
                    <Disclosure
                        as="div"
                        className="mx-1 rounded p-2"
                    >
                        <Disclosure.Button className="w-full text-left rounded flex items-center bg-indigo-100 px-4 py-2 shadow-md">
                            <p className="align-middle text-lg">Portraits</p>
                            <ChevronRightIcon className="h-4 ml-auto ui-open:rotate-90 ui-open:transform" />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-300 ease-out"
                            enterFrom="transform -translate-y-8 opacity-0"
                            enterTo="transform translate-y-0 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform translate-y-0 opacity-100"
                            leaveTo="transform -translate-y-4 opacity-0"
                        >
                            <Disclosure.Panel>
                                <ul className="m-2">
                                    <li>Lineart - $20</li>
                                    <li>Flat color - $30</li>
                                    <li>Cel shaded - $40</li>
                                    <li>Full render - $50</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>

                    </Disclosure>
                    <Disclosure
                        as="div"
                        className="mx-1 rounded p-2"
                    >
                        <Disclosure.Button className="w-full text-left rounded flex items-center bg-indigo-100 px-4 py-2 shadow-md">
                            <p className="align-middle text-lg">Bust</p>
                            <ChevronRightIcon className="h-4 ml-auto ui-open:rotate-90 ui-open:transform" />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-300 ease-out"
                            enterFrom="transform -translate-y-8 opacity-0"
                            enterTo="transform translate-y-0 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform translate-y-0 opacity-100"
                            leaveTo="transform -translate-y-4 opacity-0"
                        >
                            <Disclosure.Panel>
                                <ul className="m-2">
                                    <li>Lineart - $60</li>
                                    <li>Flat Color - $80</li>
                                    <li>Cel Shaded - $100</li>
                                    <li>Full Render - $120</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                    <Disclosure
                        as="div"
                        className="mx-1 rounded p-2"
                    >
                        <Disclosure.Button className="w-full text-left rounded flex items-center bg-indigo-100 px-4 py-2 shadow-md">
                            <p className="align-middle text-lg">Full</p>
                            <ChevronRightIcon className="h-4 ml-auto ui-open:rotate-90 ui-open:transform" />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-300 ease-out"
                            enterFrom="transform -translate-y-8 opacity-0"
                            enterTo="transform translate-y-0 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform translate-y-0 opacity-100"
                            leaveTo="transform -translate-y-4 opacity-0"
                        >
                            <Disclosure.Panel>
                                <ul className="m-2">
                                    <li>Lineart - $80</li>
                                    <li>Flat Color - $100</li>
                                    <li>Cel Shaded - $120</li>
                                    <li>Full Render - $150</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                    <p> Samples of various options can be seen in the <Link to="/characters" className="font-bold text-indigo-700">Characters page</Link>.</p>
                    <p className="my-4">
                        Backgrounds vary in terms of pricing based on expected complexity. All character art gets a one-color background (as well as transparent) at no charge. Similarly, if you are interested in a scene (such as in a tavern or landscape with characters), prices will vary. Additional characters get a 10% discount if they are in the same illustration.
                    </p>
                </section>
                <section className="my-4">
                    <p>For larger projects (video game asset design/creation, animations, etc.), send an inquiry discussing the scope of the project, what you’re looking for in terms of work and timeline, and we can negotiate compensation.</p>
                </section>
            </div>
        </main>
    )
}