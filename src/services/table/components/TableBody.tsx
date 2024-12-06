import {useContext} from "react";
import {TableContext} from "../TableContainer";

const TableBody = () => {
    const {getTableBodyProps, rows, prepareRow} = useContext(TableContext);

    return <tbody {...getTableBodyProps()}>
    {rows.map((row: any, index: number) => {
        prepareRow(row);
        return (
            <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell: any, index: number) => {
                    return <td {...cell.getCellProps()} key={index}>{cell.render("Cell")}</td>
                })}
            </tr>
        )
    })}
    </tbody>
}

export default TableBody