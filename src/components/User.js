import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { useEffect, useState} from 'react';
import axios from 'axios';

function User() {
const [loading , setLoading]= useState(true);
const [user , setUser] = useState({});
 const {id} = useParams()
 useEffect(()=> {
     axios(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((info)=> setUser(info.data))
     .finally(()=> setLoading(false))
     
 })
  return (
    <div>
        <h1>User Details </h1>
        {loading && <div>Loading...</div>}
        {!loading && <code>{JSON.stringify(user)}</code>}
        <br></br>
        <br></br>
    

        <Link to={`/user/${parseInt(id)+1}`}>Next User ({parseInt(id) +1})</Link>
    </div>
  )
}

export default User;