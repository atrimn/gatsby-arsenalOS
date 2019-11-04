/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import TravelIcon from "../images/travels.svg"
import ExploreIcon from "../images/explore.svg"
import SavedIcon from "../images/saved.svg"
import ChatIcon from "../images/chat.svg"
import ProfileIcon from "../images/profile.svg"
import SendIcon from "../images/send.svg"

import Header from "./header"
import "../styles/output.css"

const Layout = ({ children, location }) => {
  // const [pathname, setLocation] = React.useState(null)

  useEffect(() => {
    console.log(location.pathname)
  }, [location])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const header =
    location.pathname !== "/" ? (
      <Header siteTitle={data.site.siteMetadata.title} />
    ) : null
  const footer =
    location.pathname !== "/" ? (
      <footer
        style={{
          background: "#333333",
          border: "2px solid rgba(0, 0, 0, 0.25)",
          boxShadow: "0px -40px 100px rgba(0, 0, 0, 0.1)",
        }}
        className="fixed z-10 mx-auto px-4 bottom-0 flex items-center justify-between h-16 w-screen"
      >
        <button className="h-4">
          <img className="h-full " src={TravelIcon} alt="" />
        </button>
        <button className="h-4">
          <img className="h-full" src={ExploreIcon} alt="" />
        </button>
        <button className="h-4">
          <img className="h-full" src={SavedIcon} alt="" />
        </button>
        <button className="relative h-4">
          <img className="h-full" src={ChatIcon} alt="" />
          <span
            style={{ background: "#F4327F", bottom: "-15px" }}
            className="absolute inline-block bottom-0 rounded-full h-1 w-1"
          ></span>
        </button>
        <button className="h-4 ">
          <img className="h-full" src={ProfileIcon} alt="" />
        </button>
      </footer>
    ) : null

  const footerAuth =
    location.pathname !== "/" ? (
      <footer
        style={{}}
        className="fixed z-10 px-8 bottom-0 flex flex-col justify-center  h-64 w-screen  email-newsletter-gradient"
      >
        <h2 className="text-3xl text-white tracking-wide">Tour Alerts</h2>
        <p className=" text-sm text-white tracking-wide">
          sed semper at ante spendisse blandit laoreet elit et mattis. nulla
          facilisi
        </p>
        <div className="relative mt-8 ">
          <input
            style={{ background: "rgba(242, 242, 242, 0.25)" }}
            className=" placeholder-gray-200 text-xs rounded-full h-8 w-full px-8 relative"
            type="text"
            placeholder="Email Address"
          />
          <button
            style={{
              top: "50%",
              right: 0,
              transform: "translate(0px, -50%)",
            }}
            className="absolute flex right-0 rounded-full bg-white h-10 w-10 items-center justify-center"
          >
            <img className="h-4" src={SendIcon} alt="" />
          </button>
        </div>
      </footer>
    ) : null
  return (
    <>
      {header}
      <div className="w-screen">
        <main>{children}</main>
        {footer}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
