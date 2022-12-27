import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { XMarkIcon } from "@heroicons/react/24/solid"


export default function FocusedImage({ isOpen, setIsOpen, srcFull, srcCaption, srcAlt }) {
    return (
        <Transition
            show={isOpen}
            as={Fragment}
        >
            <Dialog
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-slate-900/70" aria-hidden="true" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform scale-90 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-90 opacity-0"
                >
                    <div className="fixed inset-0 flex justify-center items-center py-5 px-2">
                        <Dialog.Panel className="max-h-full max-w-full flex">
                            <Dialog.Title className="sr-only"> Image View </Dialog.Title>
                            <Dialog.Description className="sr-only"> {srcAlt} </Dialog.Description>
                                <div className="text-center p-1 fixed bg-black/80 bottom-0 left-0 w-full ">
                                    <p className="text-slate-200 bg-black/80 text-shadow shadow-black text-xl inline-block px-10 py-1"> {srcCaption} </p>
                                </div>
                                <div className="text-center p-1 text-slate-50 fixed shadow shadow-black bg-black/80 rounded-lg" onClick={() => setIsOpen(false)}>
                                    <XMarkIcon className="h-10 w-10" />
                                </div>
                                <LazyLoadImage
                                    src={srcFull}
                                    className="object-contain"
                                />
                                
                            

                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

{/* enter="transition duration-1000 ease-in-out"
            enterFrom="transform scale-90 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
leaveTo="transform scale-95 opacity-0"*/}