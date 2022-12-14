import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainRoot() {
    return (
        <div className="min-h-screen flex flex-col m-0 md:max-w-screen-2xl md:mx-auto">
            <Navbar/>
            <Outlet />
            <Footer />
        </div>
    )
}