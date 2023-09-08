
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portofoli from './Components/Portofoli/Portofoli';
import Contact from './Components/contact/Contact';
import { Route,Routes } from 'react-router-dom';
import Footer from './Components/footer/Footer';
import Error from './Components/error/Error';


function App() {

  return (
    <>
<Navbar/>
  <Routes>
     <Route path="/" element={<Home/>}> </Route>
     <Route path="Home" element={<Home/>}> </Route>
     <Route path="About" element={<About/>}> </Route>
     <Route path="Portofoli" element={<Portofoli/>}> </Route>
     <Route path="Contact" element={<Contact/>}> </Route>
     <Route path="*" element={<Error/>}> </Route>


     </Routes>
     <Footer/>

    </>
       
  );
}

export default App;





