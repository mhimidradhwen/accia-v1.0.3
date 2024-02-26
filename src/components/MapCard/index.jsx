import React from "react";

import { Img } from "components";

const MapCard = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_group14.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[147px] mt-0.5 w-[66%] md:w-full">
          <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col items-center justify-start mb-[102px] md:mt-0 mt-[70px] p-2.5 rounded-[18px] w-[13%] md:w-full">
            <Img className="h-4 w-4" src="images/img_cart.svg" alt="cart" />
          </div>
          <div className="bg-light_blue-900 flex flex-col items-center justify-start mb-[93px] md:ml-[0] ml-[252px] md:mt-0 mt-[71px] p-3 rounded-[22px] w-[16%] md:w-full">
            <Img
              className="h-5 w-5"
              src="images/img_locationon.svg"
              alt="locationon"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[136px] justify-start md:ml-[0] ml-[142px] w-[17%] md:w-full">
            <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[29px] p-2.5 rounded-[18px] shadow-bs2 w-[76%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_cart.svg"
                alt="cart_One"
              />
            </div>
            <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col items-center justify-start mr-[29px] p-2.5 rounded-[18px] shadow-bs2 w-[76%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_home_gray_500.svg"
                alt="home"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MapCard.defaultProps = {};

export default MapCard;
