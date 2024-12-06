import {createContext, useEffect, useState} from "react";
import AppHeader from "./header/AppHeader";
import AppContent from "./content/AppContent";
import SidebarWrapper from "./sidebar/SidebarWrapper";

export const LayoutContext = createContext<any>(null);

const AppLayout = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    const onShow = () => setShowSidebar(true);
    const onHide = () => setShowSidebar(false);

    useEffect(() => {
        const handleResizeViewport = () => {
            const width = window.innerWidth;
            if (width > 992) {
                setShowSidebar(false);
            }
        }

        window.addEventListener("resize", handleResizeViewport);

        return () => {
            window.removeEventListener("resize", handleResizeViewport);
        }
    }, [])

    return (
        <LayoutContext.Provider value={{showSidebar, onShow, onHide}}>
            <div className="vw-100 h-100 d-flex gap-0">
                <SidebarWrapper/>
                <div id="main-content" className="vh-100 w-100 overflow-auto">
                    <AppHeader/>
                    <AppContent/>
                </div>
            </div>
        </LayoutContext.Provider>
    )
}

export default AppLayout