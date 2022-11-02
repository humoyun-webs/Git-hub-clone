import React from 'react';
import './style.scss'
import img3 from '../../images/img3.jpg'
import Search from '../search.json';

const index = () => {

    return (
      
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white">

          <div className="container-fluid body">
            
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars" />
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <i class="fa-brands fa-github"></i>
              </a>

              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item  search">
                    <input type="text" placeholder="Search or jump to…" />
                    <button>/</button>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pull request</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Issues</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Marketplace</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Explore</a>
                </li>
              </ul>

            </div>
            
            
            <div className="d-flex align-items-center gap-2">
              
            <a className="link-secondary me-3" href="#">
            <i className="fas fa-bell" />
            
              </a>
              
              <div className="dropdown">
                <a className="link-secondary me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                 
                  <i class="fa-solid fa-plus"></i>
                <i class="fa-sharp fa-solid fa-caret-down "></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end menu1" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>

              
              
              <div className="dropdown">
                <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <img src={img3} className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
                  <i class="fa-sharp fa-solid fa-caret-down "></i>
                  <span class="badge rounded-pill badge-notification bg-primary">.</span>
                  
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                  <li>
                    <a className="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </div>



            </div>

          </div>
          
        </nav>
       
      </>
    );
};

export default index;




















// {/* Navbar*/}
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <div className="container-fluid justify-content-between">
//   {/* Left elements */}
//   <div className="d-flex">
//     {/* Brand */}
//     <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
//     <i class="fa-brands fa-github"></i>
//     </a>
//     {/* Search form */}
//     <form className="input-group w-auto my-auto d-none d-sm-flex">
//       <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" style={{minWidth: '125px'}} />
//       <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search" /></span>
//     </form>
//   </div>
//   {/* Left elements */}
//   {/* Center elements */}
//   <ul className="navbar-nav flex-row d-none d-md-flex">
//     <li className="nav-item me-3 me-lg-1 active">
//      <h6>Pull requests</h6>
//     </li>
//     <li className="nav-item me-3 me-lg-1">
//      <h6>Issues</h6>
//     </li>
//     <li className="nav-item me-3 me-lg-1">
//      <h6>Marketplace</h6>
//     </li>
//     <li className="nav-item me-3 me-lg-1">
//       <h6>Expolore</h6>
//     </li>
    
//   </ul>
//   {/* Center elements */}
//   {/* Right elements */}
//   <ul className="navbar-nav flex-row">
//     <li className="nav-item me-3 me-lg-1">
//       <a className="nav-link d-sm-flex align-items-sm-center" href="#">
//         <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle" height={22} alt="Black and White Portrait of a Man" loading="lazy" />
//         <strong className="d-none d-sm-block ms-1">John</strong>
//       </a>
//     </li>
//     <li className="nav-item me-3 me-lg-1">
//       <a className="nav-link" href="#">
//         <span><i className="fas fa-plus-circle fa-lg" ></i></span>
//       </a>
//     </li>
//     <li className="nav-item dropdown me-3 me-lg-1">
//       <a className="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//         <i className="fas fa-comments fa-lg" />
//         <span className="badge rounded-pill badge-notification bg-danger">6</span>
//       </a>
//       <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
//         <li>
//           <a className="dropdown-item" href="#">Some news</a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="#">Another news</a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </li>
//       </ul>
//     </li>
//     <li className="nav-item dropdown me-3 me-lg-1">
//       <a className="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//         <i className="fas fa-bell fa-lg" />
//         <span className="badge rounded-pill badge-notification bg-danger">12</span>
//       </a>
//       <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
//         <li>
//           <a className="dropdown-item" href="#">Some news</a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="#">Another news</a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </li>
//       </ul>
//     </li>
//     <li className="nav-item dropdown me-3 me-lg-1">
//       <a className="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//         <i className="fas fa-chevron-circle-down fa-lg" />
//       </a>
//       <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
//         <li>
//           <a className="dropdown-item" href="#">Some news</a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="#">Another news</a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </li>
//       </ul>
//     </li>
//   </ul>
//   {/* Right elements */}
// </div>
// </nav>
// {/* Navbar */}