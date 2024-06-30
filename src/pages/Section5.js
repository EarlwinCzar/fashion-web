import React, { useState } from "react";
import "../styles/pagesstyles/section5.css";

function Section5() {
  const [comments] = useState([
    {
      name: "Emy Patel",
      comment:
        "The quality of the clothes is amazing, and the customer service was top-notch. I'll definitely be back for more!",
    },
    {
      name: "Mikolan Josi",
      comment:
        "Had a great shopping experience. The store layout is beautiful and the staff are very helpful.",
    },
    {
      name: "Max Bhai",
      comment:
        "Excellent prices for such high-quality items. The variety of styles is fantastic.",
    },
    {
      name: "Joseph Grose",
      comment:
        "Not entirely satisfied with my purchase. The sizes ran a bit small for me.",
    },
    {
      name: "Alex Redmond",
      comment:
        "Fantastic collection and great customer service. Highly recommended for anyone looking to update their wardrobe!",
    },
    {
      name: "Ryan Datsko",
      comment:
        "Overall a good experience, but I wish there were more options for men's clothing.",
    },
  ]);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const showComments = comments.slice(startIndex, endIndex);

  const prevHandle = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandle = () => {
    if (endIndex < comments.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="section5 container section">
      <article className="section5-container">
        <div className="section5-header">
          <p className="section5-header-text">Feedback Corner</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="section5-cards">
          {showComments.map((comment, index) => (
            <div className="section5-card" key={index}>
              <i className="fa-solid fa-quote-left"></i>
              <p className="section5-card-name">{comment.name}</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
        <div className="section5-buttons">
          <button onClick={prevHandle} disabled={currentPage === 0}>
            Prev
          </button>
          <button onClick={nextHandle} disabled={endIndex >= comments.length}>
            Next
          </button>
        </div>
      </article>
    </section>
  );
}

export default Section5;
