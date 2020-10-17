const download = (name, path) => {
    var link = document.createElement("a");
    link.href = name;
    link.download = path;
    document.body.appendChild(link);
    link.click();
};

export default download;
