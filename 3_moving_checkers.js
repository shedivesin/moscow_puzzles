function move(s) {
  const n = s.length;
  if(n === 49) {
    if(s.endsWith("AAABBB____")) { console.log("%s", s); }
    return;
  }

  for(let i = 0; i < 9; i++) {
    if(s[n - 10 + i] !== "_" && s[n - 9 + i] !== "_") {
      for(let j = 0; j < 9; j++) {
        if(s[n - 10 + j] === "_" && s[n - 9 + j] === "_") {
          const p = s.slice(-10).split("");
          p[j] = p[i];
          p[i] = "_";
          p[j + 1] = p[i + 1];
          p[i + 1] = "_";
          move(s + " → " + p.join(""));
        }
      }
    }
  }
}

move("____BABABA");
