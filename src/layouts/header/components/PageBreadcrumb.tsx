import {Link, useLocation} from "react-router-dom"
import {getAllRoutes} from "../../../services/utils/routeHelper"
import clsx from "clsx";

const PageBreadcrumb = () => {
    const {pathname} = useLocation();

    return <span className="d-flex gap-3">
        {getAllRoutes(pathname).map((route: string, index: number) => <Link key={index} to={`/${route}`}
                                                                            className={clsx("text-capitalize text-decoration-none", {"text-black": index === getAllRoutes(pathname).length - 1})}>{(!(!!index) && !route) ? "Home" : (!route ? "Dashboard" : route.charAt(0).toUpperCase() + route.slice(1))}</Link>)}
    </span>
}

export default PageBreadcrumb