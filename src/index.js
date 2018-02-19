module.exports = function warmup(temperature) {
  const cel = temperature;
  const celToFar = cel * 9 / 5 + 32;
  console.log(cel + '\xB0C is ' + celToFar + '\xB0C.');
};
