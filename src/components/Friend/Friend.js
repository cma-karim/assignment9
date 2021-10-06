import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    const history = useHistory();

    const friendStyle = {
        border: '3px solid goldenrod',
        padding : '10px',
        borderRadius : '10px'
    }
    const url = `friend/${id}`;

    const handleFriendClick = () =>{
        history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2>I am : {name} {id} </h2>
            <h2>call me: {phone}</h2>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={url}>Visit me </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me</button>
        </div>
    );
};

export default Friend;