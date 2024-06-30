import React, { useEffect, useState } from "react";
import "../styles/pagesstyles/section3.css";
import axios from "axios";

function Section3() {
  const [prods, setProds] = useState([]);
  const [page, setPage] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("sale"); // Default category

  useEffect(() => {
    axios
      .get("http://localhost:3000/prods")
      .then((res) => {
        setProds(res.data);
        // Filter products based on the default category
        const defaultFilteredProds = res.data.filter(
          (prod) => prod.category === selectedCategory
        );
        setPage(defaultFilteredProds);
      })
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  const product_images_styles = {
    display: "block",
    maxWidth: "443px",
    maxHeight: "550px",
    userSelect: "none",
  };

  const handleChangePage = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    // Update selected category
    setSelectedCategory(value);
    const filteredProds = prods.filter((prod) => prod.category === value);
    setPage(filteredProds);
  };

  return (
    <section className="section3 container section">
      <article className="section3-container">
        <div className="section3-header">
          <p>Our Products</p>
        </div>
        <div className="section3-cat">
          <ul>
            <li>
              <a data-value="sale" onClick={handleChangePage}>
                Sale
              </a>
            </li>
            <li>
              <a data-value="hot" onClick={handleChangePage}>
                Hot
              </a>
            </li>
            <li>
              <a data-value="newArrivals" onClick={handleChangePage}>
                New Arrivals
              </a>
            </li>
            <li>
              <a data-value="accessories" onClick={handleChangePage}>
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="section3-prods-wrapper">
          {/* Render the filtered products */}
          {page.map((p, i) => (
            <div className="section3-prod" key={i}>
              <img
                style={product_images_styles}
                src={process.env.PUBLIC_URL + p.img}
                alt={p.product_name}
              />
              <div className="section3-prod-name">
                <p>{p.product_name}</p>
              </div>
              <div className="section3-prod-foot">
                <p>{p.price}</p>
                <p>
                  {p.rating}
                  <span className="section3-prod-foot-star">&#9733;</span>
                </p>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Section3;
