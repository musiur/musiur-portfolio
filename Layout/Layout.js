const { default: Navbar } = require("../components/Navbar");

const Layout = ({ children }) => {
  return (
    <>
      <header style={{ zIndex: "9999999", position: "relative" }}>
        <Navbar />
      </header>
      <main style={{ marginTop: "60px" }}>{children}</main>
      <footer
        className="bg-bg-dark text-white"
        style={{ textAlign: "center", padding: "1rem" }}
      >
        All rights reserved
      </footer>
    </>
  );
};

export default Layout;
