import React from 'react'

const BookingWebsite = () => {
    return (
        <>
        <section className="ftco-booking">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form action="#" className="booking-form">
                            <div className="row">
                                <div className="col-md-3 d-flex">
                                    <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                        <div className="wrap">
                                            <label htmlFor="#">Ngày Đến</label>
                                            <input type="text" className="form-control checkin_date" placeholder="Check-in date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex">
                                    <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                        <div className="wrap">
                                            <label htmlFor="#">Ngày Đi</label>
                                            <input type="text" className="form-control checkout_date" placeholder="Check-out date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex">
                                    <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                        <div className="wrap">
                                            <label htmlFor="#">Phòng</label>
                                            <div className="form-field">
                                                <div className="select-wrap">
                                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                    <select name id className="form-control">
                                                        <option value>Suite</option>
                                                        <option value>Phòng gia đình </option>
                                                        <option value>Deluxe Room</option>
                                                        <option value>Phòng cổ điển</option>
                                                        <option value>Phòng Superior</option>
                                                        <option value>Phòng sang trọng </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex">
                                    <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                        <div className="wrap">
                                            <label htmlFor="#">Khách Hàng</label>
                                            <div className="form-field">
                                                <div className="select-wrap">
                                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                    <select name id className="form-control">
                                                        <option value>1 Người</option>
                                                        <option value>2 Người</option>
                                                        <option value>3 Người</option>
                                                        <option value>4 Người</option>
                                                        <option value>5 Người</option>
                                                        <option value>6 Người</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex">
                                    <div className="form-group d-flex align-self-stretch">
                                        <input type="submit" defaultValue="Check Availability" className="btn btn-primary py-3 px-4 align-self-stretch" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default BookingWebsite
