import {useContext, useState} from "react";
import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import Header from "../src/assets/components/header";
import Header2 from "./assets/components/main/header2";
import Footer from './assets/components/Footer'
import LeftSection from './assets/components/main/left-section'
import Overwiew from './assets/components/main/overview'
import Repostories from './assets/components/main/repostories'
// import Followers from './assets/components/main/followers'
import Api from '../src/assets/components/Api'
import Followers from "./assets/components/main/followers";

const App = () => {
let userInfo = Api.getuserInfo()
let getFollowers = Api.getFollowers()
  
  
  return (
   
    <BrowserRouter>
     {/* {(window.location.pathname.length < 2) ? <Navigate to="/overview" /> : ''} */}
    <div>
      <Header />
      <Header2 />
      <div className="sections">
      <LeftSection/>
     <Routes>
      <Route path="/" element={<Overwiew/>} />
      <Route path="repo" element={<Repostories/>} />
      <Route path="followers" element={<Followers/>}/>
     </Routes>
   
       
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
};

export default App;
