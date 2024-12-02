import React from "react";

const CarousalCard = (props) => {
    return (
        <a href={`http://localhost:3000/productdetails/${props.Product.id}`}>
            <div className='cursor-pointer flex flex-col items-center bg-gray-700 rounded-lg shadow-md overflow-hidden w-[15rem] h-[18rem] mx-3 border'>


                <div className='h-[13rem] w-[10rem]'>
                    <img className="object-cover object-top w-full h-full" src={props.Product.image_URL} />
                </div>
                <div className="p-4">
                    <p className="text-lg  lowercase font-xstext-grey-900 text-white">{props.Product.brand}</p>
                </div>
            </div>
        </a>
    )
};

export default CarousalCard;