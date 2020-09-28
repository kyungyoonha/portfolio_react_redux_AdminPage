export default () => {
    const chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    let result = "";
    for (var i = 0; i < 20; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
};
