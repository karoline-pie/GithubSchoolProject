function getRandomCode() {
  const codes = ['1234', 'abcd', 'efgh', 'ijkl'];
  return codes[Math.floor(Math.random() * codes.length)];
}
