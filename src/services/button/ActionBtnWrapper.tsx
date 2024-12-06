import DeleteBtn from "./DeleteBtn"
import EditBtn from "./EditBtn"

const ActionBtnWrapper = () => {
    return <div className="d-flex flex-nowrap">
        <EditBtn/>
        <DeleteBtn className="ms-2"/>
    </div>
}

export default ActionBtnWrapper