import React, { useState } from "react";
import { changeObjToQuerystring } from "../../utils/helperFunc";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

const BoardTop = ({ filters, onClick }) => {
    const [queryObj, setQueryObj] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQueryObj((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const query = changeObjToQuerystring({ ...queryObj });
        onClick(query);
    };

    const handleChangeDate = (name, value) => {
        setQueryObj((state) => ({
            ...state,
            [name]: value,
        }));
    };
    const exceptDate = [
        "tourstartday",
        "tourendday",
        "purchasedate",
        "regdate",
    ];
    const makeInputField = (key) => {
        if (exceptDate.indexOf(key) > -1) {
            return (
                <ReactDatePicker
                    locale="ko"
                    selected={queryObj[key]}
                    className="custom-select"
                    onChange={(value) => handleChangeDate(key, value)}
                    dateFormat="yyyy-MM-dd"
                    peekNextMonth
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                />
            );
        } else {
            return (
                <input
                    type="text"
                    className="form-control"
                    name={key}
                    onChange={handleChange}
                />
            );
        }
    };

    if (!filters.length) {
        return <div className="row mt-4 mb-2" />;
    }

    return (
        <div
            style={{ background: "#f5f5f5", border: "1px solid #dfdfdf" }}
            className="p-3 mb-3"
        >
            <div className="row mt-4 mb-1 ">
                <h4 className="col-10">
                    조건 검색 <i className="fas fa-search"></i>
                </h4>
            </div>
            <div className="form-row mt-2 justify-content-between">
                {filters.map((item) => (
                    <div className="form-group col" key={item.key}>
                        <label>{item.title}</label>
                        {makeInputField(item.key)}
                    </div>
                ))}
                <div className="form-group col">
                    <label>노출수</label>
                    <select
                        name="limit"
                        className="custom-select"
                        required
                        onChange={handleChange}
                    >
                        <option value="10">10개씩</option>
                        <option value="20">20개씩</option>
                        <option value="30">30개씩</option>
                        <option value="50">50개씩</option>
                    </select>
                </div>
                <div className="col-2">
                    <label></label>
                    <button
                        type="button"
                        className="btn btn-primary btn-block mt-2"
                        onClick={handleSubmit}
                    >
                        검색<i className="ml-3 fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BoardTop;
