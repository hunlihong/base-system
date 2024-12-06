import PageTitle from "./components/PageTitle";
import Header from "./components/Header";
import PageBreadcrumb from "./components/PageBreadcrumb";

const AppHeader = () => {
    return <div>
        <Header/>
        <div className="px-4 pt-3 pb-0">
            <PageTitle/>
            <PageBreadcrumb/>
        </div>
    </div>
}

export default AppHeader