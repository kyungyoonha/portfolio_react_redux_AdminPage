import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

const InputDate = ({ label, name, value, onChange, errors }) => {
    const handleChangeDate = (date) => {
        onChange({
            target: { name, value: date },
        });
    };
    return (
        <tr>
            <th>
                <label className="col-form-label">
                    {label && `※ ${label}`}
                </label>
            </th>

            <td className="">
                <div className={`input-group ${errors[name] && "is-invalid"}`}>
                    <ReactDatePicker
                        locale="ko"
                        selected={value}
                        className={`custom-select ${
                            errors[name] && "is-invalid"
                        }`}
                        onChange={handleChangeDate}
                        dateFormat="yyyy-MM-dd"
                        peekNextMonth
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                    />
                </div>
                {errors[name] && (
                    <div className="invalid-feedback">{errors[name]}</div>
                )}
            </td>
        </tr>
    );
};

export default InputDate;
