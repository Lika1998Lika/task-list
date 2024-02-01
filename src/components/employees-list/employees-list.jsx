import { EmployeesListItem } from "../employees-list-item/employees-list-item";
/* eslint-disable react/prop-types */

import './employees-list.css';

export const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProp} = item;
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProp}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

