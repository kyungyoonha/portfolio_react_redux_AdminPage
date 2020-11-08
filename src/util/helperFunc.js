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
