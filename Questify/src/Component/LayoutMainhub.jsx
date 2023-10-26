import React from "react";
import HeaderLogin from "../Screens/Header/HeaderLogin";

function LayoutMainhub({ children }) {
  return (
    <>
      <HeaderLogin />
      {children}
    </>
  );
}

export default LayoutMainhub;
