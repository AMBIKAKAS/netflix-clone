import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Player.css'; // This CSS file is linked for styling

const OMDB_API_KEY = '40292551'; // Your OMDb API key
// YouTube Data API Key is not needed for this version as it only provides a search link.

const Player = () => {
  const { imdbId } = useParams(); // Get the IMDb ID from URL parameters
  const navigate = useNavigate(); // Hook for navigating back
  const [movieDetails, setMovieDetails] = useState(null); // State to store movie details
  const [trailerUrl, setTrailerUrl] = useState(''); // State to store the YouTube search URL
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to store any error messages

  useEffect(() => {
    const fetchMovieDetailsAndTrailer = async () => {
      setLoading(true); // Set loading to true at the start of the fetch
      setError(null); // Clear any previous errors
      try {
        // 1. Fetch comprehensive movie details from OMDb API
        // This provides information like the movie title, which is needed for the YouTube search.
        const omdbRes = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbId}`
        );
        const omdbData = await omdbRes.json();

        if (omdbData.Response === 'True') {
          setMovieDetails(omdbData); // Update state with fetched movie details
          const movieTitle = omdbData.Title; // Extract the movie title

          // 2. Construct a YouTube search URL for the movie's official trailer
          // Since OMDb API doesn't provide direct trailer links, we'll create a link to search YouTube.
          const searchTitle = encodeURIComponent(`${movieTitle} official trailer`);
          const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${searchTitle}`;
          
          setTrailerUrl(youtubeSearchUrl); // Set the YouTube search URL

        } else {
          // If OMDb API did not return movie details
          setError(`Could not find movie details for IMDb ID: ${imdbId}.`);
        }
      } catch (err) {
        // Catch and log any errors during the API calls
        console.error('Error fetching movie details or trailer:', err);
        setError('Failed to load movie details or trailer. Please try again.');
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete (success or failure)
      }
    };

    fetchMovieDetailsAndTrailer();
  }, [imdbId]); // Dependency array: Effect runs when imdbId changes

  // Conditional rendering based on loading, error, and trailerUrl states
  if (loading) {
    return <div className="player-container">Loading trailer...</div>;
  }

  if (error) {
    return (
      <div className="player-container">
        <p className="error-message">{error}</p>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="player-container">
      <div className="player-header">
        <p className="player-title">
          {movieDetails ? movieDetails.Title : 'Movie Trailer'}
        </p>
        <img
          src="https://cdn-icons-png.freepik.com/512/3067/3067086.png" // Path to a back button icon
          alt="Back"
          className="back-icon"
          onClick={() => navigate(-1)} // Navigates back to the previous page
        />
      </div>

      <div className="player-content">
        {trailerUrl ? (
          <>
            <p className="trailer-info-text">
              Since the OMDb API doesn't directly provide trailer embed links,
              we'll open a YouTube search for you. Click the link below to find the official trailer:
            </p>
            <a href={trailerUrl} target="_blank" rel="noopener noreferrer" className="trailer-link">
              Search YouTube for "{movieDetails?.Title || 'Movie'}" Official Trailer
            </a>

            {/*
              If you were able to fetch a YouTube video ID, you could embed it like this:
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Movie Trailer"
              ></iframe>
            */}
          </>
        ) : (
          <p className="no-trailer-message">No trailer information available for this movie.</p>
        )}
      </div>
    </div>
  );
};

export default Player;
