import {FC} from "react";
import {Button} from "react-bootstrap"
import IconWrapper from "../icon/IconWrapper";
import {MdAdd} from "react-icons/md";
import {ButtonModel} from "./model";

const AddBtn: FC<ButtonModel> = ({className = "", disabled = false, onClick, label = ""}) => {
    return <Button variant="primary"
                   className={`d-flex gap-2 justify-content-center align-items-center p-1 ${className}`}
                   disabled={disabled} onClick={onClick}>
        <IconWrapper><MdAdd/></IconWrapper>
        {label}
    </Button>
}

export default AddBtn