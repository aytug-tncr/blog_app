import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header/Header";
// import Post from "../components/Post"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aytug Tncr | Blog</title>
        <meta name="description" content="This ultimate guide cover all the important aspects of blogging. Find out how to set up a succesful blog or to make yours even better!"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Header />
    </>
  );
};

export default Home;
