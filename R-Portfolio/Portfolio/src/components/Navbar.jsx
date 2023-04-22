import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#"><strong>R.A.</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><strong>Home</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about"><strong>About</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects"><strong>Projects</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education"><strong>Education</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#certificates"><strong>Certification</strong></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar