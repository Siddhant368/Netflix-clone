import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer YOUR_TMDB_BEARER_TOKEN",
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${
            category || "now_playing"
          }?language=en-US&page=1`,
          options
        );

        const data = await response.json();

        if (data?.results) {
          setApiData(data.results);
        }
      } catch (error) {
        console.error("TMDB Fetch Error:", error);
      }
    };

    fetchMovies();
  }, [category]);

  useEffect(() => {
    const container = cardsRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => (
          <Link
            to={`/player/${card.id}`}
            className="card"
            key={card.id}
          >
            <img
              src={
                card.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                  : "https://via.placeholder.com/500x281?text=No+Image"
              }
              alt={card.original_title || card.title}
              loading="lazy"
            />

            <p>{card.original_title || card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;