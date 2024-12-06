import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import {SidebarModel} from "../layouts/sidebar/sidebar/model";
import {sidebars} from "../layouts/sidebar/sidebar";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AppRoute = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                {sidebars.map((sidebar: SidebarModel) => {
                    const {id, path, element} = sidebar;
                    return <Route key={id} path={path} element={element}/>
                })}

                <Route index element={<Navigate to="/"/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Route>

            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
}

export default AppRoute