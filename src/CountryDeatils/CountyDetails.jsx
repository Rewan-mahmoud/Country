import React, { useEffect } from "react";
import "../CountryDeatils/CountryDetails.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CountyDetails() {
  const navigate = useNavigate();

  const { state } = useLocation();
  const item = state.item;
//   const borders = item?.borders;
  console.log("whole item from navigate", item);
  const {nativeName , population , region , capital , topLevelDomain , currencies , languages ,borders} = item
  const countryData = [
    { title: "Native name:", text:nativeName },
    { title: "Population:", text: population },
    { title: "Region:", text: region },
    { title: "Capital: ", text: capital },
    { title: "Top Level Domain: ", text: topLevelDomain },
    // { title: "Languages: ", text: languages },
  ];
  useEffect(() => {
    console.log("countryData", currencies);
  }, []);

  return (
    <>
      <div className="container CountryDetails ">
        <button onClick={() => navigate(-1)} className="btn btn-light  mb-3">
          
          Back
        </button>
        <div className="row ">
          <div className="col-md-6">
            <img src={item?.flag} alt="" className="rounded" width="90%" />
          </div>
          <div className="col-md-6 text-white">
            {/* <h5> {item?.name}</h5> */}
            {countryData.map((item, index) => (
              <div key={index}>
                <p>
                  {item.title} <span className="ms-2">{item.text}</span>
                </p>
              </div>
            ))}
            
            <div className="d-flex ">
            <h6>Currencies:</h6>
             {currencies.map((item, index) => (
              <span className=" childs mx-2" key={index}>
                {item.name}
              </span>
            ))}
            </div>
            <div className="d-flex ">
            <h6>languages:</h6>
             {languages.map((item, index) => (
              <span className="childs mx-2" key={index}>
                {item.name}
              </span>
            ))}
            </div>

            <h6>Border Countries:</h6>

           


            {borders.map((border, index) => (
              <p className="borderCountry ms-2" key={index}>
                {border}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
