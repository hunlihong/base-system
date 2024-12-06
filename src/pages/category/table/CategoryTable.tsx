import TableContainer from "../../../services/table/TableContainer"
import {_columns} from "./columns/columns"
import {_data} from "./columns/data"

const CategoryTable = () => {
    return <div>
        <TableContainer columns={_columns} data={_data}/>
    </div>
}

export default CategoryTable