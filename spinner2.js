let x = 100;
let iterator = 0;
let chars = ['|','/','-','\\','|','/','-','\\','|'];
while (x <= 1700) {
  let y = chars[iterator];
  setTimeout(() => {
    process.stdout.write('\r'+y);
  }, x+=200);
  iterator++;
}
