import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import Blogs from './Component/Home/Blogs';

function App() {
  return (
    <div className="">
      <div className="flex flex-col w-full">
 
  <div className="divider"></div> 
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/blog' element={<Blogs></Blogs>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
  </Routes>
</div>

   
    </div>
  );
}

export default App;
