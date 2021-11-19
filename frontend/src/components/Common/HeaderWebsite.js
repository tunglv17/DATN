import React from 'react'

const HeaderWebsite = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  ftco-navbar-light">
                <div className="container-xl">
                    <a className="navbar-brand align-items-center" href="/">
                        <span className>HappyDay <small>Resort Booking</small></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" href="index-2.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="/allroom">Rooms</a></li>
                            <li className="nav-item"><a className="nav-link" href="resto-bar.html">Resto &amp; Bar</a></li>
                            <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default HeaderWebsite
