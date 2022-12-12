import { useState, Fragment } from 'react'
import { Popover, Transition } from "@headlessui/react"
import { usePopper } from 'react-popper'
import { Bars3Icon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

export default function Navbar() {
    let [reference, setReference] = useState()
    let [popMenu, setPopMenu] = useState()
    let { styles, attributes } = usePopper(reference, popMenu)
    return (
        <Popover as="nav" className="flex justify-between items-center md:items-baseline m-4 md:mx-8 2xl:mx-0">
            <Link to="/" className="font-title font-light tracking-widest text-xl border border-slate-700 px-2 py-1 mb-2">twopennydoodle</Link>
            <Popover.Button className="md:hidden" ref={setReference}><Bars3Icon className="ml-auto h-10 w-10 mb-2" /></Popover.Button>
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
                    className="bg-slate-800 text-white w-screen shadow-lg text-center"
                    ref={setPopMenu}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <div className="flex flex-col text-lg font-light tracking-wide p-2">
                        <Popover.Button as={Link} to="/about" className="py-3">about</Popover.Button>
                        <Popover.Button as={Link} to="/contact" className="py-3">contact</Popover.Button>
                        <Popover.Button as={Link} to="/portraits" className="py-3">portraits of the rim</Popover.Button>
                        <Popover.Button as={Link} to="/characters" className="py-3">characters</Popover.Button>
                        <Popover.Button as={Link} to="/ghosted" className="py-3">ghosted</Popover.Button>
                        <Popover.Button as={Link} to="/misc" className="py-3">misc</Popover.Button>
                    </div>
                </Popover.Panel>
            </Transition>
            <div className="hidden md:flex gap-1 tracking-widest font-light">
                <Link to="/about" className="bg-slate-800  rounded-sm px-4 py-1 text-white ">about</Link>
                <Link to="/contact" className="bg-slate-800 px-4 py-1 text-white">contact</Link>
                <Link to="/portraits" className="bg-slate-800 px-4 py-1 text-white">portraits</Link>
                <Link to="/characters" className="bg-slate-800 px-4 py-1 text-white">characters</Link>
                <Link to="/ghosted" className="bg-slate-800 px-4 py-1 text-white">ghosted</Link>
                <Link to="/misc" className="bg-slate-800 px-4 py-1 text-white">misc</Link>
            </div>
        </Popover>
    )
}