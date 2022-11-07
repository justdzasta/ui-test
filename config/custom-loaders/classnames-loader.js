module.exports = function (source) {
    return `
        ${source}
        exports.locals = Object.assign(require("classnames/bind").bind(exports.locals), exports.locals)
    `
}
