import {createContext, FC, useEffect, useMemo} from "react";
import {Form, Pagination, Table} from "react-bootstrap"
import {useTable} from "react-table"
import AddBtn from "../button/AddBtn";
import CustomFormSelect from "../select/CustomFormSelect";
import {OptionModel} from "../select/model";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";

interface Props {
    columns: any[];
    data: any[];
    hover?: boolean;
    isSearchable?: boolean;
    isAddable?: boolean;
    isPagination?: boolean;
}

const pageSizeOptions: OptionModel[] = Array(10).fill(0).map((_, index) => {
    return {
        label: (index + 1) * 10,
        value: (index + 1) * 10
    }
})

export const TableContext = createContext<any>(null);

const TableContainer: FC<Props> = ({
                                       columns,
                                       data,
                                       hover = true,
                                       isSearchable = true,
                                       isAddable = true,
                                       isPagination = true
                                   }) => {
    const innerColumns = useMemo(() => {
        return columns;
        // eslint-disable-next-line
    }, []);
    const innerData = useMemo(() => {
        return data;
        // eslint-disable-next-line
    }, []);

    useEffect(() => {

    }, []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        columns: innerColumns,
        data: innerData
    });

    return <TableContext.Provider value={{getTableProps, getTableBodyProps, headerGroups, rows, prepareRow}}>
        <div className="mb-4 d-flex justify-content-between gap-3">
            {isSearchable && <Form className="search-control">
                <Form.Control type="text" placeholder="Search..." className="h-100"/>
            </Form>}
            {isAddable && <AddBtn className="p-2" label="Add"/>}
        </div>
        <Table {...getTableProps()} hover={hover} responsive>
            <TableHeader/>
            <TableBody/>
        </Table>
        {isPagination && <div className="mt-4 d-flex gap-3 justify-content-between align-items-start">
            <div className="d-flex gap-2 align-items-center">
                <CustomFormSelect className="pe-4" options={pageSizeOptions} defaultValue={pageSizeOptions[0]}/>
                <span>per page</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <Pagination className="me-0">
                    <Pagination.Prev/>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Next/>
                </Pagination>
            </div>
        </div>}
    </TableContext.Provider>
}

export default TableContainer