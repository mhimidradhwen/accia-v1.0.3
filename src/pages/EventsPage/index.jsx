import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import SearchBar from "components/SearchBar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EventsPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row font-lexend md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <Text
            className="md:ml-[0] ml-[206px] mt-[93px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Evenements
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1157px] mt-0.5 w-[6%]" />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[193px] mt-[99px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
            size="txtLexendBold32Lightblue900"
          >
            Conférence Annuelle{" "}
          </Text>
          <Img
            className="h-48 sm:h-auto max-w-[1099px] mt-[29px] mx-auto object-cover rounded-lg w-full"
            src="images/img_image68.png"
            alt="imageSixtyEight"
          />
          <div className="flex md:flex-col flex-row font-manrope gap-3.5 items-center justify-center max-w-[1096px] mt-[25px] mx-auto md:px-5 w-full">
            <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-[27%] md:w-full">
              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                <Text
                  className="text-light_blue-900 text-sm"
                  size="txtManropeBold14"
                >
                  Date et Horaire
                </Text>
                <div className="flex flex-row items-start justify-start w-[85%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_clock1.svg"
                    alt="clockOne"
                  />
                  <Text
                    className="ml-1 text-blue_gray-900 text-xs"
                    size="txtManropeRegular12"
                  >
                    10:00 - 11:00 AM
                  </Text>
                  <Img
                    className="h-4 ml-[31px] w-4"
                    src="images/img_clock1_blue_gray_500.svg"
                    alt="clockOne_One"
                  />
                  <Text
                    className="ml-1 text-blue_gray-900 text-xs"
                    size="txtManropeRegular12"
                  >
                    11/12/2021
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start w-[34%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_pin31_blue_gray_500_16x16.svg"
                    alt="pinThirtyOne"
                  />
                  <Text
                    className="ml-1 text-blue_gray-900 text-xs"
                    size="txtManropeRegular12"
                  >
                    Hotel X-Y-Z
                  </Text>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-end md:ml-[0] ml-[86px] w-[67%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[48%]">
                    <Button
                      className="common-pointer border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-[80px] rounded-[12px]"
                      onClick={() => navigate("/singleeventpage")}
                      leftIcon={
                        <Img
                          className="h-4 mb-px mr-1"
                          src="images/img_view.svg"
                          alt="View"
                        />
                      }
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="text-[11px] text-left">Voir plus</div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[49%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[82px] rounded-[12px]"
                      leftIcon={
                        <Img
                          className="h-4 mb-px mr-1"
                          src="images/img_bag.svg"
                          alt="bag"
                        />
                      }
                      color="light_blue_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="text-[11px] text-left">Reserver</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-col gap-[9px] items-start justify-center p-4 rounded-lg">
              <Text
                className="text-light_blue-900 text-sm"
                size="txtManropeBold14"
              >
                Details
              </Text>
              <Text
                className="leading-[20.00px] mb-1 text-blue_gray-900 text-xs w-full"
                size="txtManropeRegular12"
              >
                Commodo non magna quis ad occaecat aute fugiat veniam et id qui
                ut quis esse culpa exercitation. Officia fugiat veniam Lorem qui
                veniam laborum sint pariatur culpa nulla enim qui sit id
                consequat id sunt. Mollit et Lorem minim commodo duis nulla
                consequat quis. Mollit est id reprehenderit culpa sit sunt irure
                ad do consequat elit eiusmod commodo aliquip.Excepteur cupidatat
                reprehenderit Lorem aliquip minim ullamco exercitation cupidatat
                sunt in proident reprehenderit dolore exercitation. Ipsum est
                ullamco ipsum laboris ipsum la
              </Text>
            </div>
          </div>
          <Line className="bg-gray-400 h-px max-w-[1101px] mt-[49px] mx-auto w-full" />
          <Text
            className="md:ml-[0] ml-[193px] mt-[27px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
            size="txtLexendBold32Lightblue900"
          >
            Conférence Annuelle{" "}
          </Text>
          <Img
            className="h-48 sm:h-auto max-w-[1099px] mt-[29px] mx-auto object-cover rounded-lg w-full"
            src="images/img_image68_192x1099.png"
            alt="imageSixtyEight_One"
          />
          <div className="flex md:flex-col flex-row font-manrope gap-3.5 items-center justify-center max-w-[1096px] mt-[25px] mx-auto md:px-5 w-full">
            <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-[27%] md:w-full">
              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                <Text
                  className="text-light_blue-900 text-sm"
                  size="txtManropeBold14"
                >
                  Date et Horaire
                </Text>
                <div className="flex flex-row items-start justify-start w-[85%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_clock1.svg"
                    alt="clockOne_Two"
                  />
                  <Text
                    className="ml-1 text-blue_gray-900 text-xs"
                    size="txtManropeRegular12"
                  >
                    10:00 - 11:00 AM
                  </Text>
                  <Img
                    className="h-4 ml-[31px] w-4"
                    src="images/img_clock1_blue_gray_500.svg"
                    alt="clockOne_Three"
                  />
                  <Text
                    className="ml-1 text-blue_gray-900 text-xs"
                    size="txtManropeRegular12"
                  >
                    11/12/2021
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start w-[34%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_pin31_blue_gray_500_16x16.svg"
                    alt="pinThirtyOne_One"
                  />
                  <Text
                    className="ml-1 text-blue_gray-900 text-xs"
                    size="txtManropeRegular12"
                  >
                    Hotel X-Y-Z
                  </Text>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-end md:ml-[0] ml-[86px] w-[67%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[48%]">
                    <Button
                      className="border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-[80px] rounded-[12px]"
                      leftIcon={
                        <Img
                          className="h-4 mb-px mr-1"
                          src="images/img_view.svg"
                          alt="View"
                        />
                      }
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="text-[11px] text-left">Voir plus</div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[49%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[82px] rounded-[12px]"
                      leftIcon={
                        <Img
                          className="h-4 mb-px mr-1"
                          src="images/img_bag.svg"
                          alt="bag"
                        />
                      }
                      color="light_blue_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="text-[11px] text-left">Reserver</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-col gap-[9px] items-start justify-center p-4 rounded-lg">
              <Text
                className="text-light_blue-900 text-sm"
                size="txtManropeBold14"
              >
                Details
              </Text>
              <Text
                className="leading-[20.00px] mb-1 text-blue_gray-900 text-xs w-full"
                size="txtManropeRegular12"
              >
                Commodo non magna quis ad occaecat aute fugiat veniam et id qui
                ut quis esse culpa exercitation. Officia fugiat veniam Lorem qui
                veniam laborum sint pariatur culpa nulla enim qui sit id
                consequat id sunt. Mollit et Lorem minim commodo duis nulla
                consequat quis. Mollit est id reprehenderit culpa sit sunt irure
                ad do consequat elit eiusmod commodo aliquip.Excepteur cupidatat
                reprehenderit Lorem aliquip minim ullamco exercitation cupidatat
                sunt in proident reprehenderit dolore exercitation. Ipsum est
                ullamco ipsum laboris ipsum la
              </Text>
            </div>
          </div>
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] md:ml-[0] ml-[1283px] mr-[59px] mt-[92px] rounded"
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
            <div className="font-manrope text-base text-left">Retour</div>
          </Button>
          <Footer className="bg-gray-300 flex items-center justify-center mt-[42px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default EventsPagePage;
