import React from 'react'

const SlideWebsite = () => {
    return (
        <>
            <section className="home-slider owl-carousel">
                <div className="slider-item" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate text-center">
                                <div className="text mb-5 pb-3">
                                    <h1 className="mb-3">Chào Mừng Đến Với HappyDay</h1>
                                    <h2>Resorts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate text-center">
                                <div className="text mb-5 pb-3">
                                    <h1 className="mb-3">Enjoy A Luxury Experience</h1>
                                    <h2>Join With Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SlideWebsite