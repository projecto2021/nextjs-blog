
import Head from "next/head";
import NavBar from "./NavBar";

const Layout = ({ children }) => {

  return (
    <div>
      <Head>
        <title>Next.js Project</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.0/cosmo/bootstrap.min.css"
        />
      </Head>
      <NavBar />
      <div className="container p-4">
        {children}
      
      </div>
    </div>
  );
};

export default Layout
