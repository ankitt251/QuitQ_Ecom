import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
          <img className="object-cover object-top w-full h-full" src="https://rukminim2.flixcart.com/image/832/832/koixwnk0/shirt/e/g/4/s-tbh-joan-bl-the-bear-house-original-imag2ygdfpmy5rue.jpeg?q=70&crop=false"
          alt=""/>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">THE BEAR HOUSE</h3>
          <p className="mt-2 text-sm text-gray-500 ">Men Slim Fit Checkered Casual Shirt</p>
        </div>

    </div>
  );
};

export default HomeSectionCard;
