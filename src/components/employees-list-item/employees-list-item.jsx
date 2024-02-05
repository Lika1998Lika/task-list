/* eslint-disable react/prop-types */
//import './employees-list-item.css';
import { ListGroupItem, Stack } from "react-bootstrap";
import { BsCookie, BsPencilFill, BsTrash } from "react-icons/bs";

export const EmployeesListItem = (props) => {
    const { item, toggleIncrease, onDelete, handleShow, handleSetUserId } = props;
    return (
        <ListGroupItem>
            <Stack direction="horizontal" className="d-flex justify-content-between">
                <div>
                    <span style={{ color: item.increased === "approved" ? 'gold' : '' }}>
                        {item.name}
                    </span>
                </div>
                <Stack direction="horizontal" gap={4}>
                    <span >{item.salary + '$'}</span>
                    <Stack direction="horizontal" gap={2}>
                        <BsCookie
                            title="На повышение"
                            role="button"
                            onClick={() => toggleIncrease(item.id)}
                            color={item.increased === "approved" ? 'gold' : ''} />
                        <BsTrash
                            title="Удалить"
                            role="button"
                            onClick={() => onDelete(item.id)} />
                        <BsPencilFill 
                        title="Редактировать"
                        role="button"
                        onClick={() => {
                            handleSetUserId(item.id)
                            handleShow()
                        }}/>
                    </Stack>
                </Stack>

            </Stack>

        </ListGroupItem>
    )
}

