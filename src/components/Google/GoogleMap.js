import React, { useState } from "react";
import "./GoogleMap.scss";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
};

const DisplayMap = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY,
})(({ google }) => {
    const [markers, setMarkers] = useState([]);

    const addMarker = async (e, aug, geoData) => {
        let location = {
            lat: geoData.latLng.lat(),
            lng: geoData.latLng.lng(),
        };
        setMarkers((state) => [...state, location]);
    };

    const removeMarker = async (idx) => {
        setMarkers((state) => state.filter((marker, index) => index !== idx));
    };

    const displayMarkers = () => {
        return markers.map((location, idx) => {
            return (
                <Marker
                    key={idx}
                    id={idx}
                    position={location}
                    label={location.title}
                    onClick={() => removeMarker(idx)}
                />
            );
        });
    };
    return (
        <div className="googleMap">
            <Map
                google={google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 37.8228, lng: 128.1555 }}
                onClick={addMarker}
            >
                {displayMarkers()}
            </Map>
        </div>
    );
});

const GoogleMap = ({ size }) => {
    return (
        <div className={`dashboardCard ${size === "full" && "full"}`}>
            <div className="card">
                <div className="card-header bg-white">주간 예약건</div>
                <div className="card-body bg-white">
                    <DisplayMap />
                </div>
            </div>
        </div>
    );
};
export default GoogleMap;