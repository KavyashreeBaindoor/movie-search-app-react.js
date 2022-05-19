import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import icon from "./search.svg";
import MovieCard from "./MovieCard";

//914ff9b3

const API_URL = "http://www.omdbapi.com?apikey=914ff9b3";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const search1 = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    search1("kabhi");
  }, []);
  return (
    <>
      <div className="app">
        <h1>Movie Search</h1>
        <div className="search">
          <input
            type="text"
            placeholder="search movies"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <img
            type="text"
            src={icon}
            alt="search"
            onClick={() => {
              search1(search);
            }}
          />
        </div>
        {movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>Not found</h2>
          </div>
        )}
      </div>
    </>
  );
};
