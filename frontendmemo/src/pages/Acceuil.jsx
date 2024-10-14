import React from 'react';

const Acceuil = () => {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Memories</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="gallery.html">Gallery</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
                <div className="quote_btn-container">
                    <a href="/login" style={{ marginRight: "30px" }}>Log in</a>
                </div>
                <div className="quote_btn-container">
                  <a href="/register">Register</a>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section className="slider_section position-relative">
        <div className="container">
          <div className="row">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="col-lg-6 col-md-8">
                    <div className="detail_box">
                      <h2>Welcome to</h2>
                      <h1>Chat Memories</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <div>
                        <a href="">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-6 col-md-8">
                    <div className="detail_box">
                      <h2>Welcome</h2>
                      <h1>Flowers shop</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-6 col-md-8">
                    <div className="detail_box">
                      <h2>Welcome</h2>
                      <h1>Flowers shop</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container-fluid footer_section">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </footer>
    </div>
  );
};

export default Acceuil;
