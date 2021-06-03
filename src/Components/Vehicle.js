import { useState } from 'react';
const Vehicle = (props) => {

    const [ moreInfo, setMoreInfo ] = useState(false)

    const showInfo = () => setMoreInfo(!moreInfo);
    const booking = () => alert("The User would then select booking");


    return (
        <div key={props.vehicle.Model_ID}>
            <div className="vehicleContainer">
                <li>{props.vehicle.Model_Name}</li> 
                <div>
                    <button className="moreInfo" onClick={showInfo}>More <span>i</span>nfo</button> 
                    <button className="book" onClick={booking}>Book</button>
                </div>
            </div>
            <div className="vehicleInfo">
            {moreInfo ? 
            (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dui vel turpis viverra lobortis vel at diam. Fusce venenatis erat quis.</p>)
            :
            (<></>)
            }
            </div>
        </div>
    )
}

export default Vehicle
