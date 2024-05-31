import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

function Inputs({setQuery, setUnits}){

    const [city, setCity] = useState("")

    function handleChange(event){
        setCity(event.target.value)
    }

    function handleSearchClick(){
        console.log("HANDLE SEARCH CLICK");
        console.log(city)
        setQuery({q:city})
    }

    function handleKeyDown(event){
        console.log("HANDLE KEYDOWN")
        if(event.key === "Enter"){
            setQuery({q:city})
            setCity("")
            console.log(city)
        }
    }

    const handleLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude, longitude} = position.coords;
                setQuery({lat: latitude, lon: longitude})
            })
        }
    }

    return(

        <>
        <div
        className="flex flex-row justify-center my-6"
        >
            <div className="flex flex-row w-3/4 justify-center items-center space-x-4">
                <input 
                type="text" 
                placeholder="Search by city..."
                className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none "
                value={city}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                />
                <BiSearch
                size={30}
                className="cursor-pointer transition ease-out hover:scale-125"
                onClick={handleSearchClick}
                title="Search"
                />
                <BiCurrentLocation
                size={30}
                className="cursor-pointer transition ease-out hover:scale-125"
                onClick={handleLocationClick}
                title="Click to check weather of your current location"
                />
                <div 
                className="flex flex-row w-1/4 items-center justify-center"
                >
                    <button
                    className="text-2xl font-medium transition ease-out hover:scale-125"
                    title="Click to get all temperatures in Celcius"
                    onClick = {()=> setUnits("metric")}
                    >
                        °C
                    </button>
                    <p className="text-2xl font-medium mx-1">|</p>
                    <button
                    className="text-2xl font-medium transition ease-out hover:scale-125"
                    title="Click to get all temperatures in Fahrenheit"
                    onClick = {()=> setUnits("imperial")}
                    >
                        °F
                    </button>
                </div>
            </div>

        </div>
        </>

    )

}

export default Inputs;