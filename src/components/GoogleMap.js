import React, { useState } from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
`;

const mapStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
};

const GoogleMap = ({ google }) => {
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
        <Container>
            <Map
                google={google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 37.8228, lng: 128.1555 }}
                onClick={addMarker}
            >
                {displayMarkers()}
            </Map>
        </Container>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY,
})(GoogleMap);