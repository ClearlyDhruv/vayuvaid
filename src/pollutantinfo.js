

const PollutnatInfo =({pollutant}) => {
    const getPollutantInfo =(pollutant) => {
        switch (pollutant){
            case 'pm25':
                return 'PM2.5 refers to fine particulate matter with a diameter of 2.5 micrometers or smaller, often emitted from vehicle exhaust, industrial processes, and wildfires. It poses significant health risks as it can penetrate deep into the lungs and even enter the bloodstream, causing respiratory and cardiovascular issues.';
            case 'pm10':
                return 'PM10 refers to inhalable coarse particles with a diameter of 10 micrometers or smaller, typically originating from sources like construction sites, unpaved roads, and agricultural activities. Exposure to PM10 can lead to respiratory problems and exacerbate existing conditions like asthma and bronchitis.';
            case 'o3':
                return 'O3, or ozone, is a reactive gas composed of three oxygen atoms, primarily found in the Earth\'s stratosphere where it shields against harmful UV radiation. However, ground-level ozone, formed by pollutants interacting with sunlight, can cause respiratory issues and damage to plants and materials.';
            case 'so2':
                return 'SO2, or sulfur dioxide, is a colorless gas with a pungent odor, primarily emitted from burning fossil fuels in industrial processes and transportation. Exposure to SO2 can irritate the respiratory system and exacerbate conditions like asthma, as well as contribute to acid rain formation.';
            case 'co':
                return 'CO, or carbon monoxide, is a colorless, odorless gas produced by incomplete combustion of fossil fuels. High levels of CO can lead to carbon monoxide poisoning, causing symptoms like headaches, dizziness, and even death in severe cases.';
            case 'no2':
                return 'NO2, or nitrogen dioxide, is a reddish-brown gas produced by combustion processes like vehicle emissions and industrial activities. Prolonged exposure to NO2 can exacerbate respiratory conditions, increase susceptibility to respiratory infections, and contribute to the formation of smog and acid rain.';
            default:
                    return 'We don\'t have enough information on this pollutant';
        }
    }

return (
    <div className="card mb-4">
    <div className="card-body">
        <h4 className="card-title">
            {pollutant.toUpperCase()} Information
        </h4>
        <p>{getPollutantInfo(pollutant)}</p>
    </div>
    </div>
)
}

export default PollutnatInfo