import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import OwnerComment from "components/OwnerComment";
import PageTitle from "components/PageTitle";
import UserComments from "components/UserComments";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SinglePostPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-end w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row font-lexend md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <div className="flex md:flex-col flex-row font-manrope md:gap-5 items-start justify-center max-w-[1099px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[47px] items-start justify-start w-[83%] md:w-full">
              <Input
                name="rechercherCounter"
                placeholder="Rechercher ..."
                className="p-0 placeholder:text-gray-400 text-left text-sm w-full"
                wrapClassName="outline outline-[1px] outline-gray-500 w-full"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <PageTitle className="flex flex-col font-lexend p-[30px] relative w-[37%]" />
            </div>
            <div className="bg-light_blue-900 flex md:flex-1 flex-col items-center justify-start mb-[74px] p-2.5 rounded-br rounded-tr w-[17%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_search.svg"
                alt="search"
              />
            </div>
          </div>
          <Img
            className="h-[390px] sm:h-auto max-w-[1099px] mt-[19px] mx-auto object-cover w-full"
            src="images/img_image35.png"
            alt="imageThirtyFive"
          />
          <Text
            className="md:ml-[0] ml-[193px] mr-[1181px] mt-[23px] text-gray-500 text-sm"
            size="txtManropeRegular14Gray500"
          >
            29/08/2022
          </Text>
          <Text
            className="leading-[22.00px] md:ml-[0] ml-[193px] mr-[159px] mt-6 text-gray-900 text-sm w-[76%] sm:w-full"
            size="txtManropeRegular14"
          >
            Incididunt occaecat sunt Lorem et eu aliqua minim pariatur velit. Do
            sunt pariatur velit elit dolore non ad officia nulla do ex sint
            consequat. Lorem adipisicing est cillum do anim ea do anim occaecat.
            Amet ad anim aute ut est amet cillum est deserunt qui non.Eiusmod ad
            sit adipisicing eu deserunt dolore mollit elit adipisicing aliqua et
            irure voluptate ullamco consectetur. Reprehenderit id eu id magna ex
            anim consectetur aute. Deserunt ad dolore nulla elit nisi nisi
            mollit et tempor tempor aliqua ullamco.Sint irure Lorem excepteur
            amet incididunt ad et commodo adipisicing tempor nisi culpa aliquip
            sint qui minim enim. Sunt ex nulla nulla nisi Lorem id voluptate
            quis ea sint aute in officia dolor eu eu elit sunt. Adipisicing
            mollit commodo magna cupidatat cillum ut enim excepteur do duis eu
            nulla nisi incididunt esse nostrud sit. Sit aute pariatur
            consectetur velit sint velit. Velit in Lorem est pariatur nostrud
            elit sunt adipisicing eu exercitation minim amet dolor culpa ea
            voluptate non proident ea.Cupidatat nulla nostrud ut adipisicing
            consectetur elit adipisicing enim ad. Ad sunt dolor velit
            reprehenderit nostrud do ullamco cupidatat duis incididunt. Nisi
            quis in consectetur in veniam id dolore in dolor nostrud pariatur.
            Laboris sit labore enim exercitation magna magna commodo Lorem ex
            mollit qui culpa mollit sunt laborum aute pariatur non. Mollit
            dolore irure ad voluptate aliqua deserunt minim ea ut nostrud ipsum
            laboris.Reprehenderit minim mollit commodo ad ullamco sit Lorem
            magna irure. Exercitation commodo minim ea ea nulla ea adipisicing
            irure pariatur eiusmod cupidatat minim.Tempor anim Lorem
            reprehenderit nisi consectetur pariatur ut ex cillum non
            exercitation est eu adipisicing ex eiusmod consectetur. Aliqua amet
            aliqua aliquip ullamco reprehenderit cupidatat minim nulla. Tempor
            ut ex magna cupidatat ea culpa amet occaecat ad. Anim labore quis
            Lorem excepteur id est quis minim incididunt fugiat anim eu sint
            aliquip ullamco consequat ex. Qui nostrud mollit esse esse deserunt
            magna proident proident nulla aliqua.Dolor reprehenderit incididunt
            laboris Lorem irure cupidatat irure aute ut quis elit eiusmod velit
            reprehenderit ut. Ex ipsum culpa nisi amet do pariatur non amet
            labore.Non nulla irure voluptate laboris aute esse. Nulla irure
            exercitation quis dolore eiusmod ea labore. In minim ad occaecat
            elit mollit dolore exercitation mollit laborum. Ex mollit aliqua ad
            Lorem ad sunt fugiat cillum magna dolore sint ut nisi nisi veniam
            culpa.Dolore officia anim ea labore eu proident eiusmod laborum
            proident eiusmod in lab
          </Text>
          <div className="flex md:flex-col flex-row font-manrope md:gap-5 items-start justify-start md:ml-[0] ml-[193px] mr-[1082px] mt-5 md:px-5 w-[13%] md:w-full">
            <Img className="h-7 w-7" src="images/img_offer.svg" alt="offer" />
            <Text
              className="md:ml-[0] ml-[3px] md:mt-0 mt-1.5 text-light_blue-900 text-sm"
              size="txtManropeRegular14Lightblue900"
            >
              <>J&#39;aime</>
            </Text>
            <Img
              className="h-7 md:ml-[0] ml-[17px] w-7"
              src="images/img_share1.svg"
              alt="shareOne"
            />
            <Text
              className="md:ml-[0] ml-[3px] md:mt-0 mt-[7px] text-light_blue-900 text-sm"
              size="txtManropeRegular14Lightblue900"
            >
              Partager
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[193px] mr-[1162px] mt-[26px] text-gray-500 text-sm"
            size="txtManropeRegular14Gray500"
          >
            Commentaires
          </Text>
          <Line className="bg-gray-400 h-px md:ml-[0] ml-[293px] mr-[172px] mt-[21px] w-[68%]" />
          <OwnerComment className="bg-gray-100 flex flex-col font-manrope items-center justify-start md:ml-[0] ml-[193px] mr-[475px] mt-[22px] p-4 md:px-5 rounded-lg w-[54%] md:w-full" />
          <UserComments className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[193px] mr-[475px] mt-3 p-4 md:px-5 w-[54%] md:w-full" />
          <UserComments
            className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[193px] mr-[475px] mt-1 p-4 md:px-5 w-[54%] md:w-full"
            avatar="images/img_rectangle_1.png"
          />
           <UserComments
            className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[193px] mr-[475px] mt-1 p-4 md:px-5 w-[54%] md:w-full"
            avatar="images/img_rectangle_1.png"
            username="Becem ben ammar"
            content="ahla site fik ya tounes"
            heading="hedhe commentaire"
          />
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] md:ml-[0] ml-[1209px] mr-[133px] mt-7 rounded"
            onClick={() => navigate("/")}
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
          <Footer className="bg-gray-300 flex items-center justify-center mt-6 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SinglePostPagePage;
