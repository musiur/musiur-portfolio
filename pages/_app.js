import Layout from "../Layout/Layout";
import "../styles/components/navbar.scss";
import "../styles/components/projectCard.scss";
import "../styles/globals.css";
import "../styles/pages/about.scss";
import "../styles/pages/contact.scss";
import "../styles/pages/home.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
