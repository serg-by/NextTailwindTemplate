// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { ThemeProvider } from 'next-themes';
import Layout from "../components/base/Layout";

function MyApp({ Component, pageProps }) {
  return (
   <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />;
      </Layout>
   </ThemeProvider>
  );
}

export default MyApp;
