import React from "react";

import { useNavigate } from "react-router-dom";

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

const ReglesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
        </div>
        <PageTitle className="flex flex-col md:ml-[0] ml-[206px] mt-24 md:px-5 relative w-[45%] md:w-full" />
        <Text
          className="md:ml-[0] ml-[193px] mt-[67px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
          size="txtLexendBold29"
        >
          Droits d’inscription{" "}
        </Text>
        <div className="flex flex-col font-manrope items-center mt-2 md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
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
        </div>
        <Text
          className="md:ml-[0] ml-[193px] mt-[33px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
          size="txtLexendBold29"
        >
          Devoirs d’engagement
        </Text>
        <div className="flex flex-col font-manrope items-center mt-2 md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
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
        </div>
        <Text
          className="md:ml-[0] ml-[193px] mt-[30px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
          size="txtLexendBold29"
        >
          Statut de l’association
        </Text>
        <div className="flex flex-col font-manrope items-center mt-[11px] md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
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
        </div>
        <Text
          className="md:ml-[0] ml-[193px] mt-[30px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
          size="txtLexendBold29"
        >
          Droit interne
        </Text>
        <div className="flex flex-col font-manrope items-center mt-[11px] md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
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
        </div>
        <Text
          className="md:ml-[0] ml-[193px] mt-[33px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
          size="txtLexendBold29"
        >
          Montant et comment épargner
        </Text>
        <div className="flex flex-col font-manrope items-center mt-2 md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
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
        </div>
        <div className="flex flex-col font-manrope items-end mt-[47px] md:px-10 sm:px-5 px-[59px] w-full">
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] rounded"
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
            <div className="text-base text-left">Retour</div>
          </Button>
        </div>
        <div className="flex flex-col items-center mt-[42px] w-full">
          <Footer className="bg-gray-300 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ReglesPage;
