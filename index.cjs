module.exports = function (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}
