import { Link, useLocation } from "react-router-dom";
// img
import logo from "../Assests/logo.png";
// data
import { links } from "../Data";

function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div className="nav__main">
      <Link to="/">
        <img
          src={logo}
          alt=""
          style={{ height: "4.8rem", width: "100%", padding: ".5rem" }}
        />
      </Link>
      {links.map(({ name, icon }, index) => (
        <Link
          key={index}
          to={`/Kanbas/${name}`}
          className={`nav__links  ${
            pathname.includes(name) && "nav__links__active"
          }`}
        >
          <p style={{ marginTop: ".5rem", height: "2.5rem" }}>{icon}</p>
          <p style={{ marginTop: "-1rem", height: "1rem" }}>{name}</p>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
