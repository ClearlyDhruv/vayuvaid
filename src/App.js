import React, {useState} from 'react';
import CitySearch from './CitySearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import PollutantInfo from './pollutantinfo';
import AirQulaityLevelsTable from './AirQualityLevelsTable';
import PlantInfo from './PlantInfo';
import AirQualityCard from './AirQualityCard';
import './App.css';

function App() {
const [airQualityData, setAirQualityData] = useState(null)
const [error, setError] = useState(null)

  const getAirQuality = async (city) => {
  try {
    const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_TOKEN}`)
    const data = await response.json()
    console.log(data)
    if(response.ok && data.status === 'ok'){
      setAirQualityData(data.data)
      setError(null)
    } else{
      setError("Sorry, we couldn't find teh city you were looking for. Try another location nearby or ensure your spelling is correct. Thankyou for using VayuVaid")
      setAirQualityData(null)
    }
  }catch(error) {
    console.error("network error: ",error)
    setError("Sorry, something went wrong")
    setAirQualityData(null)
  }
}
  return (
    <div className='container'>
    <h1 className='mt-5 mb-3'>Welcome to VayuVaid's Air Quality Checker</h1>
    <CitySearch getAirQuality={getAirQuality}/>
    {error && (
      <div className = 'alert alert-danger' role='alert'>
        {error}
      </div>
    )}
    {airQualityData && (
      //air quality card component
      //pollutant info
      <>
      <AirQualityCard data={airQualityData}/>
      <PollutantInfo pollutant={airQualityData.dominentpol}/>
      <PlantInfo/>
      <AirQulaityLevelsTable />

      </>

    )}


    </div>
  );
}

export default App;
