for(let i = 0; i < 32768; i++) {
  const a = ((i >>  0) & 1) * 100 + ((i >>  1) & 1) * 10 + ((i >>  2) & 1) * 1;
  const b = ((i >>  3) & 1) * 300 + ((i >>  4) & 1) * 30 + ((i >>  5) & 1) * 3;
  const c = ((i >>  6) & 1) * 500 + ((i >>  7) & 1) * 50 + ((i >>  8) & 1) * 5;
  const d = ((i >>  9) & 1) * 700 + ((i >> 10) & 1) * 70 + ((i >> 11) & 1) * 7;
  const e = ((i >> 12) & 1) * 900 + ((i >> 13) & 1) * 90 + ((i >> 14) & 1) * 9;
  if(a + b + c + d + e === 1111) {
    const s = a.toString().padStart(3, "0") + " + " +
      b.toString().padStart(3, "0") + " + " +
      c.toString().padStart(3, "0") + " + " +
      d.toString().padStart(3, "0") + " + " +
      e.toString().padStart(3, "0");
    console.log("%s %s", s.match(/0/g).length.toString().padStart(2), s);
  }
}
