import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

export default function Userdetails() {
    const { id }=useParams()
    const [info,setInfo] = useState({})

    useEffect(() => {
        const fetchInfo = async () => {
            try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/');
            const data = await response.json();
            const foundUser = data.find(user => user.id === parseInt(id));
            setInfo(foundUser);
            } catch (error) {
            console.error("Erreur lors du chargement de l'utilisateur:", error);
            }
        };

        fetchInfo();
        }, [id]);

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4">
    <div className="max-w-7xl mx-auto">
      {/* Bouton de retour (personnalisable) */}
      <div className="mb-6">
        <Link to={'/'}>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
          ← Retour
        </button>
        </Link>
      </div>

      {/* Vérification que les données sont disponibles */}
      {!info ? (
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <p className="text-gray-500 text-lg">Chargement des données...</p>
        </div>
      ) : (
        /* Carte principale */
        <div className="bg-white rounded-3xl shadow-2xl border border-white overflow-hidden">
          <div className="p-8 space-y-8">
            {/* En-tête avec accent coloré */}
            <div className="border-b border-blue-200 pb-6">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl mb-3 shadow-lg">
                <h1 className="text-4xl font-bold">{info.name || "Nom non disponible"}</h1>
              </div>
              <p className="text-blue-700 font-medium mt-3 text-lg">@{info.username || "username"}</p>
            </div>

            {/* Grille des informations */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Informations de contact */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-8 bg-green-500 rounded-full shadow-sm"></div>
                  <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4">
                  <div className="flex items-center space-x-4 p-3 hover:bg-green-50 rounded-xl transition-colors duration-200">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-green-600 text-lg">✉</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Email</p>
                      <p className="text-gray-800">{info.email || "Non disponible"}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 hover:bg-blue-50 rounded-xl transition-colors duration-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-blue-600 text-lg">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Téléphone</p>
                      <p className="text-gray-800">{info.phone || "Non disponible"}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 hover:bg-purple-50 rounded-xl transition-colors duration-200">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-purple-600 text-lg">🌐</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Site web</p>
                      <p className="text-gray-800">{info.website || "Non disponible"}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Adresse */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-8 bg-orange-500 rounded-full shadow-sm"></div>
                  <h2 className="text-2xl font-semibold text-gray-800">Address</h2>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shadow-md mt-1">
                      <span className="text-orange-600 text-lg">📍</span>
                    </div>
                    <div className="space-y-3">
                      {info.address ? (
                        <>
                          <div className="p-3 hover:bg-orange-50 rounded-xl transition-colors duration-200">
                            <p className="font-bold text-lg text-gray-800">{info.address.street || "Rue non disponible"}</p>
                            <p className="text-gray-600">{info.address.suite || "Suite non disponible"}</p>
                          </div>
                          <div className="p-3 hover:bg-blue-50 rounded-xl transition-colors duration-200">
                            <p className="text-blue-700 font-semibold text-lg">{info.address.city || "Ville non disponible"}</p>
                            <p className="text-gray-600">{info.address.zipcode || "Code postal non disponible"}</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-sm text-gray-600 font-medium">Coordonnées GPS</p>
                            <p className="text-gray-800">
                              {info.address.geo?.lat || "N/A"}, {info.address.geo?.lng || "N/A"}
                            </p>
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-500 p-3">Adresse non disponible</p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Entreprise */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-indigo-500 rounded-full shadow-sm"></div>
                <h2 className="text-2xl font-semibold text-gray-800">Company</h2>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-7 rounded-2xl border border-indigo-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {info.company ? (
                  <>
                    <h3 className="font-bold text-2xl text-indigo-800 mb-4">{info.company.name || "Nom d'entreprise non disponible"}</h3>
                    <div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-md mb-4">
                      <p className="text-indigo-700 italic text-xl text-center">"{info.company.catchPhrase || "Slogan non disponible"}"</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-700 text-lg">{info.company.bs || "Description non disponible"}</p>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 text-center py-4">Information entreprise non disponible</p>
                )}
              </div>
            </section>

            {/* Badge d'ID */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <div className="text-gray-500 text-sm">
                Dernière mise à jour: Aujourd'hui
              </div>
              <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-300 shadow-sm font-medium">
                ID: #{info.id || "N/A"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);
}
