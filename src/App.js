import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from 'react-router-dom';
import {Button} from 'reactstrap'
import Home from './Components/Home';
import DevSearch from './Components/DevSearch';
import ToDoList from './Components/ToDoList';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="">|   Home   |</Link>
        <Link to='/search'>|   Developer Search Engine   |</Link>
        <Link to='/todoList'>|   ToDo List   |</Link>
        <Link to='/calculator'>|   calculator   |</Link>
      </nav>
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/search' element={<DevSearch/>} />
          <Route path='/todoList' element={<ToDoList/>} />
          <Route path='/calculator' element={<Calculator/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
