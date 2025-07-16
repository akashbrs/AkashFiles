

function Employee(Props){
    return(
        <>
        <h1>Employee Id:{Props.id}</h1>
        <p>Employee Name:{Props.name}</p>
        <p>Employee Salary:{Props.salary}</p>
        <p>Employee Address:{Props.address}</p>
        <p>Employee Category:{Props.category}</p>
        <h4>{Props.isPresent?"Salary was increased":"not attend in the company"}</h4>
        </>

    )
}
export default Employee