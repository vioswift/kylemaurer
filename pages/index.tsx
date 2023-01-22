import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SiteMetadata from "../components/MetaData";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{SiteMetadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content={SiteMetadata.name} />
        <meta name="keywords" content={SiteMetadata.keywords} />
        <meta name="description" content={SiteMetadata.description} />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content={SiteMetadata.title} />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">{SiteMetadata.title}</title>
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:title" content={SiteMetadata.title} />
        <meta data-rh="true" property="og:image" content="/images/banner.png" />
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css" />
        <script src="https://kit.fontawesome.com/e4446002ed.js" crossOrigin="anonymous"></script>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;