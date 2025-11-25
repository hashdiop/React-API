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
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {usersdata.map((user) => (
          <Usercard
            key={user.id}
            id={user.id}
            name={user.name}
            userName={user.userName}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto my-5 p-10 w-fit bg-yellow-400  font-semibold from-sky-800 rounded rounded-e-full">
      
        <span>Nombre d'utilisateurs trouvés :</span><span className='text-green-500'> {usersdata.length}</span>
  </div>
  </div>
);
}
