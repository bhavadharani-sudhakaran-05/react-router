import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import User from './components/User';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
      {/* Routes setup for different components */}
    <BrowserRouter>
     {/* Routes Links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
        <li><Link to="/books/oldbooks">Old Books</Link></li>
        <li><Link to="/books/newbooks">New Books</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route path='/books'>
      <Route path='oldbooks' element={<OldBooks/>}/>
      <Route path='newbooks' element={<NewBooks/>}/>

      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>

</div>
  );
}

export default App;
