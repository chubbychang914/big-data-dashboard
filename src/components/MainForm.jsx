import { useState } from "react";
import "../styles/MainForm.scss"

const MainForm = () => {
  // state ====================
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  // functions ====================
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city, county, year);
  }


  return (
    <form id="MainForm" onSubmit={handleSubmit}>
      <div className="yearSelect">
        <div className="">年份</div>
        <input type="text" value={year} onChange={e => setYear(e.target.value)} />
      </div>
      {/*  */}
      <div className="citySelect">
        <div className="">縣市</div>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      </div>
      {/*  */}
      <div className="countySelect">
        <div className="">區</div>
        <input type="text" value={county} onChange={e => setCounty(e.target.value)} />
      </div>
      {/* submit btn */}
      <button type="submit">Submit</button>
    </form>
  )
}

export default MainForm;