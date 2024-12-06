import {Dropdown, Image} from "react-bootstrap"
import UserProfile from "../../../assets/images/image/front-dev.jpg";
import IconWrapper from "../../../services/icon/IconWrapper";
import {CgProfile} from "react-icons/cg";
import {FiLogOut} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const ProfileDropdown = () => {
    const navigate = useNavigate();

    return <Dropdown className="h-100" align="end">
        <Dropdown.Toggle
            className="profile-dropdown-toggle rounded-0 py-3 border-0 text-black d-flex gap-3 justify-content-end align-items-center">
            <Image src={UserProfile} className="merchant-profile"/>
            <span className="text-end d-none d-sm-block">
                <p className="mb-0">User Name</p>
                <p className="mb-0 fs-12px">Admin</p>
            </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="rounded-3 shadow border-0">
            <Dropdown.Item className="d-flex gap-2" onClick={() => navigate("/login")}><IconWrapper
                className="text-primary"><CgProfile/></IconWrapper>Profile</Dropdown.Item>
            <Dropdown.Item className="d-flex gap-2" onClick={() => navigate("/login")}><IconWrapper
                className="text-danger"><FiLogOut/></IconWrapper>Logout</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

export default ProfileDropdown