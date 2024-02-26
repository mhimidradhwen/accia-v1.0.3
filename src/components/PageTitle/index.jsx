import React from "react";

import { Line, Text } from "components";

const PageTitle = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="absolute h-max inset-[0] justify-center sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 w-max"
          size="txtLexendBold52"
        >
          {props?.title}{" "}
        </Text>
        <Line className="absolute bg-light_blue-900 bottom-[0] h-[3px] left-[1%] mb-[px] w-[23%]" />
      </div>
    </>
  );
};

PageTitle.defaultProps = {title:"Titre de Page"};

export default PageTitle;
