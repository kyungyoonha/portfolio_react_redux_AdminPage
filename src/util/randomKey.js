export default (num) => {
    let len = num || 20;
    const chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    let result = "";
    for (var i = 0; i < len; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
};
