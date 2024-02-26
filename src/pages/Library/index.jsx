import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import CategoryCard from "components/CategoryCard";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import PageTitle from "components/PageTitle";
import RapportCard from "components/RapportCard";
import SearchBar from "components/SearchBar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LibraryPage = () => {
  const navigate = useNavigate();

  const categoryCardPropList = [
    {},
    { subhead: "21 Document", title: "Categorie 3" },
    { subhead: "1 Document", title: "Categorie 4" },
  ];
  const rapportCardPropList = [
    {},
    { rapportImage: "images/img_image34_1.png" },
    { rapportImage: "images/img_image34_2.png" },
    {},
    { rapportImage: "images/img_image34_1.png" },
    { rapportImage: "images/img_image34_2.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto pb-0.5 shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <PageTitle className="flex flex-col font-lexend md:ml-[0] ml-[206px] mt-24 md:px-5 relative w-[24%]" />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center max-w-[1099px] mt-[110px] mx-auto md:px-5 w-full" />
          <div className="bg-white-A700 border border-gray-500 border-solid flex md:flex-col flex-row font-manrope md:gap-10 gap-[107px] items-center justify-end max-w-[1099px] mt-[67px] mx-auto p-[7px] md:px-5 rounded-lg shadow-bs1 w-full">
            <CategoryCard
              className="bg-light_blue-900_30 flex flex-col items-start justify-end md:mt-0 my-[5px] p-[3px] rounded"
              title="Categorie 1"
              subhead="15 Document"
            />
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[187px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:mt-0 my-[5px] w-[76%] md:w-full"
              orientation="horizontal"
            >
              {categoryCardPropList.map((props, index) => (
                <React.Fragment key={`CategoryCard${index}`}>
                  <CategoryCard
                    className="flex flex-col items-start justify-end p-[3px] w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <div className="font-lexend gap-32 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1111px] min-h-[auto] mt-[71px] mx-auto md:px-5 w-full">
            {rapportCardPropList.map((props, index) => (
              <React.Fragment key={`RapportCard${index}`}>
                <RapportCard
                  className="bg-gray-50_01 flex flex-1 flex-col items-center justify-start p-[9px] rounded w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1132px] mt-[67px] mx-auto md:px-5 w-full">
            <div className="flex relative w-[22%]">
              <div className="flex my-auto w-[76%]">
                <div className="flex my-auto w-[79%]">
                  <div className="flex my-auto w-[68%]">
                    <Img
                      className="h-9 my-auto rounded"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                    <Button
                      className="cursor-pointer min-w-[53px] ml-[-16px] my-auto rounded text-center text-sm z-[1]"
                      shape="round"
                      color="light_blue_900"
                      size="sm"
                      variant="fill"
                    >
                      1
                    </Button>
                  </div>
                  <Button
                    className="border border-light_blue-900 border-solid cursor-pointer min-w-[57px] ml-[-10px] my-auto rounded text-center text-sm z-[1]"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    2
                  </Button>
                </div>
                <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-col items-center justify-end ml-[-17px] my-auto p-[7px] rounded z-[1]">
                  <Text
                    className="text-light_blue-900 text-sm"
                    size="txtManropeRegular14Lightblue900"
                  >
                    3
                  </Text>
                </div>
              </div>
              <Img
                className="h-9 ml-[-1px] my-auto rounded z-[1]"
                src="images/img_arrowleft.svg"
                alt="arrowright"
              />
            </div>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] mt-3.5 rounded"
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
          <Footer className="bg-gray-300 flex items-center justify-center mt-[82px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LibraryPage;
