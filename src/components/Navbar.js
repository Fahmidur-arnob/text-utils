import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container d-flex">
                <a className="navbar-brand fs-2 fw-bold text-dark flex-auto" href="/">{props.title}</a>
                <button className="navbar-toggler flex-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-1 mx-0 mx-md-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex w-100 justify-content-end mx-auto ms-md-5">

                        <li class="nav-item">
                            <a class="nav-link fs-4 fw-semibold text-dark me-md-4" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-4 fw-semibold text-dark " href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <form class="d-flex ms-md-5 justify-content-end" role="search">
                        <input class="form-control me-2 border border-dark rounded-4" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here', 
    aboutText: 'About Text Here'
}