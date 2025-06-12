import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate को यहां से इम्पोर्ट करें
import './TitleCards.css';

const API_KEY = '40292551'; // आपका OMDb API Key

const categories = [
  { title: 'Avengers', query: 'Avengers' },
  { title: 'Comedy', query: 'comedy' },
  { title: 'Netflix Picks', query: 'netflix' },
];

const TitleCards = () => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate हुक को इनिशियलाइज़ करें

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const allDisplayedMovieIds = new Set();
      const newMovieData = {};

      for (const cat of categories) {
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(cat.query)}&type=movie`
          );
          const data = await res.json();

          if (data?.Search) {
            const uniqueMoviesForCategory = data.Search.filter(movie => {
              if (!allDisplayedMovieIds.has(movie.imdbID)) {
                allDisplayedMovieIds.add(movie.imdbID);
                return true;
              }
              return false;
            });
            newMovieData[cat.title] = uniqueMoviesForCategory;
          } else {
            newMovieData[cat.title] = [];
          }
        } catch (error) {
          console.error(`Error fetching ${cat.title}:`, error);
          newMovieData[cat.title] = [];
        }
      }
      setMovieData(newMovieData);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="loading">Loading movies...</div>;
  }

  return (
    <div>
      {categories.map(cat => (
        <div className="title-cards" key={cat.title}>
          <h2>{cat.title}</h2>
          <div className="card-list">
            {movieData[cat.title]?.length > 0 ? (
              movieData[cat.title].map(movie => (
                <div
                  className="card"
                  key={movie.imdbID}
                  // यहीं से क्लिक होने पर Player सेक्शन में नेविगेट होगा
                  onClick={() => navigate(`/player/${movie.imdbID}`)}
                >
                  <img
                    src={
                      movie.Poster !== 'N/A'
                        ? movie.Poster
                        : 'https://via.placeholder.com/240x360?text=No+Image'
                    }
                    alt={movie.Title}
                  />
                  <p>{movie.Title}</p>
                </div>
              ))
            ) : (
              <p>No unique movies found for this category.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitleCards;
