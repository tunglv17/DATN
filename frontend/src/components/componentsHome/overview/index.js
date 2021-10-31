import React from 'react'

const ComponentsOverview = () => {
 return (
  <div>
   <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-md-10">
       <div className="row">
        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
         <div className="block-18 text-center">
          <div className="text">
           <strong className="number" data-number={50000}>0</strong>
           <span>Khách vui vẻ </span>
          </div>
         </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
         <div className="block-18 text-center">
          <div className="text">
           <strong className="number" data-number={3000}>0</strong>
           <span>Phòng</span>
          </div>
         </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
         <div className="block-18 text-center">
          <div className="text">
           <strong className="number" data-number={1000}>0</strong>
           <span>Nhân Viên</span>
          </div>
         </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
         <div className="block-18 text-center">
          <div className="text">
           <strong className="number" data-number={100}>0</strong>
           <span>Điểm Đến</span>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

  </div>
 )
}

export default ComponentsOverview
