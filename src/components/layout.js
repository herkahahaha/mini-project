import * as React from "react";
// import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
export default Layout;
