import { Button } from "bootstrap";
import React from "react";
import '../Components/Custom.css'

function Contact() {

    return (<>

        <div className="my-5 text-center">
            <h1>Contact US</h1>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Enter Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Enter Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <button className="contact_btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Contact;