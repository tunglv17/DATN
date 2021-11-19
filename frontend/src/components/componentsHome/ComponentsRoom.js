import React from 'react'

const ComponentsRoom = (props) => {
       return (
              <section className="ftco-section bg-light">
                     <div className="container-xl">
                            <div className="row justify-content-center">
                                   <div className="col-md-8 heading-section text-center mb-5">
                                          <span className="subheading">NHỮNG CĂN PHÒNG CỦA CHÚNG TA</span>
                                          <h2 className="mb-4">Phòng nổi bật</h2>
                                   </div>
                            </div>
                            <div className="row justify-content-center">
                                  {props.listRoom.map((item,index) =>{
                                         return(
                                          <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                                          <div className="room-wrap d-md-flex flex-md-column-reverse">
                                                 <div className="text p-5 text-center">
                                                        <h3><a href="room-single.html">{item.name}</a></h3>
                                                        <p>{item.desc}</p>
                                                        <p className="mb-0 mt-2"><span className="me-3 price">${item.price} <small>/ night</small></span><a href="#" className="btn-custom">Book Now</a></p>
                                                 </div>
                                                 <img className="img img-room" src="./images/xroom-1.jpg.pagespeed.ic.8hFWmffUTt.jpg" alt />
                                          </div>
                                   </div>
                                         )
                                  })}
                            </div>
                     </div>
              </section>
       )
}

export default ComponentsRoom
