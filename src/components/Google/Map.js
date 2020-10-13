import React, { useEffect, useCallback } from "react";
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
        width: "30%",
        height: "600px",
        overflowY: "scroll",
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

const Map = ({ id, options }) => {
    // 주소 자동완성 이벤트
    const onEventSearchBox = useCallback((map, marker) => {
        console.log("?");
        const input = document.getElementById("input");
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
                    ? bounds.union(geometry.viewport) // Only geocodes have viewport.
                    : bounds.extend(geometry.location);
            });
            map.fitBounds(bounds);
            marker.setPosition(map.getCenter());
        });
    }, []);

    // 맵 생성
    const initMap = useCallback(() => {
        let map = new window.google.maps.Map(
            document.getElementById(id),
            options
        );
        let marker = new window.google.maps.Marker({
            position: { lat: 33.489, lng: 126.4983 },
            map: map,
        });

        // 드래그 이벤트
        window.google.maps.event.addListener(map, "dragend", () => {
            console.log(map.getCenter().lat());
            marker.setPosition(map.getCenter());
        });

        // 클릭 이벤트
        window.google.maps.event.addListener(map, "click", (event) => {
            marker.setPosition(event.latLng);
        });

        onEventSearchBox(map, marker);
    }, [id, options, onEventSearchBox]);

    useEffect(() => {
        // 구글 스크립트 삽입
        if (!window.google) {
            let newScript = document.createElement("script");
            newScript.type = "text/javascript";
            newScript.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
            // 다른 스크립트 보다 위에 삽입
            let firstScript = document.getElementsByTagName("script")[0]; // 첫번째 스크립트
            firstScript.parentNode.insertBefore(newScript, firstScript);

            newScript.addEventListener("load", (e) => initMap());
        } else {
            initMap();
        }
    }, [initMap]);

    const handleModalClose = () => {};
    return (
        // <ReactModal
        //     isOpen={true}
        //     contentLabel="Minimal Modal Example"
        //     style={modalStyle}
        //     onRequestClose={handleModalClose}
        // >
        <div className="map">
            <input id="map__input" className="mapInput" type="text" />
            <div id={id} style={{ width: "300px", height: "300px" }}></div>
        </div>
        //</ReactModal>
    );
};

export default Map;
