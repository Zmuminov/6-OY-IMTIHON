import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import image1 from "../image/sliderOne.webp";
import image2 from "../image/sliderTwo.webp";
import image3 from "../image/sliderThree.webp";
import image4 from "../image/sliderFour.webp";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  return (
    <>
      <div className="real-wrapper">
        <div className="wrapper">
          <div className="container">
            <div className="mainWrapper">
              <div className="textWrapper">
                <h1 className="title">We are changing the way people shop</h1>
                <p className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore repellat explicabo enim soluta temporibus asperiores
                  aut obcaecati perferendis porro nobis.
                </p>
                <button className="ourBTn">OUR PRODUCTS</button>
              </div>
              <div className="slideShow">
                <div className="carouselItem">
                  <img className="imageWrapper" src={image1} alt="" />
                </div>
                <div className="carouselItem">
                  <img className="imageWrapper" src={image2} alt="" />
                </div>
                <div className="carouselItem">
                  <img className="imageWrapper" src={image3} alt="" />
                </div>
                <div className="carouselItem">
                  <img className="imageWrapper" src={image4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-2">
          <div className="container">
            <div className="miniText">
              <h2 className="heading2">Featured Products</h2>
              <hr className="hr" />
            </div>
            <div className="cardWrapper">
              {data.slice(0, 3).map((res, i) => {
                return (
                  <div className="card-wrapper" key={i}>
                    <img
                      style={{ borderRadius: "30px" }}
                      width={400}
                      height={250}
                      src={res.attributes.image}
                      alt=""
                    />
                    <h3 className="titleCard">{res.attributes.company}</h3>
                    <p className="paragraphCard">${res.attributes.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
