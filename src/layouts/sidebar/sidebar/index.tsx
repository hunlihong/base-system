import CategoryPage from "../../../pages/category/CategoryPage";
import DashboardPage from "../../../pages/dashboard/DashboardPage";
import PostPage from "../../../pages/post/PostPage";
import RolePage from "../../../pages/role/RolePage";
import TopicPage from "../../../pages/topic/TopicPage";
import UserPage from "../../../pages/user/UserPage";
import {SidebarModel} from "./model";
import {MdDashboard} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {IoSettings} from "react-icons/io5";
import {BiSolidCategory} from "react-icons/bi";
import {MdTopic} from "react-icons/md";
import {MdOutlinePostAdd} from "react-icons/md";

const sidebars: SidebarModel[] = [
    {
        id: 1,
        title: "Dashboard",
        path: "",
        icon: <MdDashboard/>,
        element: <DashboardPage/>
    },
    {
        id: 2,
        title: "User",
        path: "user",
        icon: <FaUser/>,
        element: <UserPage/>
    },
    {
        id: 3,
        title: "Role",
        path: "role",
        icon: <IoSettings/>,
        element: <RolePage/>
    },
    {
        id: 4,
        title: "Category",
        path: "category",
        icon: <BiSolidCategory/>,
        element: <CategoryPage/>
    },
    {
        id: 5,
        title: "Topic",
        path: "topic",
        icon: <MdTopic/>,
        element: <TopicPage/>
    },
    {
        id: 6,
        title: "Post",
        path: "post",
        icon: <MdOutlinePostAdd/>,
        element: <PostPage/>
    }
]

const iconVariances: string[] = ["light", "secondary", "info", "success", "warning", "danger"]

export {sidebars, iconVariances}