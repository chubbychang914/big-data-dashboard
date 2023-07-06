import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DashBoard />
    </div>
  );
}

export default App;
