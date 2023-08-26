import React from 'react'

const Navbar = () => {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ml-5 mr-5 ">
  <div className="container-fluid">
    <img className='mx-3' src="https://sciastra.com/Assets/Images/newsciastra.jpg" alt="..." style={{width:"60px", height:"60px"}}/>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
        <li class="nav-item">
          <p class="nav-link active mx-3" aria-current="page">HOME</p>
        </li>
        <li class="nav-item">
          <p class="nav-link  active mx-3" >COURSES</p>
        </li>
        <li class="nav-item">
          <p class="nav-link  active mx-3" >SELECTION</p>
        </li>
        <li class="nav-item">
          <p class="nav-link  active mx-3" >BLOGS</p>
        </li>
        <li class="nav-item">
          <p class="nav-link  active mx-3" >MATERIALS</p>
        </li>
        <li class="nav-item">
          <p class="nav-link  active mx-3 text-decoration-underline" >TEAM</p>
        </li>
        <li class="nav-item">
          <p class="nav-link  active mx-3" >CONTACT US</p>
        </li>
      </ul>
      <button class="btn btn-outline-primary my-3 mx-5" type="submit">Log-In</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar