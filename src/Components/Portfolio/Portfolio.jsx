import { useState } from "react";
import myImg1 from "./cloud1.png";
import myImg2 from "./cloud2.png";
import myImg3 from "./cloud3.png";

function Portfolio() {
    let [src , setSrc] = useState()
    function changeSrc(e){
        let src2 = e.target.getAttribute('data');
         setSrc(src2)
    }
    return <>
        <div className="modal" id="myModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <img src={src} alt="" />
                </div>
            </div>
        </div>
        <section className="vh-100 py-5">
            <div className="main-info portfolio d-flex justify-content-center align-items-center text-center">
                <div>
                    <h2 className="main-text">PORTFOLIO COMPONENT</h2>
                    <div className="lines d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-4 ">
                        <div onClick={changeSrc} data={myImg1} data-bs-toggle="modal" data-bs-target="#myModal" className="div rounded-3 overflow-hidden position-relative">
                            <img src={myImg1} className="w-100" alt="img" />
                            <div data={myImg1} className="layer position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0">
                                <i data={myImg1} className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div onClick={changeSrc} data={myImg2} data-bs-toggle="modal" data-bs-target="#myModal" className="div rounded-3 overflow-hidden position-relative">
                            <img src={myImg2} className="w-100" alt="img" />
                            <div data={myImg2} className="layer position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0">
                                <i data={myImg2} className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div onClick={changeSrc} data={myImg3} data-bs-toggle="modal" data-bs-target="#myModal" className="div rounded-3 overflow-hidden position-relative">
                            <img src={myImg3} className="w-100" alt="img" />
                            <div data={myImg3} className="layer position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0">
                                <i data={myImg3} className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div onClick={changeSrc} data={myImg1} data-bs-toggle="modal" data-bs-target="#myModal" className="div rounded-3 overflow-hidden position-relative">
                            <img src={myImg1} className="w-100" alt="img" />
                            <div data={myImg1} className="layer position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0">
                                <i data={myImg1} className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div onClick={changeSrc} data={myImg2} data-bs-toggle="modal" data-bs-target="#myModal" className="div rounded-3 overflow-hidden position-relative">
                            <img src={myImg2} className="w-100" alt="img" />
                            <div data={myImg2} className="layer position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0">
                                <i data={myImg2} className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div onClick={changeSrc} data={myImg3} data-bs-toggle="modal" data-bs-target="#myModal" className="div rounded-3 overflow-hidden position-relative">
                            <img src={myImg3} className="w-100" alt="img" />
                            <div data={myImg3} className="layer position-absolute d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0">
                                <i data={myImg3} className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

}
export default Portfolio;
