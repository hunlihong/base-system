import React, {useContext} from "react"
import {SidebarModel} from "./sidebar/model"
import {iconVariances, sidebars} from "./sidebar"
import clsx from "clsx"
import IconWrapper from "../../services/icon/IconWrapper"
import {checkActiveRoute} from "../../services/utils/routeHelper"
import {Link, useLocation, useNavigate} from "react-router-dom"
import {LayoutContext} from "../AppLayout"

const InnerSidebar = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {onHide} = useContext(LayoutContext);

    return <React.Fragment>
        <h3 className="sidebar-title mb-4 cursor-pointer" onClick={() => navigate("/")}>LH Amdin</h3>
        <ul className="list-unstyled d-flex flex-column gap-2 w-100">
            {sidebars.map((sidebar: SidebarModel, index: number) => <li key={sidebar.id} className="w-100">
                <Link to={`/${sidebar.path}`} onClick={onHide}
                      className={clsx("sidebar-link d-flex align-items-center rounded w-100", {"active": checkActiveRoute(pathname, sidebar.path)})}>
                    <IconWrapper className={`me-3 fs-5 text-${iconVariances[index]}`}>{sidebar.icon}</IconWrapper>
                    {sidebar.title}
                </Link>
            </li>)}
        </ul>
    </React.Fragment>
}

export default InnerSidebar