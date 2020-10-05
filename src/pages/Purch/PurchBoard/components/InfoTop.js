import React, { useState } from "react";
import "./InfoTop.scss";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

const InfoTop = ({ handleChangePageCtrl }) => {
    const [startDate, setStartDate] = useState(new Date());

    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    const onClick = () => {
        handleChangePageCtrl("searchKeyword", input);
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            handleChangePageCtrl("searchKeyword", input);
        }
    };

    const onChangePageCtrl = (e) => {
        const { name, value } = e.target;
        handleChangePageCtrl(name, value);
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <DatePicker
                    locale="ko"
                    inline
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    disabledKeyboardNavigation
                    dateFormat="yyyy-MM-dd"
                />
                {/* <input
                    className="d-block w-100 mb-3"
                    type="text"
                    value={moment(startDate).format("YYYY-MM-DD")}
                    disabled
                /> */}
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                            checked
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                        >
                            모든 투어
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleRadios2"
                        >
                            택시 투어
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios3"
                            value="option3"
                            disabled
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleRadios3"
                        >
                            기타 투어
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <select
                            name="country"
                            className="custom-select"
                            required
                            onChange={onChangePageCtrl}
                        >
                            <option value="">모든 국가</option>
                            <option value="KOREA">대한민국</option>
                            <option value="THAILAND">태국</option>
                            <option value="VIETNAM">베트남</option>
                            <option value="EGYPT">이집트</option>
                            <option value="MYANMAR">미안마</option>
                        </select>
                    </div>

                    <div className="col">
                        <select
                            name="state"
                            className="custom-select"
                            required
                            onChange={onChangePageCtrl}
                        >
                            <option value="">모든 주</option>
                            <option value="KOREA">대한민국</option>
                            <option value="THAILAND">태국</option>
                            <option value="VIETNAM">베트남</option>
                            <option value="EGYPT">이집트</option>
                            <option value="MYANMAR">미안마</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col">
                        <select
                            name="city"
                            className="custom-select"
                            required
                            onChange={onChangePageCtrl}
                        >
                            <option value="">모든 도시</option>
                            <option value="KOREA">대한민국</option>
                            <option value="THAILAND">태국</option>
                            <option value="VIETNAM">베트남</option>
                            <option value="EGYPT">이집트</option>
                            <option value="MYANMAR">미안마</option>
                        </select>
                    </div>

                    <div className="col">
                        <select
                            name="driver"
                            className="custom-select"
                            required
                            onChange={onChangePageCtrl}
                        >
                            <option value="">담당 기사별 분류</option>
                            <option value="KOREA">기사1</option>
                            <option value="THAILAND">기사2</option>
                            <option value="VIETNAM">기사3</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                onChange={onChangeInput}
                                onKeyPress={onKeyPress}
                                value={input}
                            />
                            <div
                                className="input-group-prepend"
                                onClick={onClick}
                            >
                                <span className="input-group-text">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};

export default InfoTop;
