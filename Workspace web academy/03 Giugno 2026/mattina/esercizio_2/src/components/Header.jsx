import logo from '../assets/logo.png'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt="logo azienda" /></div>

      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contatti</a></li>
      </ul>
    </nav>
  );
}
