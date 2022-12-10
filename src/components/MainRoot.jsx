import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function MainRoot() {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}