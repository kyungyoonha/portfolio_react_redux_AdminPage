import pageConfig from "../siteConfig/pageConfig.json";

export const changeInputToFormData = (inputs, fileList) => {
    const formData = new FormData();
    for (let fileKey of fileList) {
        formData.append(fileKey, inputs[fileKey][0]);
        // if (!multi) {
        //     formData.append(fileKey, inputs[fileKey][0]);
        // } else {
        //     for (let i = 0; i < inputs[fileKey].length; i++) {
        //         formData.append(fileKey, inputs[fileKey][i]);
        //     }
        // }
        delete inputs.fileKey;
    }
    formData.append("jsonData", JSON.stringify(inputs));
    return formData;
};

export const changeObjToQuerystring = (object) => {
    let result = [];
    let value;
    let exceptDate = ["tourstartday", "tourendday", "purchasedate"];
    for (let key in object) {
        value = object[key];

        if (exceptDate.indexOf(key) > -1) {
            value = changeDateFormat(object[key]);
        }

        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    }

    if (!result.length) return "";

    return "?" + result.join("&");
};

export const getHeaderList = (pathname) => {
    const pageId = pathname.split("/")[2];

    return pageConfig[pageId].headers;
};

export const changeDateFormat = (value, full = false) => {
    if (!value) return "";

    const date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let mins = date.getMinutes();

    return `${year}-${month}-${day}${
        full ? " " + hours + "시" + mins + "분" : ""
    }`;
};

export const changeDataFormat = (key, value) => {
    let date;
    switch (key) {
        case "purchase":
        case "question":
        case "drivercomplain":
        case "trabus":
            return value ? value.length + "건" : "0건";

        case "info":
        case "description":
        case "kr":
        case "en":
            return value ? "O" : "X";

        case "tourstartday":
        case "tourendday":
        case "purchasedate":
        case "birthday":
        case "createdAt":
            return changeDateFormat(value);

        case "tourstarttime":
            if (!value) return "";
            date = new Date(value);
            let hours = date.getHours();
            let mins = date.getMinutes();

            return `${hours}시 ${mins}분`;
        case "nationtype":
            return value === "1" ? "국내" : "국외";
        default:
            return value;
    }
};
