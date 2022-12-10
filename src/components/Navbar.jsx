import {useState, Fragment} from 'react'
import { Popover, Transition } from "@headlessui/react"
import { usePopper } from 'react-popper'
import {Bars3Icon} from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

export default function Navbar() {
    let [reference, setReference] = useState()
    let [popMenu, setPopMenu] = useState()
    let {styles, attributes} = usePopper(reference, popMenu)
    return (
        <Popover>
            <nav className="relative flex justify-between items-center m-4">
                <Link to="/" className="font-title font-light tracking-widest text-xl">twopennydoodle</Link>
                <Popover.Button className="md:hidden" ref={setReference}><Bars3Icon className="ml-auto h-10 w-10"/></Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Popover.Panel
                        className="bg-pink-900 w-screen"
                        ref={setPopMenu}
                        style={styles.popper}
                        {...attributes.popper}
                    >
                        <div className="flex">
                            <Link>about</Link>
                            <Link>contact</Link>
                        </div>
                    </Popover.Panel>
                </Transition>
            </nav>

        </Popover>
    )
}