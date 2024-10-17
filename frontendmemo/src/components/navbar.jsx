import React from 'react';

const Navbar = () => {
  return (
    <>
      <header>
        {/* Sidebar */}
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span>
                    </a>
                  </li>
                  <li>
                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span>
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col py-3">
              {/* Content area */}
              <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid">
                  {/* <button
                    data-mdb-button-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-collapse-init
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fas fa-bars"></i>
                  </button> */}

                  <a className="navbar-brand" href="#">
                    <h1 height="25" >Memories</h1>
                    {/* <img
                      src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                      height="25"
                      alt="MDB Logo"
                      loading="lazy"
                    /> */}
                  </a>
                  <form className="d-none d-md-flex input-group w-auto my-auto">
                    <input
                      autoComplete="off"
                      type="search"
                      className="form-control rounded"
                      placeholder='Search (ctrl + "/" to focus)'
                      style={{ minWidth: '225px' }}
                    />
                    <span className="input-group-text border-0">
                      <i className="fas fa-search"></i>
                    </span>
                  </form>

                  {/* <ul className="navbar-nav ms-auto d-flex flex-row">
                    <li className="nav-item dropdown">
                      <a
                        data-mdb-dropdown-init
                        className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-bell"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Some news</a></li>
                        <li><a className="dropdown-item" href="#">Another news</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link me-3 me-lg-0" href="#">
                        <i className="fas fa-fill-drip"></i>
                      </a>
                    </li>
                    <li className="nav-item me-3 me-lg-0">
                      <a className="nav-link" href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        data-mdb-dropdown-init
                        className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="united kingdom flag m-0"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#"><i className="united kingdom flag"></i>English</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#"><i className="poland flag"></i>Polski</a></li>
                        <li><a className="dropdown-item" href="#"><i className="china flag"></i>中文</a></li>
                        <li><a className="dropdown-item" href="#"><i className="japan flag"></i>日本語</a></li>
                        <li><a className="dropdown-item" href="#"><i className="germany flag"></i>Deutsch</a></li>
                        <li><a className="dropdown-item" href="#"><i className="france flag"></i>Français</a></li>
                        <li><a className="dropdown-item" href="#"><i className="spain flag"></i>Español</a></li>
                        <li><a className="dropdown-item" href="#"><i className="russia flag"></i>Русский</a></li>
                        <li><a className="dropdown-item" href="#"><i className="portugal flag"></i>Português</a></li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          className="rounded-circle"
                          height="22"
                          alt="Avatar"
                          loading="lazy"
                        />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                        <li><a className="dropdown-item" href="#">My profile</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                      </ul>
                    </li>
                  </ul> */}
                </div>
              </nav>
              <div className="container pt-5">
                {/* Content goes here */}
                <h1>Welcome to the dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
