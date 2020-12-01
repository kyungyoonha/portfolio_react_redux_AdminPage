import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

const InputTime = ({ label, name, value, onChange, error = "" }) => {
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
                <div className={`input-group ${error && "is-invalid"}`}>
                    <ReactDatePicker
                        locale="ko"
                        selected={value}
                        className={`custom-select ${error && "is-invalid"}`}
                        onChange={handleChangeDate}
                        dateFormat="h:mm aa"
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                    />
                </div>
                {error && <div className="invalid-feedback">{error}</div>}
            </td>
        </tr>
    );
};

export default React.memo(InputTime);
