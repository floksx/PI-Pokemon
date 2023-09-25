import './App.css';
import style from './App.css';
import Create from './views/Create/Create';
import Details from './views/Details/Details';
import NavBar from './components/NavBar/NavBar'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import axios from 'axios'
axios.defaults.baseURL = 'https://pokemondatos.onrender.com/'
function App() {  
  const location = useLocation();
  return (
      <div className={style.container}>
           {location.pathname !== "/" && <NavBar/>} 
    <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/pokemon/:id" element={<Details/>} />
    </Routes>
       
      </div>
  );
}

export default App;
