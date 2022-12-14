function delay(fn, min = 1000, max = 3000) {
  const delay = Math.random() * (max - min) + min
  setTimeout(fn, delay)
}

module.exports = {
  delay,
}
