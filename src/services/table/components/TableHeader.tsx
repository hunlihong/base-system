import {useContext} from "react"
import {TableContext} from "../TableContainer"

const TableHeader = () => {
    const {headerGroups} = useContext(TableContext);

    return <thead>{headerGroups.map((headerGroup: any, index: number) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column: any, index: number) => (
                <th {...headerGroup.getHeaderProps} key={index}>{column.render("Header")}</th>
            ))}
        </tr>
    ))}</thead>
}

export default TableHeader