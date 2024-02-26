import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import InputField from "components/InputField";
import InputMessageFiels from "components/InputMessageFiels";
import MapCard from "components/MapCard";
import Navbar from "components/Navbar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ConatctPage = () => {
  const inputFieldPropList = [
    {},
    { placeholder: "Votre Prenom", label: "Prenom" },
    {
      icon: "images/img_lock_gray_900.svg",
      label: "Email",
      placeholder: "Votre Email",
    },
    {
      icon: "images/img_call_gray_900.svg",
      label: "Telephone",
      placeholder: "+216 ",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col font-lexend items-center w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
        </div>
        <Text
          className="md:ml-[0] ml-[206px] mt-[93px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
          size="txtLexendBold52"
        >
          Contacter Nous
        </Text>
        <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1111px] mt-0.5 w-[9%]" />
        <div className="flex flex-col font-manrope gap-9 items-end mt-16 md:px-10 px-12 sm:px-5 w-full">
          <div className="bg-gray-50 flex flex-col items-start justify-start p-4 md:px-5 rounded-lg w-[89%] md:w-full">
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
          <div className="bg-gray-50_01 flex flex-col items-center justify-start p-[17px] md:px-5 rounded-lg w-[89%] md:w-full">
            <div className="flex flex-col gap-8 items-end justify-start mb-6 w-[99%] md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
                  size="txtManropeBold24"
                >
                  Formulaire de contact
                </Text>
                <div className="md:gap-5 gap-9 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  {inputFieldPropList.map((props, index) => (
                    <React.Fragment key={`InputField${index}`}>
                      <InputField
                        className="bg-white-A700 flex flex-1 flex-col items-start justify-end outline outline-[1px] outline-gray-500 p-[11px] rounded w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
                <InputMessageFiels className="bg-white-A700 flex flex-col md:gap-10 gap-[69px] justify-end outline outline-[1px] outline-gray-500 rounded w-full" />
              </div>
              <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[122px] rounded-[22px]"
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-1.5"
                      src="images/img_save.svg"
                      alt="save"
                    />
                  }
                  color="light_blue_900_01"
                  size="md"
                  variant="fill"
                >
                  <div className="text-base text-left">Envoyer</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[232px] mt-[49px] text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
          size="txtManropeBold24"
        >
          Visiter ACCIA
        </Text>
        <div className="flex flex-col font-manrope gap-10 items-end mt-[19px] md:px-10 px-12 sm:px-5 w-full">
          <MapCard
            className="bg-cover bg-no-repeat flex flex-col h-80 items-start justify-end p-[55px] md:px-5 w-[89%] md:w-full"
            style={{ backgroundImage: "url('images/img_group14.svg')" }}
          />
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[109px] mr-1.5 rounded"
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
        <div className="flex flex-col items-center mt-[43px] w-full">
          <Footer className="bg-gray-300 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ConatctPage;
