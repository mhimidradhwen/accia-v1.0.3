import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
       <div className="flex flex-row mb-5 md:flex-col sm:flex-col" >
       <Text
          className=" md:ml-[0] ml-[49px] md:mt-0 mt-[17px] text-base text-center text-gray-700"
          size="txtLexendSemiBold16"
        >
          Plan de site
        </Text>
      
        <Text
          className=" md:ml-[0] ml-[4px] md:mt-0 mt-[17px] text-base text-center text-gray-700"
          size="txtLexendSemiBold16"
        >
          Liens utiles
        </Text>
       </div>
        <Img
          className="h-[58px] sm:h-auto md:ml-[0] ml-[352px] object-cover rounded w-[7%] md:w-full"
          src="images/img_image144.png"
          alt="image144"
        />
        <Img
          className="h-[30px] mb-[17px] md:ml-[0] ml-[447px] md:mt-0 mt-[11px] w-[30px]"
          src="images/img_thumbsup.svg"
          alt="thumbsup"
        />
        <Text
          className="md:ml-[0] ml-[13px] md:mt-0 my-[18px] text-base text-gray-700"
          size="txtLexendSemiBold16"
        >
          Fr
        </Text>
        <Img
          className="common-pointer h-9 mb-3.5 ml-16 md:ml-[0] mr-[41px] md:mt-0 mt-2 w-9"
          src="images/img_circle091.svg"
          alt="circle091"
          onClick={() => navigate("/profilepage")}
        />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
