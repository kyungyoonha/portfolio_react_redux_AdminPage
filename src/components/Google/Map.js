import React, { useState, useCallback } from "react";
import ReactModal from "react-modal";
import "./Map.scss";

const modalStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        marginBottom: "50px",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "550px",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "5",
    },
};

const initialValue = {
    addr: "",
    lat: "",
    lng: "",
};

const Map = ({ id, options, modalOpen, handleCloseModal, onChange }) => {
    const inputId = "map_input";
    const [address, setAddress] = useState(initialValue);

    // 검색어(주소) 자동완성 이벤트
    // [Places API] 사용
    const onEventSearchBox = useCallback((map, marker) => {
        let input = document.getElementById(inputId);
        let searchBox = new window.google.maps.places.SearchBox(input);

        map.addListener("bounds_changed", () => {
            searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
            const bounds = new window.google.maps.LatLngBounds();

            if (places.length === 0) return;
            places.forEach((place) => {
                const geometry = place.geometry;
                if (!geometry) return;

                // 뷰 포트 변경
                geometry.viewport
                    ? bounds.union(geometry.viewport)
                    : bounds.extend(geometry.location);
            });

            map.fitBounds(bounds);
            marker.setPosition(map.getCenter());

            const value = document.getElementById(inputId).value;
            const center = map.getCenter();
            setAddress({
                addr: value,
                lat: center.lat(),
                lng: center.lng(),
            });
        });
    }, []);

    // 지도 클릭 이벤트
    // [Geocder API] 클릭시, 위도 경도로 주소를 검색
    const onEventClickMap = (map, marker) => {
        window.google.maps.event.addListener(map, "click", (event) => {
            marker.setPosition(event.latLng);
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: event.latLng }, (results, status) => {
                if (status === "OK") {
                    if (results[0]) {
                        setAddress({
                            addr: results[0].formatted_address,
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                        });
                    }
                }
            });
        });
    };

    // 맵 생성
    const initMap = useCallback(() => {
        let map = new window.google.maps.Map(
            document.getElementById(id),
            options
        );
        let marker = new window.google.maps.Marker({
            position: options.center,
            map,
        });

        onEventClickMap(map, marker);
        onEventSearchBox(map, marker);
    }, [id, options, onEventSearchBox]);

    const initGooglMapAPI = () => {
        let newScript, topScript;
        if (!document.getElementById("script_insert")) {
            newScript = document.createElement("script");
            newScript.type = "text/javascript";
            newScript.id = "script_insert";
            newScript.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
            topScript = document.getElementsByTagName("script")[0]; // 첫번째 스크립트
            topScript.parentNode.insertBefore(newScript, topScript);
            // script.parentNode.removeChild(script);
        }
        !window.google
            ? newScript.addEventListener("load", (e) => initMap())
            : initMap();
    };

    const handleClickSave = () => {
        !address.addr && !address.lat && !address.lng
            ? alert("장소를 선택해주세요.")
            : onChange(address);

        handleCloseModal();
    };

    return (
        <ReactModal
            isOpen={modalOpen}
            contentLabel="Minimal Modal Example"
            style={modalStyle}
            onRequestClose={handleCloseModal}
            onAfterOpen={initGooglMapAPI}
        >
            <div className="map">
                <div className="map__title">
                    <h4>주소 검색</h4>
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={handleClickSave}
                    >
                        사용하기
                    </button>
                </div>
                <div className="map__searchBox">
                    <input
                        id={inputId}
                        className="map__input"
                        type="text"
                        value={address.addr}
                        onChange={(e) => {
                            const value = e.target.value;
                            return setAddress((state) => ({
                                ...state,
                                addr: value,
                            }));
                        }}
                    />
                    <i
                        className="fas fa-times"
                        onClick={() =>
                            setAddress({
                                addr: "",
                                lat: "",
                                lng: "",
                            })
                        }
                    ></i>
                    <i className="fas fa-search"></i>
                </div>
                <div id={id} className="map__display" />
            </div>
        </ReactModal>
    );
};

export default Map;
