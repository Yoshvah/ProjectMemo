import React, { useState } from "react";
import AccountOptions from "./Account.jsx";
import '../Styles/style.css'; // Make sure to import your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';
function MainMessage({ selectedMenu }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // State for sidebar

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle state
  };

  let content;

  switch (selectedMenu) {
    case "message":
      content = <div>Hello This is message</div>;
      break;
    case "Ai":
      content = <div>Bienvenue sur la page Ai</div>;
      break;
    case "settings":
      content = <div>Bienvenue sur la page setting</div>;
      break;
    case "logout":
      content = (
        <div>
          <AccountOptions />
        </div>
      );
      break;
    default:
      content = <div>Veuillez sélectionner une option</div>;
  }

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            {/* Sidebar */}
            <div className={`col-auto ${isCollapsed ? "col-2" : "col-md-3 col-xl-2"} px-sm-2 px-0 bg-light-blue sidebar`}>
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                {/* Button visible only on small screens */}
                <button
                  className="btn btn-outline-dark mb-2 d-block d-sm-none" // Button color for collapse
                  onClick={toggleSidebar}
                >
                  {isCollapsed ? '>' : 'x'} {/* Change button text based on collapsed state */}
                </button>
                
                {/* Regular sidebar button hidden on smaller screens */}
                <button
                  className="btn btn-outline-dark mb-2 d-none d-sm-block" // Button for larger screens
                  onClick={toggleSidebar}
                >
                  {isCollapsed ? '>' : 'x'} {/* Change button text based on collapsed state */}
                </button>

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0 text-dark">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className={`ms-1 d-none d-sm-inline ${isCollapsed ? "d-none" : ""}`}>Message</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle text-dark">
                      <i className="fs-4 bi-people"></i>{" "}
                      <span className={`ms-1 d-none d-sm-inline ${isCollapsed ? "d-none" : ""}`}>AI Chat</span>
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="User"
                      width="30"
                      height="30"
                      className="rounded-circle"
                    />
                    <span className={`d-none d-sm-inline mx-1 ${isCollapsed ? "d-none" : ""}`}>User</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-light text-small shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col py-3">
              {/* Content area */}
              <nav id="main-navbar" className="navbar navbar-expand-lg" style={{ backgroundColor: '#d2e0eb' }}>
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <h1>Memories</h1>
                  </a>
                  <form className="d-none d-md-flex input-group w-auto my-auto">
                    <input
                      autoComplete="off"
                      type="search"
                      className="form-control rounded"
                      placeholder='Search'
                      style={{ minWidth: "225px" }}
                    />
                    <span className="input-group-text border-0">
                      <i className="fas fa-search"></i>
                    </span>
                  </form>
                </div>
              </nav>
              <div className="container pt-5" style={{ marginTop: '56px', backgroundColor: 'white' }}>
                {content}
                <h1>Welcome to the dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainMessage;