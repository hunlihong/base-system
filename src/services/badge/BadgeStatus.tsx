import {FC} from "react";

interface Props {
    status: boolean;
}

const BadgeStatus: FC<Props> = ({status}) => {
    return <span
        className={`fs-12px bg-info text-white py-1 px-2 rounded-pill bg-${status ? "info" : "danger"}`}>{status ? "Active" : "Inactive"}</span>
}

export default BadgeStatus