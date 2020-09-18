import React, { useState } from "react";
import ReactSlick from "react-slick";
import styled from "styled-components";

const ContainerButton = styled.div`
    display: flex;
    button {
        flex: 1;
    }
`;
const Slider = ({ children }) => {
    const [slider, setSlider] = useState(null);

    const handleButtonPrev = () => {
        slider.slickPrev();
    };
    const handleButtonNext = () => {
        slider.slickNext();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
    };

    return (
        <React.Fragment>
            <ReactSlick ref={(c) => setSlider(c)} {...settings}>
                {children}
            </ReactSlick>
            <ContainerButton>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleButtonPrev}
                >
                    이전
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleButtonNext}
                >
                    다음
                </button>
            </ContainerButton>
        </React.Fragment>
    );
};

export default Slider;
