import React, { useRef, useState } from "react";
import {
    GoogleMap,
    LoadScript,
    StandaloneSearchBox,
    Marker,
} from "@react-google-maps/api";
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const mapContainerStyle = {
    height: "400px",
    width: "800px",
};

const GoogleSearch2 = () => {
    const [center, setCenter] = useState({
        address: "",
        lat: 37.5665,
        lng: 126.978,
    });
    let searchBox;
    const onLoad = (ref) => (searchBox = ref);
    const onPlacesChanged = () => {
        console.log(searchBox.getPlaces());
        const result = searchBox.getPlaces();
        console.log(result);
        if (!result[0]) alert("검색결과가 없습니다.");
        else {
            setCenter({
                address: result[0].formatted_address,
                lat: result[0].geometry.location.lat(),
                lng: result[0].geometry.location.lng(),
            });
        }
    };

    const handleChangeLoc = (e) => {
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_API_KEY}
            libraries={["places"]}
        >
            {/* <ScriptLoaded> */}
            <GoogleMap
                id="searchbox-example"
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
                onClick={handleChangeLoc}
            >
                <StandaloneSearchBox
                    onLoad={onLoad}
                    onPlacesChanged={onPlacesChanged}
                >
                    <React.Fragment>
                        <Marker
                            onLoad={(marker) => console.log("marker", marker)}
                            position={center}
                        />
                        <input
                            type="text"
                            placeholder="Customized your placeholder"
                            style={{
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `240px`,
                                height: `32px`,
                                padding: `0 12px`,
                                borderRadius: `3px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                fontSize: `14px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                position: "absolute",
                                left: "50%",
                                marginLeft: "-120px",
                            }}
                        />
                    </React.Fragment>
                </StandaloneSearchBox>
            </GoogleMap>

            {/* </ScriptLoaded> */}
        </LoadScript>
    );
};

export default GoogleSearch2;
