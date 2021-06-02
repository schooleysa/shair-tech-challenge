import Results from "./Results"
import { useState, useEffect } from 'react';
import axios from 'axios';


const Searchbar = () => {

    const [ selectedMake, setSelectedMake ] = useState("");
    const [ selectedType, setSelectedType ] = useState("");
    const [ selectedYear, setSelectedYear ] = useState("2021");
    const [ searchResult, setSearchResult ] = useState([])
    const [ showSearch, setShowSearch] = useState(true)

    const submit = (e) => {
        e.preventDefault();
        axios({
            url: `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${selectedMake}/modelyear/${selectedYear}/vehicleType/${selectedType}?format=json`,
            method: "GET",
            dataResponse: "json",
            // params: {
            //   make: selectedMake,
            //   modelyear: selectedYear,
            //   vehicleType: selectedType,
            //   format: "json",
            // },
          }).then((response) => {
            setSearchResult(response.data.Results);
            setShowSearch(false)
          });
    }

    const handleMake = (e) =>
    setSelectedMake(e.target.value);
   
    const handleType = (e) =>
    setSelectedType(e.target.value)

    const handleYear = (e) =>
    setSelectedYear(e.target.value)

    const toggleSearch = () =>
    setShowSearch(true)

    return (
        <section>
            {showSearch ? 
            (<div className="searchbar">
                <h3>Make a selection to get started!</h3>
                <form>
                    <div className="container">        
                        <label htmlFor="make">Choose a vehicle make:</label>
                            <select onChange={handleMake} name="make" id="make">
                                <option selected disabled value=""></option>
                                <option value="aston-martin">Aston Martin</option>
                                <option value="cadillac">Cadillac</option>
                                <option value="chevrolet">Chevrolet</option>
                                <option value="dodge">Dodge</option>
                                <option value="ferrari">Ferrari</option>
                                <option value="ford">Ford</option>
                                <option value="honda">Honda</option>
                                <option value="jaguar">Jaguar</option>
                                <option value="lamborghini">Lamborghini</option>
                                <option value="maserati">Maserati</option>
                                <option value="mazda">Mazda</option>
                                <option value="mercedes-benz">Mercedes Benz</option>
                                <option value="nissan">Nissan</option>
                                <option value="saab">Saab</option>
                                <option value="saturn">Saturn</option>
                                <option value="subaru">Subaru</option>
                                <option value="tesla">Tesla</option>
                                <option value="toyota">Toyota</option>
                            </select>
                    </div>     
                    <div className="container">  
                        <label htmlFor="type">Choose a vehicle type:</label>
                            <select onChange={handleType} name="type" id="type">
                                <option selected disabled value=""></option>
                                <option value="car">Car</option>
                                <option value="truck">Truck</option>
                                <option value="motorcycle">Motorcycle</option>
                            </select>
                    </div>     
                <div className="container">  
                    <label htmlFor="year">Choose a year: {selectedYear}</label>  
                    <input onChange={handleYear} className="year" type="range" min="1970" max="2021" id="year" defaultValue="2021"/>
                </div>  
                <button type="submit" onClick={submit}>F<span>i</span>nd Veh<span>i</span>cles</button>
            </form>
        </div>)
        :
        (
        <div className="resultsList">
            <Results searchResult={searchResult} make={selectedMake} year={selectedYear} type={selectedType}/>
            <button onClick={toggleSearch}>New Search</button>
        </div>
        )}
    </section>    
    )
}

export default Searchbar
