import { useState } from "react";

function Contact() { 
    function handleChange(e){
        let inputValue = e.target.value
        if(inputValue !== ''){
            e.target.previousElementSibling.classList.add('top-0')
        }else{
            e.target.previousElementSibling.classList.remove('top-0')
        }
    }
    
    
    return <>
        <section className="vh-100 py-5">
        <div className="main-info portfolio d-flex justify-content-center align-items-center text-center">
                <div>
                    <h2 className="main-text">CONATCT SECTION</h2>
                    <div className="lines d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3"></div>
                    </div>
                </div>       
        </div>
        <div className="w-50 contact mx-auto d-flex align-items-center justify-content-center flex-column pt-5 mt-5">
            <div className="name w-100 py-3">
                <h6 className="ms-2 label position-relative">Name:</h6>
                <input type="text" onChange={handleChange} placeholder="Name" className="form-control py-3"/>
            </div>
            <div className="age w-100">
                <h6 className="ms-2 label position-relative">Age:</h6>
                <input type="text" onChange={handleChange} placeholder="Age" className="form-control py-3"/>
            </div>
            <div className="email w-100 py-3">
                <h6 className="ms-2 label position-relative">Email:</h6>
                <input type="text" onChange={handleChange} placeholder="Email" className="form-control py-3"/>
            </div>
            <div className="pass w-100 py-3">
                <h6 className="ms-2 label position-relative">Password:</h6>
                <input type="text" onChange={handleChange} placeholder="Password" className="form-control py-3"/>
            </div>
        </div>
        </section>
    </>
}

export default Contact;