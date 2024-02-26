import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import EventInfosBar from "components/EventInfosBar";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SingleEventPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row font-lexend md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <Text
            className="md:ml-[0] ml-[206px] mt-[90px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Conférence Annuelle{" "}
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1157px] mt-[5px] w-[6%]" />
          <Img
            className="h-[390px] sm:h-auto max-w-[1099px] mt-14 mx-auto object-cover rounded-lg w-full"
            src="images/img_image68_390x1099.png"
            alt="imageSixtyEight"
          />
          <EventInfosBar className="bg-gray-50 flex md:flex-col flex-row font-manrope md:gap-5 items-end justify-start max-w-[1096px] mt-[19px] mx-auto p-3 md:px-5 rounded-lg w-full" />
          <Text
            className="md:ml-[0] ml-[193px] mt-[77px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
            size="txtLexendBold29"
          >
            Details
          </Text>
          <Text
            className="leading-[22.00px] md:ml-[0] ml-[193px] mt-[11px] text-gray-900 text-sm w-[76%] sm:w-full"
            size="txtManropeRegular14"
          >
            Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
            sunt commodo anim minim laborum magna. Cillum amet id id cillum
            mollit magna incididunt culpa ea quis do consectetur reprehenderit
            ut elit.Dolore esse Lorem cupidatat deserunt ullamco ullamco dolor
            consequat veniam Lorem aliqua anim consectetur esse est eiusmod ad.
            Dolor nulla laborum laborum ut magna fugiat id aliqua mollit est
            velit incididunt eu eu fugiat fugiat. Sit irure Lorem ut aute
            pariatur magna. Quis ea ea non nostrud ex do cupidatat consectetur
            do labore mollit sunt voluptate. Consequat magna ad cupidatat
            occaecat est pariatur laboris commodo magna consectetur.Minim in
            eiusmod labori
          </Text>
          <Text
            className="md:ml-[0] ml-[193px] mt-[33px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
            size="txtLexendBold29"
          >
            Thematique
          </Text>
          <Text
            className="leading-[22.00px] md:ml-[0] ml-[193px] mt-2 text-gray-900 text-sm w-[76%] sm:w-full"
            size="txtManropeRegular14"
          >
            Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
            sunt commodo anim minim laborum magna. Cillum amet id id cillum
            mollit magna incididunt culpa ea quis do consectetur reprehenderit
            ut elit.Dolore esse Lorem cupidatat deserunt ullamco ullamco dolor
            consequat veniam Lorem aliqua anim consectetur esse est eiusmod ad.
            Dolor nulla laborum laborum ut magna fugiat id aliqua mollit est
            velit incididunt eu eu fugiat fugiat. Sit irure Lorem ut aute
            pariatur magna. Quis ea ea non nostrud ex do cupidatat consectetur
            do labore mollit sunt voluptate. Consequat magna ad cupidatat
            occaecat est pariatur laboris commodo magna consectetur.Minim in
            eiusmod labori
          </Text>
          <Text
            className="md:ml-[0] ml-[193px] mt-[30px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
            size="txtLexendBold29"
          >
            Partenaires
          </Text>
          <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start md:ml-[0] ml-[213px] mt-7 md:px-5 w-[41%] md:w-full">
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image22_82x82.png"
              alt="imageSixtyNine"
            />
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image22_5.png"
              alt="imageSixtyNine_One"
            />
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image69.png"
              alt="imageSixtyNine_Two"
            />
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image22_6.png"
              alt="imageSixtyNine_Three"
            />
          </div>
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] md:ml-[0] ml-[1283px] mr-[59px] mt-9 rounded"
            onClick={() => navigate("/eventspage")}
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

export default SingleEventPagePage;
