import React from "react";
import propTypes from 'proptypes'

export default function UserCard(props) {
    return(
        <div>
            <h2>User Details:</h2>
            <p>User name:{props.name}</p>
            <p>User age:{props.age}</p>
            <p>{props.isPresent ? "he is admin":"normal user"}</p>
        </div>
    )
}
UserCard.protypes={
    name:propTypes.string,
    age:propTypes.number,
    isPresent:propTypes.bool
}