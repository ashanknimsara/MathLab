
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Games from './components/Games';
import Memorygame from './components/Memorygame';
import CreativePage from './components/CreativePage';
import NavigationBar from './components/NavigationBar';
import Grades from './components/Grades';


function App() {
  return (
    <>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/memory" element={<Memorygame/>} />
        <Route path="/pg" element={<CreativePage/>} />
        <Route path="/gg" element={<NavigationBar/>} />
        <Route path="/grades" element={<Grades/>} />
        </Routes>
        
      
    </>
  );
}

export default App;
