import React from 'react'

const AboutContent = () => {
 return (
  <div>
   <section className="ftco-section ftco-about-section">
    <div className="container-xl">
     <div className="row g-xl-5">
      <div className="col-md-6">
       <div className="row">
        <div className="col-md-6">
         <div className="f-services d-md-flex flex-md-column-reverse">
          <div className="img w-100" style={{ backgroundImage: 'url(images/xf-services.jpg.pagespeed.ic.drSZRkzO0f.jpg)' }} />
          <div className="text w-100 p-4 text-center mb-md-4">
           <div className="icon"><span className="flaticon-pillow" /></div>
           <h3>Cozy Room</h3>
           <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
         </div>
        </div>
        <div className="col-md-6">
         <div className="f-services">
          <div className="img w-100 mb-md-4" style={{ backgroundImage: 'url(images/xf-services-2.jpg.pagespeed.ic._hiWsiOtrq.jpg)' }} />
          <div className="text w-100 p-4 text-center">
           <div className="icon"><span className="flaticon-special" /></div>
           <h3>Special Offers</h3>
           <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="col-md-6 heading-section d-flex align-items-center">
       <div className="mt-5 mt-md-0">
        <span className="subheading">About Us</span>
        <h2 className="mb-4">Unwind A Hotel Booking Agency</h2>
        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p><a href="#" className="btn btn-primary py-3 px-4">Book Your Room Now</a></p>
       </div>
      </div>
     </div>
    </div>
   </section>

  </div>
 )
}

export default AboutContent
