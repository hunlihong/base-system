import {Offcanvas} from "react-bootstrap"
import InnerSidebar from "./InnerSidebar"
import {useContext} from "react"
import {LayoutContext} from "../AppLayout"

const OffcanvasSidebar = () => {
    const {showSidebar, onHide} = useContext(LayoutContext);

    return <div className="d-block d-lg-none offcanvas-sidebar">
        <Offcanvas show={showSidebar} onHide={onHide} placement="start">
            <Offcanvas.Body className="bg-primary text-white">
                <InnerSidebar/>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
}

export default OffcanvasSidebar