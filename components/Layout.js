import Head from "next/head";
import Header from "../sections/Header";
import Footer from "./layouts/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lapaas Blog</title>
        <meta name="description" content="Lapaas Blog" />
      </Head>
      <div className="flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
