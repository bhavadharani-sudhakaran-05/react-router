import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>

</div>
  );
}

export default App;
