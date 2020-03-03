// boki trójkąta
let a = 3;
let b = 4;
let c = 5;
// h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let pole = () => {
  p = (a + b + c) / 2;
  result = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${result}`;
};
console.log(pole());
