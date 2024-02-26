import React from "react";

import { Img, Text } from "components";

const InputMessageFiels = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[15px] mr-[924px] mt-[15px] w-[18%] md:w-full">
          <Text className="text-blue_gray-800 text-lg" size="txtManropeBold18">
            {props?.label}
          </Text>
          <div className="flex flex-row gap-2 items-start justify-start w-full">
            <Img
              className="h-[18px] w-[18px]"
              alt="bookmark"
              src={props?.icon}
            />
            <Text className="text-gray-400 text-lg" size="txtManropeRegular18">
              {props?.placeholder}
            </Text>
          </div>
        </div>
        <Img
          className="h-3 md:ml-[0] ml-[1126px] w-3"
          src="images/img_resizinghandle.svg"
          alt="resizinghandle"
        />
      </div>
    </>
  );
};

InputMessageFiels.defaultProps = {
  label: "Message",
  icon: "images/img_bookmark.svg",
  placeholder: "Saisir votre message",
};

export default InputMessageFiels;
