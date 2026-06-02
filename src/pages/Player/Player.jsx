import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Player.css";
import {
  FaArrowLeft,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trailerKey, setTrailerKey] = useState("");
  const [mute, setMute] = useState(true);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer YOUR_TMDB_BEARER_TOKEN",
    },
  };

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          options
        );

        const data = await response.json();

        const trailer = data?.results?.find(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" ||
              video.type === "Teaser")
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Trailer Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div className="player">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      {loading && (
        <div className="loading-container">
          <div className="loader"></div>
          <h2>Loading Trailer...</h2>
        </div>
      )}

      {!loading && trailerKey && (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
              mute ? 1 : 0
            }&rel=0`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <button
            className="volume-btn"
            onClick={() => setMute(!mute)}
          >
            {mute ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </>
      )}

      {!loading && !trailerKey && (
        <div className="no-trailer">
          <h2>Trailer Not Available</h2>
          <p>
            Sorry, this movie currently has no
            trailer available.
          </p>
        </div>
      )}
    </div>
  );
};

export default Player;