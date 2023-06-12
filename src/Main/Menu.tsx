import { NavLink } from "react-router-dom";

export default function Menu(){
  const activeStyle = { color: "#000000" };
    return (
        <div>
        <nav className="navbar navbar-expand-md fixed-top custom-rose">
          <NavLink className="navbar-brand" to="/">PET REGISTER</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
            
        </nav>
       
        </div>
    )
}