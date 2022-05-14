import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import DevSearch from './Components/DevSearch';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="">Home   |</Link>
        <Link to='/search'>|   Developer Search Engine   |</Link>
        <Link to='/todoList'>|   ToDo List   |</Link>
      </nav>
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/search' element={<DevSearch/>} />
          <Route path='/todoList' element={<ToDoList/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
