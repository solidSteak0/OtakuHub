import AnimeApp from "./AnimeApp"
import Footer from "./footer"
import Navbar from "./Navbar"
import React, { useState, useEffect } from "react";
import axios from "axios";
// Import your components...

function App() {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  const fetchRandomAnime = async () => {
    console.log("FETCH TRIGGERED!");
    setLoading(true);
    try {
      const apiPromise = axios.get("https://api.jikan.moe/v4/random/anime");
      const timerPromise = new Promise((resolve) => setTimeout(resolve, 3000));

      const [response] = await Promise.all([apiPromise, timerPromise]);
      const newAnime = response.data.data;

      setAnime(newAnime);
      // FIX: Store the FULL object instead of just the title
      setHistory((prev) => {
        // Check to avoid duplicates in history
        if (prev.find(a => a.mal_id === newAnime.mal_id)) return prev;
        return [newAnime, ...prev].slice(0, 5);
      });
    } catch (err) { /* ... */ 
    }finally {
      setLoading(false);
    }
  };

  // NEW FUNCTION: Restore an anime from history
  const handleRestore = (restoredAnime) => {
    setAnime(restoredAnime);
    // Optional: Scroll the user back to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



useEffect(() => {
  fetchRandomAnime();
}, []);

// 1. THE "LOADING" RETURN
// If loading is true, we ONLY return the loader. 
// The Navbar and Footer are never even reached.
if (loading) {
  return (
    <main className="loading-content">
      <h1 className="loading-header">Loading your new obsession...</h1>
      <div className="loader"></div>
    </main>
  );
}

// 2. THE "SUCCESS" RETURN
// This code only runs when loading is false.
return (
  <div className="app-container">
    <Navbar />
    {/* Pass the data and the function as props to your AnimeApp */}
    <AnimeApp
      anime={anime}
      history={history}
      onGenerate={fetchRandomAnime}
      loading={loading}
      onRestore={handleRestore}
    />
    <Footer />
  </div>
);
}

export default App;
