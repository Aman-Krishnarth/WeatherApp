function TimeAndLocation({weather : {name, formattedLocalTime, country}}) {

    console.log("TIME AND LOCATION")
    console.log(formattedLocalTime.split(" "))

    let time = formattedLocalTime.split(" ")

    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-xl">{time[0]} {time[1]}/{time[2]}/{time[3]} {time[4]} {time[5]} {time[6]} {time[7]} {time[8]} </p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className="text-3xl font-medium">{name}, {country}</p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
