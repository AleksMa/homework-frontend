'use strict';

const num_gcd = (a, b) => b ? gcd(b, a % b) : a;

const gcd = (a, b) => Number.isInteger(a) && Number.isInteger(b) ?
  num_gcd(a, b) : 'Unexpected types. Expected: number';

const euclid = (...numbers) => numbers.reduce(gcd);
