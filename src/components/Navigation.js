function Navigation(props) {
  return (
    <nav className="navigation">
      <div className="home">
        <a href="http://localhost:4200/"><img src={props.logo} alt="Lekker van bij ons logo" /></a>
      </div>
      <div className="navButtons">
        <a className="navItem">Zoeken <i className="fas fa-search"></i></a>
        <a className="navItem">Gerechten <i className="fas fa-hamburger"></i></a>
        <a className="navItem">Favorieten <i className="fas fa-heart"></i></a>
        <a href="http://localhost:4200/profile" className="navItem">Profiel<i className="fas fa-user-circle"></i></a>
      </div>
    </nav>
  );
}

export default Navigation;