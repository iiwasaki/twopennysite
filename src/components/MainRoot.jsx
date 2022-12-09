import { Outlet } from 'react-router-dom'

export default function MainRoot() {
    return (
        <div>
            <div> Hello world! </div>
            <Outlet />
        </div>
    )
}