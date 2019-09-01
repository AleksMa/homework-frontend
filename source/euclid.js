'use strict';

const gcd = (a, b) => b ? gcd(b, a % b) : a;

const euclid = (...numbers) => numbers.reduce(gcd);