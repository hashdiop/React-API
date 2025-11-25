import { Routes, Route } from 'react-router';
import './App.css';
import Userslist from './components/userslist';
import Userdetails from './components/userdetails';


function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Userslist/>}/>
      <Route path="/user/:id" element={<Userdetails />} />
    </Routes>
    </>
  )
}


export default App;
