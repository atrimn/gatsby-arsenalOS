import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/cards"
import Slider from "../images/slider.svg"
import Arrow from "../images/arrow.svg"
import RedBalletImg from "../images/redBallet.svg"
import MexicoCity from "../images/mexicoCity.svg"
import Greenland from "../images/greenlandspa.svg"
import SkyScrappers from "../images/skyscrappers.svg"
import Elya from "../images/elya.svg"
import MoreIcon from "../images/moreIcon.svg"
import HeartIcon from "../images/love.svg"
import LocationIcon from "../images/location.svg"
import CommentIcon from "../images/comment.svg"
// dummy data
const dummyData = {
  featured: [
    {
      title: "Red Ballet",
      img: RedBalletImg,
      location: "New York",
      price: "$500",
    },
    {
      title: "Mexico City Festival",
      img: MexicoCity,
      location: "Philly",
      price: "$967",
    },
    {
      title: "Green Lands Hotel & Spa",
      img: Greenland,
      location: "Philly",
      price: "$967",
    },
    {
      title: "Elya's Live",
      img: Elya,
      location: "Oakland City",
      price: "$127",
    },
  ],
  hotels: [
    {
      title: "Hotel Blue Lagoon",
      price: "$1285",
      img: MexicoCity,
      discounted: "$234",
      location: "chicago",
    },
    {
      title: "Hotel Blue Lagoon",
      price: "$1285",
      img: Greenland,
      discounted: "$234",
      location: "chicago",
    },
    {
      title: "Hotel Blue Lagoon",
      price: "$1285",
      img: MexicoCity,
      discounted: "$234",
      location: "chicago",
    },
    {
      title: "Hotel Blue Lagoon",
      price: "$1285",
      img: Greenland,
      discounted: "$234",
      location: "chicago",
    },
    {
      title: "Hotel Blue Lagoon",
      price: "$1285",
      img: MexicoCity,
      discounted: "$234",
      location: "chicago",
    },
  ],
}

// break the section downs into components

const ExplorePage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="flex flex-col h-auto py-8 w-screen bg-black pt-40 ">
        <img
          style={{ height: 300 }}
          className="object-contain w-full pt-2 mb-8"
          src={Slider}
          alt="slider"
        />
        <div className="mx-auto h-auto w-screen px-1 ">
          <div className="flex justify-between items-center mb-8 mx-2">
            <h2 className="text-3xl text-white">Featured</h2>
            <button className="flex px-4 justify-around items-center explore-btn-gradient rounded-full w-auto py-1 text-white">
              see all
              <img className="h-4 pl-3" src={Arrow} alt="" />
            </button>
          </div>
          <div
            style={{ scrollSnapType: "x mandatory" }}
            className="flex items-start  overflow-scroll"
          >
            {dummyData.featured.map(item => (
              <div
                style={{ minWidth: 300, scrollSnapAlign: "start" }}
                className=" mx-2 card-background-gradient my-2  h-auto rounded-lg bg-gray-400 p-1 h-12"
              >
                <img
                  className="rounded-lg h-20 w-full object-cover"
                  src={item.img}
                  alt=""
                />
                <div className=" relative h-auto px-2 py-4">
                  <h2 className="font-semibold text-white text-sm tracking-wide">
                    {item.title}
                  </h2>
                  <button className="absolute flex justify-end top-0 right-0 my-5 h-4 w-4">
                    <img className="h-full" src={MoreIcon} alt="more" />
                  </button>
                  <div>
                    <p className="text-white text-xs opacity-50 inline mr-2">
                      {item.price}
                    </p>
                    <span
                      style={{ background: "#AAA" }}
                      className="rounded h-2 w-2 bg-gray-200 inline-block"
                    />
                    <p className="text-white text-xs opacity-50 inline ml-2">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col h-auto items-center relative">
                  <span
                    style={{ background: "#444444" }}
                    className="w-20 h-1 mb-2  "
                  ></span>
                  <div className="flex items-center">
                    <button className="h-4 w-4">
                      <img
                        className="h-full"
                        src={HeartIcon}
                        alt="love button"
                      />
                    </button>
                    <p className="text-white text-base pl-2">4k</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Places to visit */}
          <div className="flex flex-col h-auto mt-8 mx-1">
            <span
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="inline-block bg-white rounded h-1 w-full"
            ></span>
            <h2 className="mx-2 my-4 text-3xl text-white">Places to Visit</h2>
            <div className="relative overflow-hidden flex rounded-lg mx-1 bg-gray-200 h-64">
              <img
                className="z-0 absolute places-background-gradient"
                src={SkyScrappers}
                alt=""
              />
              <div className="z-10 flex flex-col justify-center mx-4 w-full">
                <h2 className="text-3xl text-white">Charco Azul</h2>
                <p className="text-white">
                  Morbi urna elit, porta vitae convallis non, bibendum nec diam.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-8 mx-1 pb-32 h-auto ">
              {dummyData.hotels.map(item => (
                <div
                  style={{ backgroundColor: "#333333" }}
                  className="flex items-center py-4 px-2 rounded-lg my-2 h-auto"
                >
                  <div className="rounded-lg overflow-hidden h-20 w-24 mr-4 bg-gray-200">
                    <img
                      className="h-full w-full  object-cover"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="flex  flex-col">
                    <h2 className="text-white font-semibold">{item.title}</h2>
                    <div className="flex mb-2">
                      <p className="pr-3 text-white opacity-50">
                        {item.discounted}
                      </p>
                      <p className="line-through text-white opacity-25">
                        {item.price}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center  justify-between">
                        <img className="h-4 mr-2" src={LocationIcon} alt="" />
                        <p className="text-white text-xs mr-4">
                          {item.location}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <img className="h-4 mr-2" src={HeartIcon} alt="" />
                        <p className="text-white text-xs mr-2">4k</p>
                        <img className="h-4 mr-2" src={CommentIcon} alt="" />
                        <p className="text-white text-xs">766</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default ExplorePage
