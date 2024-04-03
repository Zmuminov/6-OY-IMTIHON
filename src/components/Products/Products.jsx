import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
function Products() {
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
    <div className="container">
      {/* FILTER WRAPPER START */}
      <div className="filterWrapper">
        {/* ROW ONE START */}
        <div className="FilterItemRowOne">
          {/* FILTER ONE START */}
          <div className="filterOne">
            <div className="filterItemRowOne">
              <p className="textStyleForFilter">Write Category</p>
              <input className="inputFilter" type="text" name="" id="" />
            </div>
            <div className="filterItemRowOne">
              <p className="textStyleForFilter">Search Product</p>
              <input className="inputFilter" type="text" name="" id="" />
            </div>
          </div>
          {/* FILTER ONE END */}
          {/* FILTER TWO START */}
          <div className="filterTwo">
            <div className="filterItemRowOne">
              <p className="textStyleForFilter">Write Company</p>
              <input className="inputFilter" type="text" name="" id="" />
            </div>
            <div className="filterItemRowOne">
              <p className="textStyleForFilter">Sort By</p>
              <input className="inputFilter" type="text" name="" id="" />
            </div>
          </div>
          {/* FILTER TWO END */}
        </div>
        {/* ROW ONE END */}
        {/* ROW TWO START */}
        <div className="filterItemRowTwo">
          <div className="filterRowTwoOne">
            <div>
              <p className="textStyleForFilter">Select Price</p>
              <input type="number" />
            </div>
            <div>
              <p className="textStyles"> Free Shipping</p>
              <input className="chekbox" type="checkbox" />
            </div>
          </div>
          <div className="filterRowTwoTwo">
            <button className="srcbtn">SEARCH</button>
            <button className="rsbtn">RESET</button>
          </div>
        </div>
        {/* ROW TWO END */}
      </div>
      {/* FILTER WRAPPER END */}
      <div className="newCardWrapper">
        {data.slice(0, 10).map((res, i) => {
          return (
            <div className="new-card-wrapper" key={i}>
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
  );
}

export default Products;
