/* eslint-disable react/prop-types */
//import './employees-list-item.css';
import { ListGroupItem, Stack } from "react-bootstrap";
import { BsCookie, BsPencilFill, BsTrash } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";


export const EmployeesListItem = (props) => {
    const { item, toggleIncrease, onDelete, toggleTerm, handleShow, handleSetUserId} = props;
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
                        <AiFillStar
                            title="Избранное"
                            onClick={() => toggleTerm(item.id)}
                            role="button"
                            fill={item.term ? 'red' : ''}
                        />
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

