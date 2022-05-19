import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Button, Dropdown, DropdownItem } from 'reactstrap'
import Home from './Components/Home';
import DevSearch from './Components/DevSearch';
import ToDoList from './Components/ToDoList';
import Calculator from './Components/Calculator';
import Links from './Components/Links';


function App() {
  return (
    <div className="App">
      <Links/>
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/search' element={<DevSearch />} />
          <Route path='/todoList' element={<ToDoList />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
