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
      <nav className='nav-main'>
        <Link to=""><Button className="spacer" color="primary">Home</Button></Link>
        <Link to='/search'><Button className="spacer" color="primary">Search</Button></Link>
        <Link to='/todoList'><Button className="spacer" color="primary">ToDo List</Button></Link>
        <Link to='/calculator'><Button className="spacer" color="primary">Calculator</Button></Link>
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
