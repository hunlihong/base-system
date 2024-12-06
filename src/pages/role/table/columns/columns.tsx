import BadgeStatus from "../../../../services/badge/BadgeStatus"
import ActionBtnWrapper from "../../../../services/button/ActionBtnWrapper"

const _columns = [
    {
        Header: "No",
        accessor: "id"
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Code",
        accessor: "code"
    },
    {
        Header: "Status",
        Cell: ({row}: { row: any }) => <BadgeStatus status={row.original.status}/>
    },
    {
        "Header": "Action",
        Cell: () => <ActionBtnWrapper/>
    }
]

export {_columns}