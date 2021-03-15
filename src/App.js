import * as React from "react";
// import PropTypes from "prop-types";
import {
  Layout,
  Banner,
  Growth,
  Here,
  About,
  Promo,
  Cards,
  Navigation,
  Footer,
} from "./components";

function App({ location }) {
  return (
    <Layout location={location}>
      <Navigation />
      <Banner />
      <section>
        <Cards />
        <About />
        <Here />
        <Growth />
        <Promo />
        <Footer />
      </section>
    </Layout>
  );
}
// App.propTypes = {
//   location: PropTypes.object.isRequired,
// };
export default App;
