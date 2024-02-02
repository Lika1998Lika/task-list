/* eslint-disable react/prop-types */
import { EmployeesListItem } from "../employees-list-item/employees-list-item";
import { ListGroup } from "react-bootstrap";
import { Panel } from "../ui";

const EmployeesList = ({ data, toggleIncrease, onDelete, toggleTerm }) => {
    const elements = data.map((item) => {
        return (
            <EmployeesListItem
                toggleIncrease={toggleIncrease}
                className='text-light'
                key={item.id}
                item={item}
                onDelete={onDelete}
                toggleTerm={toggleTerm} />
        )
    })
    return (
        <Panel>
            <ListGroup>
                {elements}
            </ListGroup>
        </Panel>
    )
}

export default EmployeesList;