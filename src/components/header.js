import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import DrawerIcon from "../images/drawerIcon.svg"
import BellIcon from "../images/bellIcon.svg"
import SearchIcon from "../images/searchIcon.svg"

const Header = ({ siteTitle }) => {
  // 1 activites, 0 Discover
  const [selectedTab, setSelectedTab] = useState(0)
  const [searchActive, setSearchActive] = useState(false)

  const selected = selectedTab < 1 ? { left: 0 } : { right: 0 }

  const SearchBar = () => {
    if (searchActive) {
      return (
        <div className="rounded-full w-full mt-6 h-12 bg-gray-200">
          <input
            className="pl-4 pr-4 text-black rounded-full w-full h-full"
            type="text"
          />
        </div>
      )
    }
    return null
  }

  return (
    <header
      className={`flex absolute w-screen text-white h-${
        searchActive ? "48" : "40"
      } bg-black`}
    >
      <div className=" flex flex-col justify-end w-full px-4 ">
        <div className="flex">
          <div className="flex-1">
            <button className="h-6">
              <img className="h-full" src={DrawerIcon} alt="" />
            </button>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <h2 className="tracking-wider">Explore</h2>
          </div>
          <div className="flex justify-end flex-1">
            <div className="relative">
              <button className="h-6">
                <img className="h-full" src={BellIcon} alt="" />
              </button>
              <div
                style={{
                  left: "50%",
                  transform: "translate(-50%)",
                  background: "#F4327F",
                }}
                className="absolute rounded w-2 h-2"
              />
            </div>
            <button
              onClick={() => setSearchActive(!searchActive)}
              className="h-6 ml-6 "
            >
              <img className="h-full" src={SearchIcon} alt="" />
            </button>
          </div>
        </div>
        <SearchBar />
        <div
          style={{ color: "#AAAAAA" }}
          className={`relative flex justify-around  w-full ${
            searchActive ? "" : "mt-3"
          } h-12`}
        >
          <button
            onClick={() => setSelectedTab(0)}
            style={selectedTab ? {} : { color: "#eee" }}
            className="font-semibold uppercase tracking-widest"
          >
            Discover
          </button>
          <button
            style={selectedTab ? { color: "#eee" } : {}}
            onClick={() => setSelectedTab(1)}
            className="font-semibold uppercase tracking-widest"
          >
            Activities
          </button>
          <div
            style={{ ...selected, background: "#F4327F" }}
            className="absolute rounded bottom-0   h-1 w-3/6 bg-gray-600"
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
