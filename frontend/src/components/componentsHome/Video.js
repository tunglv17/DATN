import React from 'react'

const Video = () => {
 return (
  <div>
 <section className="img vid-section" style={{backgroundImage: 'url(images/xbg_2.jpg.pagespeed.ic.CDhdNeHn8d.jpg)'}}>
  <div className="overlay" />
  <div className="container-xl">
    <div className="row justify-content-center">
      <div className="col-md-10 vid-height d-flex align-items-center justify-content-center text-center">
        <div className="video-wrap">
          <span className="subheading">Watch our luxurious hotel</span>
          <h3>Take A Tour</h3>
          <a href="https://vimeo.com/115041822" className="video-icon glightbox d-flex align-items-center justify-content-center">
            <span className="ion-ios-play" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
 )
}

export default Video
