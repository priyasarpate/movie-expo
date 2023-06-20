"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Popular from "./Popular";
import Fav from "./Fav";

function Dashboard() {
  const [latestMovies, setLatestMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const UPCOMING_MOVIES =
    "https://api.themoviedb.org/3/movie/popular?api_key=22cdba295b10a4f09efa42a3e8d46c62&language=en-US&page=1";
  const LATEST_MOVIES =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=22cdba295b10a4f09efa42a3e8d46c62&language=en-US&page=1";

  const fetchData = async () => {
    const upcomingMovies = await axios.get(UPCOMING_MOVIES);
    const latestMovies = await axios.get(LATEST_MOVIES);
    setLatestMovies(latestMovies.data.results);
    setUpcomingMovies(upcomingMovies.data.results);
  };

  return (
    <div className="bg-black">
      <div className="group border-white text-center py-8 px-8">
        <Popular movies={upcomingMovies} />
        <Fav movies={latestMovies} />
      </div>
    </div>
  );
}

export default Dashboard;
