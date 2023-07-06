import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MainForm.scss"

const MainForm = () => {
  // state ====================
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  // functions ====================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (year && city && county) {
      try {
        const url = `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}`
        await axios.get(url)
          .then((res) => {
            console.log(res.data)
          })
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("fill in box")
    }
  }

  return (
    <form id="MainForm" onSubmit={handleSubmit}>
      <div className="year-select">
        <div className="year-label">年份</div>
        <select value={year} onChange={e => setYear(e.target.value)}>
          <option value="">請選擇</option>
          <option value="110">110</option>
          <option value="111">111</option>
          <option value="112">112</option>
        </select>
      </div>
      {/*  */}
      <div className="city-select">
        <div className="city-label">縣市</div>
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value="">請選擇</option>
          <option value="tc">tc</option>
          <option value="tp">tp</option>
          <option value="tn">tn</option>
        </select>
      </div>
      {/*  */}
      <div className="county-select">
        <div className="county-label">區</div>
        <select value={county} onChange={e => setCounty(e.target.value)}>
          <option value="">請選擇</option>
          <option value="shalu">sl</option>
          <option value="chingshui">cs</option>
          <option value="hello">hl</option>
        </select>
      </div>
      {/* submit btn */}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default MainForm;