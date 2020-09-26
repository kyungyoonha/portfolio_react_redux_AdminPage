import React, { useState } from "react";
import ReactSlick from "react-slick";
import "./Slider.scss";

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
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <React.Fragment>
            <ReactSlick ref={(c) => setSlider(c)} {...settings}>
                {children}
            </ReactSlick>
            <div className="slider__buttonContainer">
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
            </div>
        </React.Fragment>
    );
};

export default Slider;
