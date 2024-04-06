import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import HowToRent from './pages/HowToRent/HowToRent';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<Home />} />
          <Route path='/how-to-rent' element={<HowToRent />} />
          <Route path='/caravans' element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
