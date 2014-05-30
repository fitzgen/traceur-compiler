function* G() {
  yield 'hi';
  yield 'there';
}

function f(...args) {
  return args;
}
var result = f(0, ...[1, 2], 3, ...G());

// ----------------------------------------------------------------------------

assertArrayEquals([0, 1, 2, 3, 'hi', 'there'], result);
