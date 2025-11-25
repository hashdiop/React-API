import React, { useEffect, useState } from 'react'
import Usercard from './usercard';

export default function Userslist() {
    const [usersdata,setUsersdata] = useState([]) 
    const [error, setError] = useState('');

	 useEffect(() =>  {
	   function fetchData() {// la fonction pour récupérer les données de l'api
		 fetch("https://jsonplaceholder.typicode.com/users/")
		   .then(res =>  res.json())
		   .then(res =>  setUsersdata(res))
		   .catch(err =>  setError(err)) ;
	   }

	   fetchData() 
	 }, []) 
     console.log(usersdata.forEach(user => console.log(user.title)))
  return (
    <div className="gap-3">
        {usersdata.map((user)=>{return (
           <div key={user.id}>
             <Usercard keyes={user.id} id={user.id} name={user.name} userName={user.userName} email={user.email}/>
           </div>
        )})}
    </div>
  )
}
