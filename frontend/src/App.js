
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Games from './components/Games';
import Memorygame from './components/Memorygame';
import Grades from './components/Grades';
import Login from './components/Login';
import LoginSucess from './components/LoginSuccess';


function App() {


  return (
    <switch>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/memory" element={<Memorygame/>} />
        <Route path="/grades" element={<Grades/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/success" element={<LoginSucess/>}/>
        </Routes>
        
      
    </switch>
  );
}

export default App;
