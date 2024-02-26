import React from "react";

import { Img, Input } from "components";

const SearchBar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          name="rechercherCounter"
          placeholder="Rechercher ..."
          className="font-manrope p-0 placeholder:text-gray-400 text-left text-sm w-full"
          wrapClassName="outline outline-[1px] outline-gray-500 w-[83%] md:w-full"
          shape="round"
          color="white_A700"
          size="md"
          variant="fill"
        ></Input>
        <div className="bg-light_blue-900 flex flex-col items-center justify-start p-2.5 rounded-br rounded-tr w-[17%] md:w-full">
          <Img className="h-4 w-4" src="images/img_search.svg" alt="search" />
        </div>
      </div>
    </>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
