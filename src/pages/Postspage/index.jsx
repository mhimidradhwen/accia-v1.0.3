import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import PageTitle from "components/PageTitle";
import PaginationBar from "components/PaginationBar";
import PostCard from "components/PostCard";
import SearchBar from "components/SearchBar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PostspagePage = () => {
  const navigate = useNavigate();

  const postCardPropList = [
    {},
    { thumbnail: "images/img_image22_192x291.png" },
    { thumbnail: "images/img_image22_1.png" },
    { thumbnail: "images/img_image22_2.png" },
    { thumbnail: "images/img_image22_3.png" },
    { thumbnail: "images/img_image22_4.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <PageTitle className="font-lexend md:h-[162px] h-[66px] md:ml-[0] ml-[206px] mt-[97px] md:px-5 relative w-[26%]" />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full" />
          <div className="font-manrope md:gap-5 gap-[53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1099px] min-h-[auto] mt-[34px] mx-auto md:px-5 w-full">
            {postCardPropList.map((props, index) => (
              <React.Fragment key={`PostCard${index}`}>
                <PostCard
                  className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded shadow-bs2 w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row font-manrope md:gap-10 items-end justify-between max-w-[1099px] mt-[21px] mx-auto md:px-5 w-full">
            <PaginationBar className="flex mt-2 relative w-[22%]" />
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
          <Footer className="bg-gray-300 flex items-center justify-center mt-[59px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PostspagePage;
