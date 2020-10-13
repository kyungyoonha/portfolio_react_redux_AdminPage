import React from "react";
import Map from "../components/Google/Map";

const GoogleSearch = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
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
                // onMapLoad={(map) => {
                //     let Marker = new window.google.maps.Marker({
                //         position: {
                //             lat: 33.489,
                //             lng: 126.4983,
                //         },
                //         map: map,
                //     });
                // }}
            />
        </div>
    );
};

export default GoogleSearch;
