import {useContext} from "react";
import {Button} from "react-bootstrap"
import {RiArrowLeftDoubleFill} from "react-icons/ri"
import {RiArrowRightDoubleFill} from "react-icons/ri"
import ProfileDropdown from "./ProfileDropdown";
import {LayoutContext} from "../../AppLayout";

const Header = () => {
    const {onShow} = useContext(LayoutContext);

    const toggleExpandSidebar = (e: any) => {
        const sidebar = document.querySelector("#app-sidebar") as HTMLElement;
        e.currentTarget.classList.toggle("hide");
        sidebar.classList.toggle("hide");
    }

    return <header id="app-header"
                   className="px-4 border-bottom w-100 d-flex gap-3 justify-content-between align-items-center">
        <Button variant="primary" size="sm" className="d-none d-lg-block p-1 toggle-sidebar-wrapper"
                onClick={toggleExpandSidebar}>
            <RiArrowLeftDoubleFill className="fs-3 toggle-sidebar-icon"/>
        </Button>
        <Button variant="primary" size="sm" className="d-block d-lg-none p-1 toggle-sidebar-wrapper" onClick={onShow}>
            <RiArrowRightDoubleFill className="fs-3 toggle-sidebar-icon"/>
        </Button>
        <ProfileDropdown/>
    </header>
}

export default Header