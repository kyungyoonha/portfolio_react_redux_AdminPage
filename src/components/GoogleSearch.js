import React from "react";
import Map from "../components/Google/Map";

const GoogleSearch = () => {
    return (
        <Map
            id="myMap"
            options={{
                center: {
                    lat: 33.489,
                    lng: 126.4983,
                },
                zoom: 15,
                mapTypeControl: false,
            }}
        />
    );
};

export default GoogleSearch;
