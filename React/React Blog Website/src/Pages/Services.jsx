import React from "react";
import imagesData from "../Components/imagesData";
import Cards from "../Components/Cards";

function Service() {

    return (<>

        <div className="my-5 mt-5">
            <h1 className="text-center fw-bold">
                Our Services
            </h1>
        </div>

        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-3">
                        {imagesData.map((val,index)=>{
                            return <Cards 
                                src={val.src}
                                title={val.title}
                                para={val.services}
                                key={index}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Service;