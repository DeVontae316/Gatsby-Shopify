import React from "react";

import { LayoutWrapper } from "./style";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
