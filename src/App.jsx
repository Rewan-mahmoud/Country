import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


import Countries from '../src/countriesPage/Countries';
import CountryDetails from '../src/CountryDeatils/CountyDetails';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
 <>
    <header>
        <h4 className=" secondryBackground text-white ">Where in the world?</h4>
      </header>
 <Routes>
  <Route path='/' element={<Countries/>}/>
  <Route path='country-details' element={<CountryDetails/>}/>
  


 </Routes>


 </>
  );
}

export default App;
