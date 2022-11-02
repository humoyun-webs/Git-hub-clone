import React from 'react';
import './style.scss'
import repo from '../../repo.json'
const index = () => {
    return (
        <>
            <div className="all3 container">
                <div className="inputs">
                   <input type="text" className='search2 ' placeholder='Find repostories ....' />
                 





                   <div className="options">
                   <div class="btn-group">
  <button
    type="button"
    class="btn  dropdown-toggle"
    data-mdb-toggle="dropdown"
    data-mdb-display="static"
    aria-expanded="false"
  >
    Type
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Slelect types</p> <i class="fa-solid fa-xmark"></i></button> </li><hr />
    <li className='d1'><button class="dropdown-item" type="button">Public</button></li>
    <li className='d1'><button class="dropdown-item" type="button">Private action</button></li>
    <li className='d1'><button class="dropdown-item" type="button">Sources</button></li>
    <li className='d1'><button class="dropdown-item" type="button">Forks</button></li>
    <li className='d1'><button class="dropdown-item" type="button">Archived</button></li>
    <li className='d1'><button class="dropdown-item" type="button">Mirrors</button></li>
    <li className='d1'><button class="dropdown-item" type="button">Templates</button></li>
  </ul>
</div>
<div class="btn-group">
  <button
    type="button"
    class="btn  dropdown-toggle"
    data-mdb-toggle="dropdown"
    data-mdb-display="static"
    aria-expanded="false"
  >
    Lang
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
  <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Slelect types</p> <i class="fa-solid fa-xmark"></i></button> </li> <hr />
    <li><button class="dropdown-item" type="button">Css</button></li>
    <li><button class="dropdown-item" type="button">Html</button></li>
    <li><button class="dropdown-item" type="button">Javascript</button></li>
    <li><button class="dropdown-item" type="button">Scss</button></li>
  </ul>
</div>
<div class="btn-group">
  <button
    type="button"
    class="btn  dropdown-toggle"
    data-mdb-toggle="dropdown"
    data-mdb-display="static"
    aria-expanded="false"
  >
    Sort
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
  <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Slelect types</p> <i class="fa-solid fa-xmark"></i></button> </li><hr />
    <li><button class="dropdown-item" type="button">Last updated</button></li>
    <li><button class="dropdown-item" type="button">Name</button></li>
    <li><button class="dropdown-item" type="button">Stars</button></li>
  </ul>
</div>
</div>
                   <button>New</button>
                </div>
                {

                    repo.map(e=>{
                       
                        return(

                            <>


                <div className="cards_rep">
                    <div className="card_rep">
                        <div className="tex_sec1">
                          <h4><a className='text-primary' href={e.html_url}>{e.name} </a><span className='btn2 '>public</span></h4>
                          <div className="btnss">
                          <button className="star2 btn">
                          <i class="fa-regular fa-star"></i><p>Star</p>
                          </button>
                          <button className='btn'><i class="fa-solid fa-caret-down"></i></button>
                          </div>
                        </div>
                        <p>{e.description}</p>
                        <div className="time">
                            <p>{e.language}</p>
                            <p>Last update  {e.updated_at.substring(8,10)}{e.updated_at.substring(4,7)}-{e.updated_at.substring(0,4)} </p>
                        </div>
                    </div>
                </div>
                </>
    
    )
})
}
</div>
</>
);
};

export default index;