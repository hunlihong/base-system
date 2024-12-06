import {FC} from "react";
import {Button} from "react-bootstrap"
import IconWrapper from "../icon/IconWrapper";
import {MdEdit} from "react-icons/md";
import {ButtonModel} from "./model";

const EditBtn: FC<ButtonModel> = ({className = "", disabled = false, onClick, label = ""}) => {
    return <Button variant="warning" className={`p-1 ${className}`} disabled={disabled} onClick={onClick}>
        <IconWrapper><MdEdit/></IconWrapper>
        {label}
    </Button>
}

export default EditBtn