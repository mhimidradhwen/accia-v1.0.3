import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import PageTitle from "components/PageTitle";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row font-lexend md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar />
          <PageTitle title="About page test" className="font-lexend md:h-[163px] h-[65px] md:ml-[0] ml-[205px] mt-[98px] md:px-5 relative w-[30%] sm:w-full" />
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 gap-[74px] items-center justify-center max-w-[1081px] mt-[55px] mx-auto md:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[30.00px] text-gray-900 text-xl w-[71%] sm:w-full"
              size="txtManropeRegular20Gray900"
            >
              Exercitation et laborum anim reprehenderit culpa duis mollit
              veniam labore dolor. Laboris adipisicing veniam labore sit duis id
              nostrud ullamco est qui. Ipsum ipsum nulla ut ut dolor eu et ex in
              laborum enim adipisicing.Exercitation occaecat culpa aliquip culpa
              aliquip anim anim duis. Lorem dolore aute et consequat sit ipsum
              adipisicing ad sit exercitation incididunt non exercitation. Dolor
              eiusmod exercitation amet proident nisi minim nostrud mollit nulla
              aliqua enim non dolore el
            </Text>
            <div className="h-[249px] relative w-[249px]">
              <div className="bg-gray-100 h-[249px] m-auto rounded-[124px] w-[249px]"></div>
              <Img
                className="absolute h-[135px] inset-[0] justify-center m-auto object-cover w-[65%]"
                src="images/img_image71.png"
                alt="imageFortySix"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[206px] mt-[26px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Nos Activités
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1111px] mt-[5px] w-[9%]" />
          <Text
            className="leading-[30.00px] md:ml-[0] ml-[195px] mt-8 text-gray-900 text-xl w-[83%] sm:w-full"
            size="txtManropeRegular20Gray900"
          >
            Nostrud labore id voluptate sint cupidatat cupidatat nostrud fugiat
            qui cupidatat. Aliqua voluptate mollit minim non minim exercitation
            reprehenderit veniam est aliqua Lorem consectetur ex deserunt dolor
            ex laborum labore. Sunt ea cupidatat minim exercitation sunt tempor
            dolore anim elit duis ullamco ad pariatur adipisicing ullamco
            adipisicing aute eu cillum.{" "}
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[175px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[983px] mt-[34px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[118px] relative w-full">
              <div className="bg-gray-300_66 h-[118px] m-auto rounded-[50%] w-[118px]"></div>
              <Img
                className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                src="images/img_lowvision1.svg"
                alt="lowvisionOne"
              />
            </div>
            <div className="h-[118px] relative w-full">
              <div className="bg-gray-300_66 h-[118px] m-auto rounded-[50%] w-[118px]"></div>
              <Img
                className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                src="images/img_edit.svg"
                alt="edit"
              />
            </div>
            <div className="h-[118px] relative w-full">
              <div className="bg-gray-300_66 h-[118px] m-auto rounded-[50%] w-[118px]"></div>
              <Img
                className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                src="images/img_television_light_blue_900.svg"
                alt="television"
              />
            </div>
            <div className="h-[118px] relative w-full">
              <div className="bg-gray-300_66 h-[118px] m-auto rounded-[50%] w-[118px]"></div>
              <Img
                className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                src="images/img_lowvision1_light_blue_900.svg"
                alt="lowvisionOne"
              />
            </div>
          </List>
          <div className="flex sm:flex-col flex-row font-lexend sm:gap-5 items-center justify-center max-w-[1008px] mt-3.5 mx-auto md:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
            <Text
              className="sm:ml-[0] ml-[169px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
            <Text
              className="sm:ml-[0] ml-[175px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
            <Text
              className="sm:ml-[0] ml-[169px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-manrope sm:gap-5 items-center justify-center max-w-[1030px] mt-[15px] mx-auto md:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[22.00px] text-center text-gray-900 text-sm w-[17%] sm:w-full"
              size="txtManropeRegular14"
            >
              Ad enim ipsum nulla id dolore minim quis eiusmo
            </Text>
            <Text
              className="sm:flex-1 leading-[22.00px] ml-32 sm:ml-[0] text-center text-gray-900 text-sm w-[17%] sm:w-full"
              size="txtManropeRegular14"
            >
              Ad enim ipsum nulla id dolore minim quis eiusmo
            </Text>
            <Text
              className="sm:flex-1 leading-[22.00px] sm:ml-[0] ml-[114px] text-center text-gray-900 text-sm w-[17%] sm:w-full"
              size="txtManropeRegular14"
            >
              Ad enim ipsum nulla id dolore minim quis eiusmo
            </Text>
            <Text
              className="sm:flex-1 leading-[22.00px] ml-32 sm:ml-[0] text-center text-gray-900 text-sm w-[17%] sm:w-full"
              size="txtManropeRegular14"
            >
              Ad enim ipsum nulla id dolore minim quis eiusmo
            </Text>
          </div>
          <Button
            className="cursor-pointer font-manrope min-w-[1197px] md:min-w-full md:ml-[0] ml-[195px] mr-[59px] mt-[72px] rounded-lg text-center text-lg"
            color="light_blue_50"
            size="md"
            variant="fill"
          >
            Voir plus
          </Button>
          <div className="flex md:flex-col flex-row font-lexend md:gap-5 items-start justify-start max-w-[1069px] mt-[72px] mx-auto md:px-5 w-full">
            <Img
              className="md:flex-1 h-[246px] sm:h-auto object-cover rounded-[50px] w-[24%] md:w-full"
              src="images/img_image46.png"
              alt="imageFortySix_One"
            />
            <Img
              className="h-6 md:ml-[0] ml-[47px] md:mt-0 mt-[27px] w-6"
              src="images/img_quote1.svg"
              alt="quoteOne"
            />
            <div className="flex md:flex-1 flex-col items-start justify-start ml-6 md:ml-[0] md:mt-0 mt-12 w-[68%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[25px] items-end justify-between w-full">
                <Text
                  className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900_a7"
                  size="txtLexendBold32Lightblue900a7"
                >
                  Et labore cillum anim commodo est nostrud id officia minim
                  ullamco quis a
                </Text>
                <Img
                  className="h-6 mb-[5px] md:mt-0 mt-[102px] w-6"
                  src="images/img_quotes1.svg"
                  alt="quotesOne"
                />
              </div>
              <Text
                className="mt-1 text-gray-500_a7 text-xl"
                size="txtLexendBold20"
              >
                Mr. GHOZZI Adel
              </Text>
              <Text
                className="text-gray-500_a7 text-xl"
                size="txtLexendRegular20"
              >
                President
              </Text>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start md:ml-[0] ml-[195px] mr-[59px] mt-[91px] p-4 md:px-5 rounded-lg w-[83%] md:w-full">
            <div className="flex flex-col gap-3 justify-start mb-[22px] mt-0.5 w-[95%] md:w-full">
              <Text
                className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
                size="txtManropeBold24"
              >
                Address
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="h-8 md:mt-0 mt-1.5 w-8"
                  src="images/img_pin31.svg"
                  alt="pinThirtyOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] md:mt-0 mt-[9px] text-blue_gray-900 text-xl"
                  size="txtManropeRegular20"
                >
                  15 Av. Jean Jaurès, Tunis 1002
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[94px] md:mt-0 mt-1.5 w-8"
                  src="images/img_call.svg"
                  alt="call"
                />
                <Text
                  className="ml-1.5 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-xl"
                  size="txtManropeRegular20"
                >
                  +216 58 456 120
                </Text>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[335px] w-[17%] md:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[180px] rounded-[22px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-1.5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    }
                    color="light_blue_900_01"
                    size="md"
                    variant="fill"
                  >
                    <div className="text-base text-left">Contacter Nous</div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[109px] md:ml-[0] ml-[1283px] mr-[59px] mt-[79px] rounded"
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
          <Footer className="bg-gray-300 flex items-center justify-center mt-11 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
