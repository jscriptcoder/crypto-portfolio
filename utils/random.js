function delay(fn, min, max) {
  const delay = Math.random() * (max - min) + min
  setTimeout(fn, delay)
}

module.exports = {
  delay,
}
