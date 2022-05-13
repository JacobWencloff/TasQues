import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import DevSearch from './Components/DevSearch';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="">Home</Link>
        <Link to='/search'> Developer Search Engine </Link>
      </nav>
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/search' element={<DevSearch/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
