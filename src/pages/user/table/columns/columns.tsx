import {Image} from "react-bootstrap"
import BadgeStatus from "../../../../services/badge/BadgeStatus"
import ActionBtnWrapper from "../../../../services/button/ActionBtnWrapper"
import Photo from "../../../../assets/images/image/front-dev.jpg"

const _columns = [
    {
        Header: "No",
        accessor: "id"
    },
    {
        Header: "Photo",
        accessor: "photo",
        Cell: () => <Image className="img-table" src={Photo}/>
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Username",
        accessor: "username"
    },
    {
        Header: "Role",
        accessor:
            "role"
    }
    ,
    {
        Header: "Status",
        Cell:
            ({row}: { row: any }) => <BadgeStatus status={row.original.status}/>
    }
    ,
    {
        "Header":
            "Action",
        Cell:
            () => <ActionBtnWrapper/>
    }
]

export {_columns}