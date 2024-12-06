import {Outlet} from "react-router-dom"

const AppContent = () => {
    return <div className="p-4">
        <Outlet/>
    </div>
}

export default AppContent