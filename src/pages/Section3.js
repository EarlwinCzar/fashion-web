import React, { useEffect, useState } from "react";
import "../styles/pagesstyles/section3.css";

function Section3() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/db/db.json") // Adjust the URL as per your server setup
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        if (Array.isArray(data.prods)) {
          setProds(data.prods); // Update state with fetched array directly
        } else {
          throw new Error("Invalid data structure in response");
        }
      })
      .catch((error) => {
        console.error("Error fetching or parsing data:", error);
        // Optionally handle the error state or display an error message
      });
  }, []);

  useEffect(() => {
    console.log("Prods state:", prods); // Log the state whenever it changes
  }, [prods]);

  return (
    <section className="section3">
      <article className="section3-container">
        {prods && prods.length > 0 ? (
          prods.map((prod) => (
            <div key={prod.id}>
              <img
                src={process.env.PUBLIC_URL + prod.img}
                alt={prod.product_name}
              />
              <h2>{prod.product_name}</h2>
              <p>Price: ${prod.price}</p>
              <p>Stock: {prod.stock}</p>
              <p>Rating: {prod.rating}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </section>
  );
}

export default Section3;
