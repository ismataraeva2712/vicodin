
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';
import "animate.css/animate.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Login from './Component/Login/Login';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './Component/Login/SignUp';
import AllMale from './Component/Home/AllMale';
import AllFemale from './Component/Home/AllFemale';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './Component/Home/MyProfile';
AOS.init();

function App() {
  return (
    <div >
<Navbar></Navbar>
<Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route>

      <Route path='/allMale' element={<AllMale></AllMale>}></Route>
      <Route path='/feMale' element={<AllFemale></AllFemale>}></Route>
      
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    
     
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
