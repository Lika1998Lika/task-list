/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { updateUser } from '../../services/userService';
import { useToast } from '../../hooks/useToast';

export const EditingForm = ({user, onSucces, onCancel, updateState}) => {
  const [userName, setUserName] = useState(user.name);
  const [salary, setSalary] = useState(user.salary);
  const { success } = useToast()
  const handleChangeName = (evt) => {
    setUserName(() => evt.target.value);
}

const handleChangeSalary = (evt) => {
    setSalary(() => evt.target.value);
}
  const onSubmit = async (evt) => {
    evt.preventDefault()
    const updatedUser = {
        ...user,
        salary: Number(salary),
        name: userName,
    }

    await updateUser(user.id, updatedUser)
    onSucces()
    success('Данные обновлены')
    await updateState();
}


  return (
    <Form onSubmit={onSubmit}>
    <Form.Control value={userName ?? ''} className="mt-3"
        onChange={handleChangeName} />
    <Form.Control value={salary ?? ''}
        type="number"
        className="mt-3"
        onChange={handleChangeSalary} />
        <hr />
    <Button variant="secondary" onClick={onCancel}>
        Отмена
    </Button>
    {' '}
    <Button variant="dark" type="submit">
        Редактировать
    </Button>
</Form>
  )
}

