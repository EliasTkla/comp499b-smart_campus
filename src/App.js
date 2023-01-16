import React from 'react';
import './App.css';
import Homepage from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const navBar = (
  <div>
    <Navbar/>
  </div>
  )



function App() {
  return (
    <div>
      {navBar}
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/' index element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}





export default App;










