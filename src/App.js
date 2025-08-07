import logo from './logo.svg';
import './App.css';
import Contact from './Component/Pages/Contact';
import Project from './Component/Pages/Project';
import Master from './Component/Layout/Master';
import Artpiece from './Component/Pages/Artpiece';
import Designs from './Component/Pages/Designs';
import Home from './Component/Pages/Home';
import Feature from './Component/Pages/Feature';
import Team from './Component/Pages/Team';

import Freequote from './Component/Pages/Freequote';
import Testimoni from './Component/Pages/Testimoni';
import Errorpage from './Component/Pages/Errorpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Purchase from './Component/Pages/Purchase';
import Service from './Component/Pages/Service';
import Register from './Component/Auth/Register';
import Login from './Component/Auth/Login';
// admin section start//
import AdminMaster from './Component/Layout/AdminMaster';
import Managedesign from './Component/Admin/Designs/Managedesign';
import Adminhome from './Component/Admin/Adminhome';

import Addpieces from './Component/Admin/Pieces/Addpieces';
import Updatepiece from './Component/Admin/Pieces/Updatepiece';
import Adddesigns from './Component/Admin/Designs/Adddesigns';
import Managepiece from './Component/Admin/Pieces/Managepiece';
import Updatedesign from './Component/Admin/Designs/Updatedesign';
import Bookings from './Component/Admin/Bookings';
import Update from './Component/Admin/Designs/update';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Master/>}>
    <Route path="/" element={<Home/>}/>
   <Route path="/project" element={<Project/>}/>
   <Route path="/service" element={<Service/>}/>
   <Route path="/artpiece" element={<Artpiece/>}/>
   <Route path="/purchase/:id" element={<Purchase/>}/>
   <Route path="/designs" element={<Designs/>}/>
   <Route path="/contact" element={<Contact/>}/>
   {/* <Route path="/purchase" element={<Feature/>}/> */}
   <Route path="/team" element={<Team/>}/>
   <Route path="/freequote" element={<Freequote/>}/>
   <Route path="/testimoni" element={<Testimoni/>}/>
   <Route path="/error" element={<Errorpage/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   </Route>
   <Route path="/admin" element={<AdminMaster/>}>
   <Route path="/admin/" element={<Adminhome/>}/>
   <Route path="/admin/bookings/" element={<Bookings/>}/>
   <Route path="/admin/managedesign" element={<Managedesign/>}/>
   <Route path="/admin/addpieces" element={<Addpieces/>}/>
   <Route path="/admin/updatepiece/:id" element={<Updatepiece/>}/>
   <Route path="/admin/adddesigns" element={<Adddesigns/>}/>
   <Route path="/admin/updatedesign/:id" element={<Updatedesign/>}/>
   <Route path="/admin/update/:id" element={<Update/>}/>
   <Route path="/admin/managepiece" element={<Managepiece/>}/>
   
   </Route>
  
   </Routes>
     </BrowserRouter> 
     <ToastContainer/>

    </div>
  );
}

export default App;
