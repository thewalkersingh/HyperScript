import { NavLink, Outlet } from "react-router-dom";
import "../styles.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />
        <nav>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "blueviolet" } : undefined
            }
            to="/"
          >
            <h4>Home</h4>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "blueviolet" } : undefined
            }
            to="timer"
          >
            <h3>Timer</h3>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "blueviolet" } : undefined
            }
            to="todo"
          >
            <h3>Todo</h3>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "blueviolet" } : undefined
            }
            to="contact"
          >
            <h3>Contact</h3>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "blueviolet" } : undefined
            }
            to="about"
          >
            <h3>About Us</h3>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "blueviolet" } : undefined
            }
            to="bike"
          >
            <h3>Bike</h3>
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
