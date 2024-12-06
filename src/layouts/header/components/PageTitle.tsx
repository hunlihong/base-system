import {useLocation} from "react-router-dom";
import {getActiveRoute} from "../../../services/utils/routeHelper";

const PageTitle = () => {
    const {pathname} = useLocation();
    const pageTitle = getActiveRoute(pathname) || "Dashboard";

    return <h3 className="text-capitalize">{pageTitle}</h3>
}

export default PageTitle