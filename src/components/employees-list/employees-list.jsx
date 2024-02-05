/* eslint-disable react/prop-types */
import { EmployeesListItem } from "../employees-list-item/employees-list-item";
import { ListGroup, Modal } from "react-bootstrap";
import { Panel } from "../ui";
import { useState } from "react";
import { EditingForm } from "../editingform/editingform";
import { useModal } from "../../hooks/useModal";

const EmployeesList = ({ data, toggleIncrease, onDelete, updateState }) => {
    const [editingUser, setEditingUser] = useState(null);
    const handleSetUser = (user) => setEditingUser(user);
    const { showModal, closeModal, openModal } = useModal();

    const elements = data.map((item) => {
        return (
            <EmployeesListItem
                toggleIncrease={toggleIncrease}
                className='text-light'
                key={item.id}
                item={item}
                onDelete={onDelete}
                handleShow={openModal}
                handleSetUser={handleSetUser}
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
                    <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Редактирование сотрудника</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <EditingForm user={editingUser} onCancel={closeModal} onSucces={closeModal} updateState={updateState}/>
                    </Modal.Body>
                </Modal>
                )
            }
        </Panel>
    )
}

export default EmployeesList;