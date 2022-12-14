// Complete file by Akhila
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Signout from "../Signout/Signout";
import Currentuser from "../Currentuser/Currentuser";
import { useNavigate, Link } from "react-router-dom";
import profile_icon from "../../images/profile_icon.png";
/**
 * This function is used to build navbar to navigate around the site
 */
export default function Navbar({ render }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getCurrentUser() {
      let res = await fetch("/users/fetchUpdatedUser");
      let resuser = await res.json();
      console.log("resuser", resuser);
      let fname = resuser.user?.FirstName;
      console.log(fname);
      setUser(fname);
    }
    getCurrentUser();
  }, [render]);

  return (
    <nav className="navbar navbar-expand-md navbar-light gradient-custom">
      <div className="leftcontainer">
        <h1 style={{ fontSize: "20px" }}>
          <Link className="navbar-brand" to="/meals">
            Peko
          </Link>
        </h1>
      </div>
      <div className="rightContainer">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img
                width="20px"
                height="20px"
                src={profile_icon}
                alt="profile icon"
              />
            </li>
            <li className="nav-item">
              <button
                className="usebutton"
                onClick={() => {
                  navigate("/userhub");
                }}
              >
                <Currentuser user={user} />
              </button>
            </li>

            <li className="nav-item">
              <Signout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};
