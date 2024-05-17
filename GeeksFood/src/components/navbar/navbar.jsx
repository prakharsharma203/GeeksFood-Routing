import { NavLink } from "react-router-dom";
import "./navbar.css"


export function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="nav">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <h2 className="p">GeekFoods</h2>
        </div>
        <div className="support">
         <NavLink to = "/home" className="p1">Home</NavLink>
         <NavLink to = "/quotes">Quote</NavLink>
         <NavLink to = "/restaurants">Restaurants</NavLink>
         <NavLink to = "/foods">Foods</NavLink>
         <NavLink to = "/contact">Contacts</NavLink>
        </div>
        <div>
            <button className="btn">Get Started</button>
        </div>
      </nav>
    </>
  );
}