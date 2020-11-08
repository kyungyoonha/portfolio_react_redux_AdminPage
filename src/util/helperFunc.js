import pageConfig from "../siteConfig/pageConfig.json";
import moment from "moment";

export const changeInputToFormData = (inputs, fileList, multi) => {
    const formData = new FormData();

    for (let fileKey of fileList) {
        if (!multi) {
            formData.append(fileKey, inputs[fileKey][0]);
        } else {
            for (let i = 0; i < inputs[fileKey].length; i++) {
                formData.append(fileKey, inputs[fileKey][i]);
            }
        }
        delete inputs.fileKey;
    }

    formData.append("jsonData", JSON.stringify(inputs));
    return formData;
};

export const changeObjToQuerystring = (object) => {
    var result = [];
    for (var p in object)
        result.push(
            encodeURIComponent(p) + "=" + encodeURIComponent(object[p])
        );
    return "?" + result.join("&");
};

export const getHeaderList = (pathname) => {
    const pageId = pathname.split("/")[2];
    return pageConfig[pageId].headerList;
};

export const changeDataFormat = (key, value) => {
    switch (key) {
        case "purchase":
        case "question":
        case "drivercomplain":
        case "trabus":
            return value ? value.length + "건" : "0건";
        //return value;

        case "info":
        case "description":
        case "kr":
        case "en":
            return value ? "O" : "X";

        case "birthday":
            const date = new Date(value);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();

            return `${year}-${month}-${day}`;

        case "nationtype":
            return value === "1" ? "국내" : "국외";
        default:
            return value;
    }
};
