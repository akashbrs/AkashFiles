

function Card(props){
    return(
        <div style={{border:"2px solid red",padding:"10px",margin:"10px"}}>
            <img src={props.image} width="100%" height="400px"/>
            <h2>Title:{props.title}</h2>
            <p>Description:{props.description}</p>
        </div>
    )
}
export default Card
