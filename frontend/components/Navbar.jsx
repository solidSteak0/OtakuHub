export default function Navbar(){
  return(
    <nav className="navbar">
    <div className="nav-container">
      <div className="logo">
        <i className="fas fa-dragon"></i>
        <span>Otaku Hub</span>
      </div>
      <ul className="nav-menu">
        <li><a href="#" className="nav-link active"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#" className="nav-link"><i className="fas fa-list"></i> My List</a></li>
        <li><a href="#" className="nav-link"><i className="fas fa-user"></i> Profile</a></li>
      </ul>
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search anime..." />
      </div>
    </div>
  </nav>
  )
}