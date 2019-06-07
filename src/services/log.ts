export const log = s => {
    if (s instanceof String) {
        console.log(s);
    } else {
        console.log(JSON.stringify(s, null, 4));
    }
    return s;
};
