import React from 'react';
import "../../Styles/Profile.css";
const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="main-body">
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img 
                      src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                      alt="Admin" 
                      className="rounded-circle" 
                      width="150" 
                    />
                    <div className="mt-3">
                      <h4>John Doe</h4>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  {[
                    { icon: "globe", label: "Website", value: "https://bootdey.com" },
                    { icon: "github", label: "Github", value: "bootdey" },
                    { icon: "twitter", label: "Twitter", value: "@bootdey" },
                    { icon: "instagram", label: "Instagram", value: "bootdey" },
                    { icon: "facebook", label: "Facebook", value: "bootdey" },
                  ].map(({ icon, label, value }) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap" key={label}>
                      <h6 className="mb-0">
                        <svg xmlns={`http://www.w3.org/2000/svg`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${icon} mr-2 icon-inline`}>
                          {/* Here you would include the appropriate SVG path for each icon */}
                        </svg>
                        {label}
                      </h6>
                      <span className="text-secondary">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  {[
                    { label: "Full Name", value: "Kenneth Valdez" },
                    { label: "Email", value: "fip@jukmuh.al" },
                    { label: "Phone", value: "(239) 816-9029" },
                    { label: "Mobile", value: "(320) 380-4539" },
                    { label: "Address", value: "Bay Area, San Francisco, CA" },
                  ].map(({ label, value }) => (
                    <div className="row" key={label}>
                      <div className="col-sm-3">
                        <h6 className="mb-0">{label}</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{value}</div>
                      <hr />
                    </div>
                  ))}
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info" target="__blank" rel="noopener noreferrer" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                {[...Array(2)].map((_, index) => (
                  <div className="col-sm-6 mb-3" key={index}>
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                        {[
                          { label: "Web Design", progress: 80 },
                          { label: "Website Markup", progress: 72 },
                          { label: "One Page", progress: 89 },
                          { label: "Mobile Template", progress: 55 },
                          { label: "Backend API", progress: 66 },
                        ].map(({ label, progress }) => (
                          <div key={label}>
                            <small>{label}</small>
                            <div className="progress mb-3" style={{ height: '5px' }}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;