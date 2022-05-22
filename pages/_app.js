import Layout from "../Layout/Layout";
import "../styles/components/navbar.scss";
import "../styles/components/projectCard.scss";
import "../styles/globals.css";
import "../styles/pages/about.scss";
import "../styles/pages/blogs/blog.scss";
import "../styles/pages/blogs/blogs.scss";
import "../styles/pages/contact.scss";
import "../styles/pages/home.scss";
import "../styles/pages/projects/project.scss";
import "../styles/pages/projects/projects.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
