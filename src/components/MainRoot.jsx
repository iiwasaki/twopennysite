import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function MainRoot() {
    return (
        <div className="md:max-w-screen-2xl md:mx-auto">
            <Navbar/>
            <Outlet />
        </div>
    )
}