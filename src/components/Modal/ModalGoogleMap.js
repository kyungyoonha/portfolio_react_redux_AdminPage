import React, { useState, useCallback } from "react";
import Modal from "./Modal";
import "./ModalGoogleMap.scss";

const initialValue = {
    addr: "",
    lat: "",
    lng: "",
};

const ModalGoogleMap = ({ options, isOpen, onClickClose, onChange }) => {
    const mapId = "myMap";
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
            document.getElementById(mapId),
            options
        );
        let marker = new window.google.maps.Marker({
            position: options.center,
            map,
        });

        onEventClickMap(map, marker);
        onEventSearchBox(map, marker);
    }, [mapId, options, onEventSearchBox]);

    const initGooglMapAPI = () => {
        let script = document.getElementById("script_insert");

        !window.google
            ? script.addEventListener("load", (e) => initMap())
            : initMap();
    };

    const handleClickSave = () => {
        !address.addr && !address.lat && !address.lng
            ? alert("장소를 선택해주세요.")
            : onChange(address);

        onClickClose();
    };

    return (
        <Modal
            title="주소 검색"
            isOpen={isOpen}
            onClick={handleClickSave}
            onClickClose={onClickClose}
            onAfterOpen={initGooglMapAPI}
        >
            <div className="map">
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
                        onClick={() => setAddress(initialValue)}
                    ></i>
                    <i className="fas fa-search"></i>
                </div>
                <div id={mapId} className="map__display" />
            </div>
        </Modal>
    );
};

export default ModalGoogleMap;
