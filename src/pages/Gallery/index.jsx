import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import PaginationBar from "components/PaginationBar";
import SearchBar from "components/SearchBar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <Text
            className="md:ml-[0] ml-[206px] mt-[90px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Gallerie
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1157px] mt-[5px] w-[6%]" />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[22px] items-center justify-end md:ml-[0] ml-[193px] mt-[89px] md:px-5 w-[78%] md:w-full">
            <Img
              className="h-[400px] sm:h-auto object-cover w-[49%] md:w-full"
              src="images/img_image36.png"
              alt="imageThirtySix"
            />
            <div className="flex flex-col gap-5 items-center justify-start w-1/2 md:w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image37.png"
                  alt="imageThirtySeven"
                />
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image38.png"
                  alt="imageThirtyEight"
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image39.png"
                  alt="imageThirtyNine"
                />
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image40.png"
                  alt="imageForty"
                />
              </div>
            </div>
          </div>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-end md:ml-[0] ml-[193px] mt-5 md:px-5 w-[78%] md:w-full">
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image41.png"
              alt="imageFortyOne"
            />
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image42.png"
              alt="imageFortyTwo"
            />
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image43.png"
              alt="imageFortyThree"
            />
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image44.png"
              alt="imageFortyFour"
            />
          </div>
          <div className="flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1131px] mt-[60px] mx-auto md:px-5 w-full">
            <PaginationBar className="flex relative w-[22%]" />
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] rounded"
              onClick={() => navigate("/home1")}
              leftIcon={
                <Img
                  className="h-5 mr-1.5 my-px"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              shape="round"
              color="light_blue_50"
              size="md"
              variant="fill"
            >
              <div className="text-base text-left">Retour</div>
            </Button>
          </div>
          <Footer className="bg-gray-300 flex items-center justify-center mt-[71px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
