import React from "react";
import "./FormSection.scss";

const FormSection = ({ full, center, title, scroll, children }) => {
    return (
        <div
            className={`formSection ${full && "full"} ${center && "center"} ${
                scroll && "scroll"
            }`}
        >
            <table className="table">
                {title && (
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th
                                colSpan="2"
                                style={{
                                    background: "#343a40",
                                    color: "white",
                                }}
                            >
                                [{title}]
                            </th>
                        </tr>
                    </thead>
                )}
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export default FormSection;
