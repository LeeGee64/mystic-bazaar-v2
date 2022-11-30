import '../styles/globals.css';
import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { React, useState, useEffect } from "react";
// import Loading from "../components/loading";

function MyApp({ Component, pageProps }) {
  
// const router = useRouter();
// const [loading, setLoading] = useState(false);


// useEffect(() => {
//     const handleStart = (url) => {
//       url !== router.pathname ? setLoading(true) : setLoading(false);
//     };
//     const handleComplete = (url) => setLoading(false);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);
//   }, [router]);
  
  return (
  <>
    <Head>
    <link rel="shortcut icon" href="/Favicon.ico" />
    </Head>
    {/* {loading ? 
    <Loading loading={loading}/> :
    <Component {...pageProps} />} */}
    <Component {...pageProps} />
  </>)
}

export default MyApp
