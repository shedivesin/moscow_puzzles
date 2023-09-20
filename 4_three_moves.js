function move(a, b, c, m) {
  if(m.length === 3) {
    if(a === 8 && b === 8 && c === 8) { console.log(m.join(" ")); }
    return;
  }

  if(a > b) { move(a - b, b + b, c, [...m, "A→B"]); }
  if(a > c) { move(a - c, b, c + c, [...m, "A→C"]); }
  if(b > a) { move(a + a, b - a, c, [...m, "B→A"]); }
  if(b > c) { move(a, b - c, c + c, [...m, "B→C"]); }
  if(c > a) { move(a + a, b, c - a, [...m, "C→A"]); }
  if(c > b) { move(a, b + b, c - b, [...m, "C→B"]); }
}

move(11, 7, 6, []);
