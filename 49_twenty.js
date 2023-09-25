for(let a = 1; a <= 20; a += 2) {
  for(let b = 1; b <= a; b += 2) {
    for(let c = 1; c <= b; c += 2) {
      for(let d = 1; d <= c; d += 2) {
        for(let e = 1; e <= d; e += 2) {
          for(let f = 1; f <= e; f += 2) {
            for(let g = 1; g <= f; g += 2) {
              const h = 20 - a - b - c - d - e - f - g;
              if(h >= 1 && h <= g && h % 2 === 1) {
                console.log("%d+%d+%d+%d+%d+%d+%d+%d", h, g, f, e, d, c, b, a);
              }
            }
          }
        }
      }
    }
  }
}
