module.exports = function warmup(temperature) {
  const cel = temperature;
  const celToFar = cel * 9 / 5 + 32;
  return cel + '\xB0C is ' + celToFar + '\xB0C.';
};
