import "../styles/DashBoard.scss";
import MainForm from "./MainForm";

function DashBoard() {
  return (
    <div id="DashBoard">
      <div className="taiwan-logo">
        <img src={require("../imgs/taiwan.svg").default} alt="taiwan logo" />
      </div>
      <div className="content">
        <div className="title">人口數、戶數按戶別及性別統計</div>
        < MainForm />
      </div>
    </div>
  );
}

export default DashBoard;