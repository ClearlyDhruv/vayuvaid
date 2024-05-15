const PlantInfo=()=>{
//     const levels = [
//         {name: '0-51', image: ""},
//         {name: '51-100', image: 'Moderate'},
//         {name: '101-150', image: 'Unhealthy for Sensitive Groups'},
//         {name: '151-200', image: 'Unhealthy'},
//         {name: '201-300', image: 'Very Unhealthy'},
//     ];

    return(
        <div className="card mb-4">
    <div className="card-body">
        <h5 className="card-title">Plants You Can Use</h5>
        <table className="table table-bordered">
            <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Aloe Vera (Aloe barbadensis miller)</td>
                <td><a href="https://www.amazon.in/BLOSSOM-Plants-Indoor-Office-Garden/dp/B0CQVTXSLN/ref=sr_1_5?sr=8-5"><img src={require("./pictures/aloevera.png")} alt="Aloe Vera"></img></a></td>
            </tr>
            <tr>
                <td>Money Plant (Epipremnum aureum)</td>
                <td><a href="https://www.amazon.in/Ugaoo-Good-Money-Plant-Variegated/dp/B01IHUE6CW/ref=sr_1_1_sspa?sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY"><img src={require("./pictures/moneyplant.png")} alt="Money Plant"></img></a></td>
            </tr>
            <tr>
                <td>Spider Plant (Chlorophytum comosum)</td>
                <td><a href="https://www.amazon.in/UGAOO-Ugaoo-Chlorophytum-Spider/dp/B01IH1NNIE/ref=sr_1_5?sr=8-5"><img src={require("./pictures/spiderplant.png")} alt="Spider Plant"></img></a></td>
            </tr>
            <tr>
                <td>Snake Plant (Sansevieria trifasciata)</td>
                <td><a href="https://amazon.in/Ugaoo-Sansevieria-Golden-Hahnii-Snake/dp/B071NMHPSY/ref=sr_1_1_sspa?sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY"><img src={require("./pictures/snakeplant.png")} alt="Snake Plant"></img></a></td>
            </tr>
            <tr>
                <td>Peace Lily (Spathiphyllum)</td>
                <td><a href="https://amazon.in/Ugaoo-Peace-Plant-Spathiphyllum-Viscount/dp/B01IK01TBK/ref=sr_1_1_sspa?sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY"><img src={require("./pictures/peacelily.png")} alt="Peace Lily"></img></a></td>
            </tr>
                {/* {levels.map(({name,image}, index) =>(
                    <tr key={index}>
                        <td>{name}</td>
                        <td>{image}</td>
                    </tr>
                ))} */}
            </tbody>
        </table>
        </div>
        </div>
    )
}

export default PlantInfo