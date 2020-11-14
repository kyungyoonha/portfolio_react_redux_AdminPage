const insertGoogleScript = () => {
    let script = document.getElementById("insert_google");
    let parentsScript;

    // insert Google Script
    if (!script) {
        script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "insert_google";
        script.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
        parentsScript = document.getElementsByTagName("script")[0]; // 첫번째 스크립트
        parentsScript.parentNode.insertBefore(script, parentsScript);
    }

    return script;
};

export default insertGoogleScript;
