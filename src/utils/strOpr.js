function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function toSnakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}

function toTitleCase(str) {
    return str.replace(/\b\w/g, function(txt) {
        return txt.toUpperCase();
    }).replace(/_/g, ' ');
}


export { toCamelCase, toSnakeCase, toTitleCase };

