import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Player.css'
import { FaArrowLeft, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Player = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [trailerKey, setTrailerKey] = useState("")
  const [mute, setMute] = useState(true)
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjY3YzdhNDYyMTBkNzVlNjUxMjE1MmUxNmQzMGI5ZSIsIm5iZiI6MTc2NjMyOTc4MS4xMjksInN1YiI6IjY5NDgwZGI1YTU3MDVjNzBhNDhjZTJjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0DRSd7Hm15SPkTWmFeKyN59bqXSzV4kEozxHLogKkjA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          video =>
            video.site === "YouTube" &&
            (video.type === "Trailer" || video.type === "Teaser")
        )

        if (trailer) {
          setTrailerKey(trailer.key)
        }

        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  return (
    <div className="player">

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      {/* LOADER */}
      {loading && <h2 className="loading">Loading trailer...</h2>}

      {/* TRAILER */}
      {!loading && trailerKey && (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${mute ? 1 : 0}`}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {/* FALLBACK */}
      {!loading && !trailerKey && (
        <h2 className="no-trailer">Trailer not available 😢</h2>
      )}

      {/* VOLUME CONTROL */}
      {trailerKey && (
        <button className="volume-btn" onClick={() => setMute(!mute)}>
          {mute ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      )}
    </div>
  )
}

export default Player
