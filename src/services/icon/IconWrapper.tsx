import {FC, ReactNode} from "react";

interface Props {
    className?: string;
    onClick?: any;
    children: ReactNode;
}

const IconWrapper: FC<Props> = ({className, onClick, children}) => {
    return <span onClick={onClick} className={`d-flex align-items-center ${className ?? ""}`}>{children}</span>
}

export default IconWrapper