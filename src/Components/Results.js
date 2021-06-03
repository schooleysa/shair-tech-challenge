import Vehicle from "./Vehicle"


const Results = (props) => {
        
    const listVehicle = props.searchResult.map((vehicle) => {
        return (
                <Vehicle vehicle={vehicle}/>                
            )
 })

    return (
        <div>
            {props.emptyList ?
            (<p className="error"> There are no results for this search!</p>)
            :
            (<div>
                <h3>{props.year} {props.make} {props.type}s</h3>
                <ul className="resultList">
                    {listVehicle}
                </ul>
            </div>)
            }
        </div>
    )
}

export default Results