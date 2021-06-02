import { useState } from 'react';

const Results = (props) => {

    const [ emptyList, setEmptyList ] = useState(false)
    const [ moreInfo, setMoreInfo ] = useState(false)
    
    const checkList = () => {if (props.searchResult.length === 0) {
        setEmptyList(true);
        }
    }

    const showInfo = () => setMoreInfo(!moreInfo);

    const booking = () => alert("The User would then select booking");
    
    const listVehicle = props.searchResult.map((vehicle) => {
        return (
            <div>
            <div className="vehicleContainer">
                <li>{vehicle.Model_Name}</li> 
                <div>
                    <button className="moreInfo" onClick={showInfo}>More <span>i</span>nfo</button> 
                    <button className="book" onClick={booking}>Book</button>
                </div>
            </div>
            <div className="vehicleInfo">
            {moreInfo ? 
            (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dui vel turpis viverra lobortis vel at diam. Fusce venenatis erat quis lectus varius, quis venenatis libero dapibus. Morbi vitae orci nisi. Suspendisse at metus vitae tellus ultricies rutrum. In accumsan venenatis turpis eu tincidunt.</p>)
            :
            (<></>)
            }
            </div>
            </div>
            )
 })

    return (
        <div>
            {emptyList ?
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