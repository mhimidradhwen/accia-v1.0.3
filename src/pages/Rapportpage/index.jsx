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
import ReturnButton from "components/ReturnButton";

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
    { rapportImage: "images/img_image34_7.png" },
    { rapportImage: "images/img_image34_7.png" },
    { rapportImage: "images/img_image34_7.png" },
    { rapportImage: "images/img_image34_7.png" },
    { rapportImage: "images/img_image34_7.png" },
    { rapportImage: "images/img_image34_7.png" },
    { rapportImage: "images/img_image34_7.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle className="font-lexend md:h-[162px] h-[66px] md:ml-[0] ml-[206px] mt-[97px] md:px-5 relative w-[32%] sm:w-full" />
          <div className="">
            <div className="ml-3">
              <Text
                className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
                size="txtLexendSemiBold14"
              >
                Rapports{" "}
              </Text>
              <List
                className="sm:flex-col flex-row font-lexend gap-9 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-4 md:ml-[0] mx-4 mt-[19px] md:px-5 w-full"
                orientation="horizontal"
              >
                {rapportCardPropList.map((props, index) => (
                  <React.Fragment key={`RapportCard${index}`}>
                    <RapportCard {...props} />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div>
              <Text
                className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
                size="txtLexendSemiBold14"
              >
                Guides{" "}
              </Text>
              <List
                className="sm:flex-col flex-row font-lexend gap-9 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-4 md:ml-[0] mx-4 mt-[19px] md:px-5 w-full"
                orientation="horizontal"
              >
                {rapportCardPropList1.map((props, index) => (
                  <React.Fragment key={`RapportCard${index}`}>
                    <RapportCard {...props} />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
        <ReturnButton />
      </div>
    </>
  );
};

export default RapportpagePage;
