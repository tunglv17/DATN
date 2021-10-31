import React from 'react'

const HeaderWebsite = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">HappyDay</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="index.html" className="nav-link">Trang Chủ</a></li>
                            <li className="nav-item"><a href="rooms.html" className="nav-link">Phòng</a></li>
                            <li className="nav-item"><a href="restaurant.html" className="nav-link">Quán Ăn</a></li>
                            <li className="nav-item"><a href="about.html" className="nav-link">Giớ Thiệu</a></li>
                            <li className="nav-item"><a href="blog.html" className="nav-link">Tin Tức</a></li>
                            <li className="nav-item"><a href="contact.html" className="nav-link">Liên Hệ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default HeaderWebsite
