const { default: Navbar } = require("../components/Navbar");
import Marquee from "react-fast-marquee";

const marqueeStyle = {
  // padding: "0.5rem 0",
  backgroundColor: "Red",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
};

const Layout = ({ children }) => {
  return (
    <>
      <header style={{ zIndex: "9999999", position: "relative" }}>
        <Navbar />
      </header>
      <main style={{ marginTop: "70px" }}>{children}</main>
      <footer className="bg-bg-dark text-white">
        <Marquee style={marqueeStyle} gradientColor={[0, 0, 0]} speed={100}>
          All rights reserved. This site is under construction
        </Marquee>
      </footer>
    </>
  );
};

export default Layout;
