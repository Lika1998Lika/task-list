/* eslint-disable react/prop-types */
// import "./app-filter.css";

import { Button, ButtonGroup } from "react-bootstrap"

export const AppFilter = ({setFilter, filter}) => {
    return (
        <ButtonGroup>
            <Button type="button"
            variant={filter === 'all' ? 'dark' : 'secondary'}
            onClick={() => setFilter('all')}
            size="lg"
            >
                Все сотрудники
            </Button> 

            <Button type="button"
            onClick={() => setFilter('increased')}
            variant={filter === 'increased' ? 'dark' : 'secondary'}
            size="lg"
            >
                На повышение
            </Button> 
            
            <Button type="button"
            variant={filter === 'salary' ? 'dark' : 'secondary'}
            onClick={() => setFilter('salary')}
            size="lg"
            >
                З/П больше 1000$
            </Button>
        </ButtonGroup>
    )
}
