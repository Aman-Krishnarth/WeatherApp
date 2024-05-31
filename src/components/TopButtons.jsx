function TopButtons({ setQuery }) {

    const cities = [
        {
            id: 1,
            name: "Delhi",
        },
        {
            id: 2,
            name: "Mumbai",
        },
        {
            id: 3,
            name: "Pune",
        },
        {
            id: 4,
            name: "Bangalore",
        },
        {
            id: 5,
            name: "Kolkata",
        },
    ];

    function handleClick(event){
        console.log(event.target.name)
        setQuery({q: event.target.name})
    }

    return (
        <>
            <div className="flex items-center justify-around my-6">
                {cities.map((city) => {
                    return (
                        <button
                            key={city.id}
                            className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
                            onClick={handleClick}
                            name= {city.name}
                        >
                            {city.name}
                        </button>
                    );
                })}
            </div>
        </>
    );
}

export default TopButtons;
