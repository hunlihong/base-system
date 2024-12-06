const getAllRoutes = (pathname: string) => pathname.split("/");

const getActiveRoute = (pathname: string) => getAllRoutes(pathname)[1];

const checkActiveRoute = (route: string, pathname: string) => {

    if (getActiveRoute(route) === pathname) return true;

    return false;
}

export {getAllRoutes, getActiveRoute, checkActiveRoute}