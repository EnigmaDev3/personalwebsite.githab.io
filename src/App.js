
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Project from './pages/Certificate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Certificate from './pages/Certificate';
import Education from './pages/Education';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
             <Route exact path='/' element={<Home/>}/>
             
 <Route path='/project' element={<Certificate/>}/>
 <Route path='/education' element={<Education/>}/>
 <Route path='/skills' element={<Skills/>}/>
</Routes>
<Footer/>       
      </Router>
    </div>
  );
}

export default App;
