/* eslint-disable react/prop-types */
import { Panel } from "../ui";
// import "./app-info.css";

export const AppInfo = ({userCount}) => {
    return (
        <Panel>
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {userCount.total}</h2>
            <h2>Премию получат: {userCount.inc}</h2>
        </Panel>
    )
}
