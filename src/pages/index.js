import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import splashImg from "../images/splashbg.svg"
import googleIcon from "../images/googleIcon.png"

// fix some issues with gatsby and tailwind not working with theming.
// remove inline styles

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="flex h-screen justify-center w-screen ">
        <div className=" absolute flex z-0 bg-gradient-splash">
          <img
            style={{ objectFit: "cover" }}
            className="w-screen h-screen"
            src={splashImg}
            alt="house on lake"
          />
        </div>
        <div className="flex relative flex-col justify-center uppercase text-center  font-semibold items-around  z-10">
          <div className="relative flex flex-col justify-end flex-1  text-white">
            <h2 className="text-4xl tracking-widest leading-relaxed">Hello!</h2>
            <h2
              style={{ marginBottom: 13 }}
              className="text-4xl tracking-widest leading-relaxed"
            >
              Guide
            </h2>
            <div className="flex justify-center">
              <div className="absolute w-12 h-2 bg-white bottom-0" />
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 w-screen">
            <button
              style={{ backgroundColor: "#EEEEEE" }}
              className="relative shadow bg-white rounded-full py-3 w-screen mr-8 ml-8"
            >
              Login with google
              <img
                style={{
                  top: "50%",
                  left: 50,
                  transform: "translate(-30px, -50%)",
                }}
                className="absolute h-6"
                src={googleIcon}
                alt="google icon"
              />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

{
  /* <h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>
<Link to="/page-2/">Go to page 2</Link> */
}

export default IndexPage
