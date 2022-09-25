import { ThemeProvider } from "next-themes";
import FixedFooter from "../components/Footer/FixedFooter";
import Layout from "../components/Layout";
import ProgressBar from "../components/layouts/ProgressBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <ProgressBar />
        <Component {...pageProps} />
      </Layout>
      <FixedFooter />
    </ThemeProvider>
  );
}

export default MyApp;
