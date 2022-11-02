import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";


const index = () => {
  return (
    <>
<div className="all">
      <div className="container navbar2">
       <div className="width">
        <ul className="nav-ul2">
          <NavLink to={"/"}>
        <li className="nav-item d-flex justify-content-center align-items-center gap-2">
               <i class="bi bi-book"></i>
                 <a
                  className="nav-link  d-flex justify-content-center align-items-center"
                  
                  
                >
                  Overwiew
                </a>
              </li>
              </NavLink>
              <NavLink to={"repo"}>
                             <li className="nav-item d-flex justify-content-center align-items-center text-light gap-2">
              <i class="fa-solid fa-book"></i>
                 <a className="nav-link" >
                   Repostories
                </a>
               </li>
               </NavLink>
               <li className="nav-item dropdown d-flex justify-content-center align-items-center gap-2">
               <i class="fa-solid fa-table"></i>
                <a
                  className="nav-link "
                  
                  role="button"
                  aria-expanded="false"
                >
                  Projects
                </a>
                {/* Dropdown menu */}
              </li>
              <li className="nav-item d-flex justify-content-center align-items-center gap-2">
              <i class="bi bi-box"></i>
                <a className="nav-link ">Packages</a>
              </li>
              <li className="nav-item d-flex justify-content-center align-items-center gap-2">
                <i class="fa-regular fa-star"></i>
                <a className="nav-link ">Stars</a>
              </li>
        </ul>
       </div>
      </div>
      </div>
    </>
  );
};

export default index;





















// <nav className="navbar navbar2 navbar-expand-lg navbar-light bg-light pt-4 ">
//         {/* Container wrapper */}
//         <div className="container-fluid mt-1">
//           {/* Toggle button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             // data-mdb-toggle="collapse"
//             // data-mdb-target="#navbarCenteredExample"
//             // aria-controls="navbarCenteredExample"
//             // aria-expanded="false"
//             // aria-label="Toggle navigation"
//           >
            
//           </button>
//           {/* Collapsible wrapper */}
//           <div
//             className=" navbar-collapse justify-content-center"
//             id="navbarCenteredExample"
//           >
//             {/* Left links */}
//             <ul className="navbar-nav navbar-nav2 mb-2 ">
//               <li className="nav-item d-flex justify-content-center align-items-center">
//               <i class="bi bi-book"></i>
//                 <a
//                   className="nav-link active d-flex justify-content-center align-items-center"
                  
//                   href="#"
//                 >
//                   Overwiew
//                 </a>
//               </li>
//               <li className="nav-item d-flex justify-content-center align-items-center text-light">
//               <i class="fa-solid fa-book"></i>
//                 <a className="nav-link" href="#">
//                   Repostories
//                 </a>
//               </li>
//               {/* Navbar dropdown */}
//               <li className="nav-item dropdown d-flex justify-content-center align-items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-9 10H5v6h6v-6zm2 6h6V5h-6v14zM11 5H5v6h6V5z"/></svg>
//                 <a
//                   className="nav-link "
//                   href="#"
//                   role="button"
//                   aria-expanded="false"
//                 >
//                   Projects
//                 </a>
//                 {/* Dropdown menu */}
//               </li>
//               <li className="nav-item d-flex justify-content-center align-items-center">
//               <i class="bi bi-box"></i>
//                 <a className="nav-link ">Packages</a>
//               </li>
//               <li className="nav-item d-flex justify-content-center align-items-center">
//                 <i class="fa-regular fa-star"></i>
//                 <a className="nav-link ">Stars</a>
//               </li>
//             </ul>
//             {/* Left links */}
//           </div>
//           {/* Collapsible wrapper */}
//         </div>
//         {/* Container wrapper */}
//       </nav>
