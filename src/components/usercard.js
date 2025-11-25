import React from 'react'
import { Link } from 'react-router'

export default function Usercard(props) {
  return (
    
        <div key={props.keyes} className="m-3 py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://media.istockphoto.com/id/814423752/fr/photo/oeil-du-mod%C3%A8le-avec-le-maquillage-art-color%C3%A9-gros-plan.jpg?s=612x612&w=0&k=20&c=NeNYcLTUsVfcAyGmFHM7BWpwnFFXvCxsGfSwyZOB8nU=" alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
                {props.name}
            </p>
            <p className="text-slate-500 font-medium">
                {props.username}
            </p>
            <p className="text-slate-500 font-medium h-fit">
                {props.email}
            </p>
            </div>
            
            <Link to={`/user/${props.id}`} className='block'>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">See More</button>
            </Link>
        </div>
        </div>
    
  )
}
