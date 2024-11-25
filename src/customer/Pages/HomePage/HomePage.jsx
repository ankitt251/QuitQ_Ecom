// import React from "react";
// import MainCarousel from "../../components/HomeCarousel/MainCarousel";
// import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

// const HomePage = () => {
//   return (
//     <div>
//       <MainCarousel />
//       <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
//         <HomeSectionCarousel/>
//         <HomeSectionCarousel/>
//         <HomeSectionCarousel/>
//         <HomeSectionCarousel/>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('../homeebg.jpg')`, // Replace with your image path
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

        {/* Text Box */}
        <div className="relative z-10 flex justify-end items-center h-full pr-[20%] pt-15">
          <div className="bg-[#FFF3E3] rounded-lg p-8 md:p-12 max-w-lg text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              New Arrival
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#9C6E39] mb-4">
              Discover Our New Collection
            </h1>
            <p className="text-gray-700 mb-6">
              Transform your home this Diwali with our exquisite new
              collections! From vibrant decor pieces to timeless home
              essentials, find everything you need to create a space filled with
              warmth, light, and celebration.
            </p>
            <button className="bg-[#9C6E39] text-white font-medium py-3 px-6 rounded shadow hover:bg-[#8A5C34]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Carousel */}
      {/* <MainCarousel /> */}

      {/* Section with Carousels */}
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
};

export default HomePage;
