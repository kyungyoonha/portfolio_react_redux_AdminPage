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
        // zIndex: "5",
    },
};
// 구글맵
// https://developers.google.com/maps/documentation/javascript/examples/polygon-draggable
// 필요한 라이브러리
// Geocoding API
// Maps JavaScript API
// Places API (주소 자동완성)

// Place 자동완성 사용시 주의사항
// 1. 라이브러리 사용 => Places API
// 2. 스크립트 뒤에 &libraries=places 붙여줘야한다
// (x) https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}
// (o) https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places

// 스크립트 api env파일로 처리하기
// https://maruzzing.github.io/study/react/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B5%AC%EA%B8%80%EB%A7%B5-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0/

// 드래그 이벤트
// window.google.maps.event.addListener(map, "dragend", () => {
//     console.log(map.getCenter().lat());
//     marker.setPosition(map.getCenter());
// });

const initialValue = {
    addr: { lat: 33.489, lng: 126.4983 },
    lat: "",
    lng: "",
};

const Map = ({ id, options, modalOpen, handleCloseModal, onChange }) => {
    const inputId = "map_input";
    const [address, setAddress] = useState(initialValue);

    // 검색어(주소) 자동완성 이벤트
    // [Places API] 사용
    const onEventSearchBox = useCallback((map, marker) => {
        const input = document.getElementById(inputId);
        const searchBox = new window.google.maps.places.SearchBox(input);

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
            position: initialValue,
            map,
        });

        onEventClickMap(map, marker);
        onEventSearchBox(map, marker);
    }, [id, options, onEventSearchBox]);

    const initGooglMapAPI = () => {
        // 스크립트 삽입 - API KEY 환경변수 처리
        // index.html 에 직접 삽입할 경우, API키 노출 된다.
        // client 쪽에서 사용하는 key라 노출되어도 크게 문제는 없음(사이트 제한 걸어 놓으면)
        // 환경변수로 처리하기 위해서는 아래와 같이 스크립트를 삽입해줘야 한다.
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
        !address.lat ? alert("장소를 선택해주세요.") : onChange(address);

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
