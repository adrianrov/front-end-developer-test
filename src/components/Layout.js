import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
