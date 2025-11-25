import React from 'react'
import { Link } from 'react-router'

export default function Usercard(props) {
  return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* En-tête de la carte avec dégradé */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold truncate">{props.name}</h3>
            <p className="text-blue-100 text-sm">@{props.userName}</p>
          </div>
          <div className="bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full">
            #{props.id}
          </div>
        </div>
      </div>

      {/* Corps de la carte */}
      <div className="p-4 space-y-3">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-green-600 text-sm">✉</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-gray-500 text-xs">Email</p>
            <p className="text-gray-800 text-sm truncate">{props.email}</p>
          </div>
        </div>

        {/* Téléphone (conditionnel) */}
        {props.phone && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm">📞</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-gray-500 text-xs">Téléphone</p>
              <p className="text-gray-800 text-sm">{props.phone}</p>
            </div>
          </div>
        )}

        {/* Site web (conditionnel) */}
        {props.website && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-sm">🌐</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-gray-500 text-xs">Site web</p>
              <p className="text-gray-800 text-sm truncate">{props.website}</p>
            </div>
          </div>
        )}

        {/* Bouton d'action */}
        <div className="pt-2">
          <div className="border-t border-gray-100 pt-3">
            <Link to={`/user/${props.id}`} className='block'>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}
