import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import PageTitle from "components/PageTitle";
import PaginationBar from "components/PaginationBar";
import RapportCard from "components/RapportCard";
import SearchBar from "components/SearchBar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RapportpagePage = () => {
  const navigate = useNavigate();

  const rapportCardPropList = [
    {},
    { rapportImage: "images/img_image34_1.png" },
    { rapportImage: "images/img_image34_2.png" },
    { rapportImage: "images/img_image34_3.png" },
  ];
  const rapportCardPropList1 = [
    { rapportImage: "images/img_image34_4.png" },
    { rapportImage: "images/img_image34_5.png" },
    { rapportImage: "images/img_image34_6.png" },
    { rapportImage: "images/img_image34_7.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <PageTitle className="font-lexend md:h-[162px] h-[66px] md:ml-[0] ml-[206px] mt-[97px] md:px-5 relative w-[32%] sm:w-full" />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[212px] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtLexendBold32Bluegray900"
          >
            Rapport Financier
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[214px] mr-[1153px] mt-0.5 w-[6%]" />
          <List
            className="sm:flex-col flex-row font-lexend gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:ml-[0] ml-[193px] mt-[19px] md:px-5 w-[85%]"
            orientation="horizontal"
          >
            {rapportCardPropList.map((props, index) => (
              <React.Fragment key={`RapportCard${index}`}>
                <RapportCard
                  className="bg-gray-50_01 flex flex-col items-center justify-start p-[9px] rounded w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <PaginationBar className="flex font-manrope md:ml-[0] ml-[193px] mt-9 md:px-5 relative w-[17%]" />
          <Text
            className="md:ml-[0] ml-[212px] mt-[33px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtLexendBold32Bluegray900"
          >
            Guides
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[214px] mr-[1153px] mt-[5px] w-[6%]" />
          <List
            className="sm:flex-col flex-row font-lexend gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:ml-[0] ml-[193px] mt-[19px] md:px-5 w-[85%]"
            orientation="horizontal"
          >
            {rapportCardPropList1.map((props, index) => (
              <React.Fragment key={`RapportCard${index}`}>
                <RapportCard
                  className="bg-gray-50_01 flex flex-col items-center justify-start p-[9px] rounded w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div className="flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1225px] mt-9 mx-auto md:px-5 w-full">
            <PaginationBar className="flex relative w-1/5" />
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] mt-1.5 rounded"
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
          <Footer className="bg-gray-300 flex items-center justify-center mt-[35px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RapportpagePage;
