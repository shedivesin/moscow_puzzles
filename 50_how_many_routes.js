let n = 0;

for(let a = 3; a < 8; a++) {
  for(let b = 2; b < a; b++) {
    for(let c = 1; c < b; c++) {
      n += c;
    }
  }
}

console.log(n);
