function popcount8(x) {
  x = (x & 0x55) + ((x >> 1) & 0x55);
  x = (x & 0x33) + ((x >> 2) & 0x33);
  x = (x & 0x0F) + ((x >> 4) & 0x0F);
  return x;
}

let n = 0;

for(let i = 0; i < 256; i++) {
  if(popcount8(i) === 4) {
    n++;
  }
}

console.log(n);
