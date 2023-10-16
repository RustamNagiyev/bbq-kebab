import React from "react";
import { HashLink} from "react-router-hash-link";
// import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="flex">
            <img className="imgg" src="./pictures/logoheader.svg" alt="Restoran Logo" />
          </div>
          <div className="flex">
            <button className="number">
              <img src="./pictures/phoneimg.svg" alt="phone" />
              +1 (816) 482 1513
            </button>
          </div>
        </div>
        <nav>
          <div className="container2">
            <div className="navdiv">
              <HashLink
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
                to="/#about"
              >
                <button className="btnnav">About</button>
              </HashLink>
              <HashLink
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                to="/#menu"
              >
                <button className="btnnav">Menu</button>
              </HashLink>
              <HashLink 
               scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
                to="/#beverages">
                <button className="btnnav">Beverages</button>
              </HashLink>
              <HashLink 
               scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
                to="/#delivery">
              <button className="btnnav">Delivery</button>
              </HashLink>
              <HashLink 
               scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
               }
               to="/#contact">
              <button className="btnnav">Contact us</button>
              </HashLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
