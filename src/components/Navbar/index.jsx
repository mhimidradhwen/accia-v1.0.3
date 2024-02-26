import React from "react";

import { Img, Line, List, Text } from "components";

const Navbar = (props) => {
  return (
    <>
      <div className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full">
        <div className="bg-light_blue-900 flex flex-col h-full items-start justify-start m-auto rounded shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start w-[15%] md:w-full">
            <Img
              className="h-[107px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[63px] h-max inset-[0] items-start justify-center m-auto w-[91%]">
          <Img
            className="h-[63px] sm:h-auto object-cover w-[7%] md:w-full"
            src="images/img_image.png"
            alt="image_Two"
          />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-[89%] md:w-full">
            <List
              className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Accueil
                </Text>
              </div>
              <div className="flex flex-col items-center justify-end sm:ml-[0] p-[3px] w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_cinfo.svg"
                  alt="cinfo"
                />
                <Text
                  className="mt-0.5 text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  A Propos de nous
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_camera3.svg"
                  alt="cameraThree"
                />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Media
                </Text>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start pt-1 w-[15%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_geometry.svg"
                alt="geometry"
              />
              <Text
                className="text-[10px] text-white-A700"
                size="txtManropeBold10"
              >
                Activités
              </Text>
              <Line className="bg-white-A700 h-0.5 mt-0.5 w-full" />
            </div>
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-end sm:ml-[0] p-[3px] w-full">
                <Img className="h-6 w-6" src="images/img_grid.svg" alt="grid" />
                <Text
                  className="mt-0.5 text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Bibliotheque
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_newsletter.svg"
                  alt="newsletter"
                />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Contact
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Adheration
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
