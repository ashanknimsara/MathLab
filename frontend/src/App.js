
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Games from './components/Games';
import Memorygame from './components/Memorygame';
import Grades from './components/Grades';
import Leaderboard from './components/Leaderboard';
import Grade6 from './components/Grade6';
import DominoB1 from './components/DominoB1';


function App() {
  return (
    <>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/memory" element={<Memorygame/>} />
        <Route path="/grades" element={<Grades/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/grade6" element={<Grade6/>} />
        <Route path="/DB1" element={<DominoB1/>} />
        </Routes>
        
      
    </>
  );
}

export default App;
