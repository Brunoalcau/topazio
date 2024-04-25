module.exports =  class EmptyValueChecker {
    static isEmpty(value) {
        return value === null || value === undefined || value === "" || value === "#"
            || (Array.isArray(value) && value.length === 0)
            || (typeof value === "object" && Object.keys(value).length === 0);
    }
}


