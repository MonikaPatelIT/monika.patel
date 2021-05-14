import Navbar from "../common/Navbar";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div className="main-container container">{children}</div>
  </div>
);

export default Layout;
