
function Student(props)
{

   const {lname,price,ram}= props.laptop
    return(
        <>
        <h1>i am child componenet(Props)</h1>
        <h2>Student Id:{props.id}</h2>
        <p>Student Name:{props.name}</p>
        <p>Student marks:{props.marks}</p>
        <p>Student Address:{props.address}</p>
        <h4>{props.isPresent?"Welcome to college": "not attended session"}</h4>
        <h1>Student Skills are:</h1>
        <ul>
            {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}


        </ul>

        <h2>Student laptop Details:</h2>
        <ul>
        <p>Student lname:{lname}</p>
        <p>Student lPrice:{price}</p>
        <p>Student lRam:{ram}</p>
       </ul>
        

        </>
    )
}
export default Student