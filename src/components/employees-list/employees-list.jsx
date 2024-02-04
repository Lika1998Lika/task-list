/* eslint-disable react/prop-types */
import { EmployeesListItem } from "../employees-list-item/employees-list-item";
import { ListGroup, Modal } from "react-bootstrap";
import { Panel } from "../ui";
import { useEffect, useState } from "react";
import { EditingForm } from "../editingform/editingform";

const EmployeesList = ({ data, toggleIncrease, onDelete, toggleTerm }) => {

    const [show, setShow] = useState(false);

    const [editingUserId, setEditingUserId] = useState(null);

    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const user = data.find((user) => user.id === editingUserId);
        setEditingUser(user)
    }, [editingUserId, data])

    const handleSetUserId = (userId) => setEditingUserId(userId);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);



    const elements = data.map((item) => {
        return (
            <EmployeesListItem
                toggleIncrease={toggleIncrease}
                className='text-light'
                key={item.id}
                item={item}
                onDelete={onDelete}
                toggleTerm={toggleTerm}
                handleShow={handleShow}
                handleSetUserId={handleSetUserId}
            />
        )
    })
    return (
        <Panel>
            <ListGroup>
                {elements}
            </ListGroup>

            {
                editingUser && (
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Редактирование сотрудника</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <EditingForm user={editingUser} onCancel={handleClose} onSucces={handleClose}/>
                    </Modal.Body>
                </Modal>
                )
            }

        </Panel>
    )
}

export default EmployeesList;