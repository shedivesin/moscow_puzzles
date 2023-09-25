for(let i = 0; i < 256; i++) {
  let str = "9";
  if((i >> 0) & 1) { str += "+"; }
  str += "8";
  if((i >> 1) & 1) { str += "+"; }
  str += "7";
  if((i >> 2) & 1) { str += "+"; }
  str += "6";
  if((i >> 3) & 1) { str += "+"; }
  str += "5";
  if((i >> 4) & 1) { str += "+"; }
  str += "4";
  if((i >> 5) & 1) { str += "+"; }
  str += "3";
  if((i >> 6) & 1) { str += "+"; }
  str += "2";
  if((i >> 7) & 1) { str += "+"; }
  str += "1";

  // NB: eval() is evil.
  if(eval(str) === 99) { console.log("%s=99", str); }
}

for(let i = 0; i < 64; i++) {
  let str = "1";
  if((i >> 0) & 1) { str += "+"; }
  str += "2";
  if((i >> 1) & 1) { str += "+"; }
  str += "3";
  if((i >> 2) & 1) { str += "+"; }
  str += "4";
  if((i >> 3) & 1) { str += "+"; }
  str += "5";
  if((i >> 4) & 1) { str += "+"; }
  str += "6";
  if((i >> 5) & 1) { str += "+"; }
  str += "7";

  // NB: eval() is evil.
  if(eval(str) === 100) { console.log("%s=100", str); }
}
