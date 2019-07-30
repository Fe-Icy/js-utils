function calcLength(str) {
    return str ? str.split('').map(s => s.charCodeAt() > 255 ? 2 : 1).reduce((t, n) => t + n, 0) : 0
}

module.exports = {
    calcLength
}
