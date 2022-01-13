import './App.css';
import Navbar from './components/Navbar/index.js'
import Title from './components/title/title';
import Home from './Pages/home';
import About from './Pages/about';
import Members from './Pages/members';
import Contact from './Pages/contact';
import Investigations from './Pages/investigations';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Title />
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/investigations' element={<Investigations/>} />
        <Route path='/members' element={<Members/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
