const EmptyValueChecker = require("./emptyValueChecker");

module.exports =  class PayloadCleaner {
    static  clean(payload) {
        if (Array.isArray(payload)) {
            return payload.filter(item => !EmptyValueChecker.isEmpty(item)).map(item => {
                if (typeof item === "object") {
                    return this.clean(item);
                }
                return item;
            });
        }

        return Object.keys(payload).reduce((acc, key) => {
            const value = payload[key];
            if (!EmptyValueChecker.isEmpty(value)) {
                acc[key] = typeof value === "object" ? this.clean(value) : value;
            }
            return acc;
        }, {});
    }
}



