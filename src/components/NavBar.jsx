import "../styles/NavBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar() {
  return (
    <div id="NavBar">
      <div className="logo">LOGO</div>
      <div className="setting"> <FontAwesomeIcon icon="gear" /></div>
    </div>
  )
}

export default NavBar;