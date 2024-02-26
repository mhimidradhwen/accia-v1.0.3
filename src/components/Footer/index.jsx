import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[17px] ml-[132px] mr-[129px] mt-[87px] w-[83%]">
          <ul className="flex flex-col items-center justify-center w-full common-column-list">
            <li>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between">
                <Img
                  className="h-[123px] md:h-auto object-cover"
                  src="images/img_image201.png"
                  alt="image201"
                />
                <div className="flex flex-col items-start justify-start">
                  <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[85%] md:w-full common-column-list">
                    <li>
                      <Text
                        className="mb-0.5 text-gray-900 text-xl"
                        size="txtLexendBold20Gray900"
                      >
                        Product
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[79px] text-gray-900 text-xl"
                        size="txtLexendBold20Gray900"
                      >
                        Resources
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="md:ml-[0] ml-[57px] md:mt-0 mt-0.5 text-gray-900 text-xl"
                        size="txtLexendBold20Gray900"
                      >
                        Company
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[61px] text-cyan-900 text-xl w-[200px]"
                        size="txtLexendRegular20Cyan900"
                      >
                        Subscribe to our newsletter
                      </Text>
                    </li>
                  </ul>
                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-0.5 w-full">
                    <div className="flex md:flex-1 flex-col gap-3 items-center justify-start md:mt-0 mt-[13px] w-[42%] md:w-full">
                      <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtManropeRegular14"
                        >
                          Features
                        </Text>
                        <Text
                          className="ml-[102px] text-gray-900 text-sm"
                          size="txtManropeRegular14"
                        >
                          Blog
                        </Text>
                        <Text
                          className="ml-[131px] text-gray-900 text-sm"
                          size="txtManropeRegular14"
                        >
                          About
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtManropeRegular14"
                        >
                          Pricing
                        </Text>
                        <Text
                          className="ml-[115px] text-gray-900 text-sm"
                          size="txtManropeRegular14"
                        >
                          User guides
                        </Text>
                        <Text
                          className="ml-[82px] text-gray-900 text-sm"
                          size="txtManropeRegular14"
                        >
                          Join us
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[46%] md:w-full">
                      <Text
                        className="text-blue_gray-800 text-xs"
                        size="txtManropeRegular12Bluegray800"
                      >
                        For product announcements and exclusive insights
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <Input
                          name="textboxNine"
                          placeholder="Input your email"
                          className="!placeholder:text-gray-400 !text-gray-400 font-manrope p-0 text-left text-sm w-full"
                          wrapClassName="flex sm:flex-1 w-[72%] sm:w-full"
                          prefix={
                            <Img
                              className="mt-px mb-[3px] h-4 mr-1.5"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                          shape="round"
                          color="blue_gray_50"
                          size="md"
                          variant="fill"
                        ></Input>
                        <Button
                          className="cursor-pointer font-manrope min-w-[114px] rounded-br rounded-tr text-center text-sm"
                          color="light_blue_900"
                          size="sm"
                          variant="fill"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Text
                className="md:ml-[0] ml-[472px] text-gray-900 text-sm"
                size="txtManropeRegular14"
              >
                Webinars
              </Text>
            </li>
            <li>
              <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[72px] md:w-full common-column-list">
                <li>
                  <SelectBox
                    className="!text-gray-900 font-manrope text-left text-sm w-[100px] md:w-full"
                    placeholderClassName="!text-gray-900"
                    indicator={
                      <Img
                        className="h-4 mr-[0] w-4"
                        src="images/img_arrowdown_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="textboxEight"
                    options={textboxEightOptionsList}
                    isSearchable={false}
                    placeholder="Francais"
                    shape="round"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  />
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[310px] text-blue_gray-800 text-sm"
                    size="txtManropeRegular14Bluegray800"
                  >
                    © 2022 Brand, Inc.
                  </Text>
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[15px] text-[11px] text-blue_gray-800"
                    size="txtManropeRegular11"
                  >
                    •
                  </Text>
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[5px] text-blue_gray-800 text-sm"
                    size="txtManropeRegular14Bluegray800"
                  >
                    Privacy
                  </Text>
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[7px] text-[11px] text-blue_gray-800"
                    size="txtManropeRegular11"
                  >
                    •
                  </Text>
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[5px] text-blue_gray-800 text-sm"
                    size="txtManropeRegular14Bluegray800"
                  >
                    Terms
                  </Text>
                </li>
                <li>
                  <Text
                    className="ml-1.5 md:ml-[0] text-[11px] text-blue_gray-800"
                    size="txtManropeRegular11"
                  >
                    •
                  </Text>
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[5px] text-blue_gray-800 text-sm"
                    size="txtManropeRegular14Bluegray800"
                  >
                    Sitemap
                  </Text>
                </li>
                <li>
                  <Img
                    className="h-6 md:ml-[0] ml-[294px]"
                    src="images/img_logotwitter1.svg"
                    alt="logotwitterOne"
                  />
                </li>
                <li>
                  <Img
                    className="h-6 ml-4 md:ml-[0]"
                    src="images/img_logofacebook1.svg"
                    alt="logofacebookOne"
                  />
                </li>
                <li>
                  <Img
                    className="h-6 ml-4 md:ml-[0]"
                    src="images/img_logolinkedin1.svg"
                    alt="logolinkedinOne"
                  />
                </li>
                <li>
                  <Img
                    className="h-6 ml-4 md:ml-[0]"
                    src="images/img_logoyoutube3.svg"
                    alt="logoyoutubeThree"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
