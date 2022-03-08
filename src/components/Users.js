import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Users() {
const [loading, setLoading] = useState(true)
const [users , setUsers]= useState([]);

useEffect(()=> { 
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))
    .finally(()=> setLoading(false));


}, [])
  return (
    <div>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        {
        users.map((user)=>(
            <li key={user.id}>
                <NavLink style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "red" : "",
               
              };
            }} to={`/user/${user.id}`}>{user.name}</NavLink>
            </li>
        ))
        }
    </div>
  )
}

export default Users