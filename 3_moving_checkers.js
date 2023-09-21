function move(s) {
  const n = s.length;
  const t = s[n - 1];
  if(n === 4) {
    if(t === "AAABBB____") { console.log("%s → %s → %s → %s", ...s); }
    return;
  }

  for(let i = 0; i < 9; i++) {
    if(t[i] !== "_" && t[i + 1] !== "_") {
      for(let j = 0; j < 9; j++) {
        if(t[j] === "_" && t[j + 1] === "_") {
          const p = t.split("");
          p[j] = p[i];
          p[i] = "_";
          p[j + 1] = p[i + 1];
          p[i + 1] = "_";
          move([...s, p.join("")]);
        }
      }
    }
  }
}

move(["____BABABA"]);
