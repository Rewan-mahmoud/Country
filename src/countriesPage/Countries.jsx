import React, { useEffect, useState } from "react";
import "./countries.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Countries() {
const navigate = useNavigate()
  const selectedValues = [
    { id: 0, value: "All" },
    { id: 1, value: "Americas" },
    { id: 2, value: "Africa" },
    { id: 3, value: "Europe" },
    { id: 4, value: "Asia" },
    { id: 5, value: "Oceania" },
  ];

  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegion] = useState("");
  let getCountriesData = async (country = "", region = "") => {
    let { data } = await axios.get(
      country
        ? `https://restcountries.com/v2/name/${country}`
        : region
        ? `https://restcountries.com/v2/region/${region}`
        : `https://restcountries.com/v2/all`
    );

    setCountries(data);
  };
  useEffect(() => {
    getCountriesData(countryName, regionName);
  }, [countryName, regionName]);

  return (
    <>
   
      <div className="container">
        <div className=" mt-5 d-flex justify-content-between ">
          <input
            type="Search"
            className=" secondryBackground border-0 form-control w-50  "
            placeholder="Search for a Country"
            onChange={(e) => setCountryName(e.target.value)}
          />
          <form>
            <select
              onChange={ e =>
                setRegion(e.target.value === "All" ? "" : e.target.value)
              
              }
              className="secondryBackground py-2 px-3 rounded text-white "
            >
              {selectedValues.map((item) => (
                <option
                  key={item.id}
                  value={item.value}
                  className="region-option"
                >
                  {item.value}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="row">
          {countries.map((item, index) => (
            <div key={index} className="col-md-3 mt-5">
              <div onClick={()=>navigate('/country-details', { state: {item:item}})} className="card secondryBackground text-white">
                <img
                  src={item.flag}
                  className="card-img-top  fixedHeight"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title title-size">{item.name}</h5>
                  <p className="description">
                    Population:{item.population.toLocaleString()}
                  </p>
                  <p className="description">Region: {item.region}</p>
                  <p className="description">Capital: {item.capital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
