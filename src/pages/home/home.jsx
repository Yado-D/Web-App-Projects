import React from "react";
import { HEADER } from "../../components/header/header";
import { FOOTER } from "../../components/footer/footer";
import { BANNER } from "../../components/banner/banner";
import { RowList } from "../../components/rows/rowList/rowList";



const HOME = () => {
  return (
    <>
      <HEADER />
      <BANNER/>
      <RowList/>
      <FOOTER />
    </>
  );
};
export default HOME;
