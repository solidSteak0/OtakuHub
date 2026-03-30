const AnimeApp = ({anime, history, onGenerate, loading, onRestore }) => {



  return (
    <main className="main-content">
      <div className="content-container">
        <h1 className="main-title">
          <i className="fas fa-star"></i> Get Your New Favourite Show My Fellow Otaku
        </h1>

        <div className="anime-card">
          {/* POSTER SECTION */}
          <div className="anime-poster">
            <div className="poster-placeholder">
              {anime?.images?.jpg?.large_image_url ? (
                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              ) : (
                <i className="fas fa-play-circle"></i>
              )}
            </div>
            
            <div className="anime-tags">
              {anime?.genres?.map((genre, i) => (
                <span key={genre.mal_id} className={`tag genre${i}`}>
                  {genre.name}
                </span>
              ))}
              <span className="tag rating">
                {anime?.score ? `⭐ ${anime.score}/10` : "No ratings yet"}
              </span>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="anime-info">
            <h2 className="anime-title">{anime?.title}</h2>
            <div className="anime-meta">
              <span><i className="fas fa-calendar"></i> {anime?.year || "N/A"}</span>
              <span><i className="fas fa-tv"></i> {anime?.episodes || "N/A"} Eps</span>
              <span><i className="fas fa-clock"></i> {anime?.duration}</span>
            </div>
            <p className="anime-description">
              {anime?.synopsis || "No synopsis available."}
            </p>
            
            <div className="anime-stats">
              <div className="stat">
                <div className="stat-value">#{anime?.popularity}</div>
                <div className="stat-label">Popularity</div>
              </div>
              <div className="stat">
                <div className="stat-value">#{anime?.rank || "N/A"}</div>
                <div className="stat-label">Rank</div>
              </div>
            </div>
          </div>
        </div>

        {/* REPLACES THE FORM POST */}
        <div className="button-container">
          <button onClick={onGenerate} className="generate-btn" disabled={loading}>
       <i className="fas fa-bolt"></i> {loading ? "Searching..." : "Generate Anime"}
    </button>
        </div>

        {/* DYNAMIC HISTORY */}
        <div className="history-section">
        <h3><i className="fas fa-history"></i> Recently Generated</h3>
        <div className="history-list">
            {history.map((item, index) => (
              <button 
                key={item.mal_id || index} 
                className="history-item clickable"
                onClick={() => onRestore(item)}
                style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer' }}
              >
                {item.title} 
                <i className="fas fa-redo-alt" style={{ marginLeft: '10px', fontSize: '0.8rem', opacity: 0.6 }}></i>
              </button>
            ))}
          </div>
      </div>


      </div>
    </main>
  );
};

export default AnimeApp;