/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import './search-panel.css';

import { Form } from "react-bootstrap"

export const SearchPanel = ({ setSearch, search}) => {

    return (
        <>
            <Form.Control 
                type="text"
                placeholder="Найти сотрудника" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
        </>
    )
}