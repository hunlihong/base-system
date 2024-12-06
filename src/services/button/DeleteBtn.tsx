import {FC} from "react";
import {Button} from "react-bootstrap"
import IconWrapper from "../icon/IconWrapper";
import {MdDelete} from "react-icons/md";
import {ButtonModel} from "./model";

const DeleteBtn: FC<ButtonModel> = ({className = "", disabled = false, onClick, label = ""}) => {
    return <Button variant="danger" className={`p-1 ${className}`} disabled={disabled} onClick={onClick}>
        <IconWrapper><MdDelete/></IconWrapper>
        {label}
    </Button>
}

export default DeleteBtn