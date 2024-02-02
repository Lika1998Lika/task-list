// import "./app-filter.css";

import { Button, ButtonGroup } from "react-bootstrap"

export const AppFilter = () => {
    return (
        <ButtonGroup>
            <Button type="button"
            variant="secondary"
            >
                Все сотрудники
            </Button>
            <Button type="button"
            variant="secondary"

            >
                На повышение
            </Button>
            <Button type="button"
            variant="secondary"

            >
                З/П больше 1000$
            </Button>
        </ButtonGroup>
    )
}
