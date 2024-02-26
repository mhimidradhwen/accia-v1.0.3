import React from "react";

import { Img, Text } from "components";

const InputField = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-0.5 w-[23%] md:w-full">
          <Text className="text-blue_gray-800 text-lg" size="txtManropeBold18">
            {props?.label}
          </Text>
          <div className="flex flex-row gap-2 items-start justify-start mt-[3px] w-full">
            <Img className="h-6 w-6" alt="profile" src={props?.icon} />
            <Text className="text-gray-400 text-lg" size="txtManropeRegular18">
              {props?.placeholder}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

InputField.defaultProps = {
  label: "Nom",
  icon: "images/img_profile_gray_900.svg",
  placeholder: "Votre Nom",
};

export default InputField;
