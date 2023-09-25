// Let us call east, "0," and north, "1." Then, this problem may be stated as,
// "How many bitstrings of length 8 have a popcount of 4?" So, we can easily
// guess and check.
{
  let n = 0;

  for(let i = 0; i < 256; i++) {
    if((i&1) + ((i>>1)&1) + ((i>>2)&1) + ((i>>3)&1) + ((i>>4)&1) + ((i>>5)&1) + ((i>>6)&1) + (i>>7) === 4) {
      n++;
    }
  }

  console.log(n);
}


// We can do better, though. Instead of trying all bitstrings, let's just find
// the position of each bit directly, since we know there must be exactly four
// bits and each bit must come after the previous one.
{
  let n = 0;

  for(let d = 3; d < 8; d++) {
    for(let c = 2; c < d; c++) {
      for(let b = 1; b < c; b++) {
        for(let a = 0; a < b; a++) {
          n++;
        }
      }
    }
  }

  console.log(n);
}


// But wait, that inner loop is stupid. We already know how many times we're
// incrementing, so let's just add that many.
{
  let n = 0;

  for(let d = 3; d < 8; d++) {
    for(let c = 2; c < d; c++) {
      for(let b = 1; b < c; b++) {
        n += b;
      }
    }
  }

  console.log(n);
}


// Hrm. But can't we do the same thing one level up? Instead of just adding
// 1 1 1 1 or whatever, we're now adding 4 3 2 1... but those are just the
// triangular numbers and there's an explicit formula for those.
{
  let n = 0;

  for(let d = 3; d < 8; d++) {
    for(let c = 2; c < d; c++) {
      n += (c - 1) * c;
    }
  }

  console.log(n / 2);
}


// I wonder if the pattern continues? Are there tetrahedral numbers, too? (Yes,
// of course there are.)
{
  let n = 0;

  for(let d = 3; d < 8; d++) {
    n += (d - 2) * (d - 1) * d;
  }

  console.log(n / 6);
}


// Okay, this is just silly. I suppose there must be an explicit formula for
// pentatope numbers, too, and we can just compute the result directly.
console.log((8 - 3) * (8 - 2) * (8 - 1) * 8 / 24);


// And, of course, since this last is a constant...
console.log(70);
