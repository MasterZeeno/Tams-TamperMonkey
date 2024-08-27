function parseArgs(args) {
    if (args !== null && args !== undefined) {
        if (typeof args === 'string') {
            return { [args]: true };
        } else if (Array.isArray(args)) {
            return args.reduce((acc, arg) => {
                return { ...acc, ...parseArgs(arg) };
            }, {});
        } else if (typeof args === 'object') {
            return args;  // Return the object as is if it's already an object
        }
    }
    return {};  // Return an empty object if args is null, undefined, or other types
}


function processEl(selector, options) {
    console.log(selector);
    console.log(parseArgs(options));
}

processEl("h1", { all: true });
processEl("h1", 'all');