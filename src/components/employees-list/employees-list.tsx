import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (data:any) => {
    const elements  = data.map((item: { name: any; salary: any; }) =>{
        return (
            <EmployeesListItem name={item.name} salary ={item.salary}/>
        )
    }) 

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;