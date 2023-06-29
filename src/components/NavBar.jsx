import "../styles/NavBar.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar() {
  return (
    <div id="NavBar">
      <div className="logo">LOGO</div>
      <div className="setting">
        <img src={require("../imgs/gear.svg").default} alt="gear icon" />
      </div>
    </div>
  )
}

export default NavBar;