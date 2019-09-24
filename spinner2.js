
const maxTime1 = 1000;

const spinner = {
  0: '\r|   ',
  1: '\r/   ',
  2: '\r-   ',
  3: '\r\\   '
 };

for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      return process.stdout.write(spinner[i]);
    }, i * 200);
   }
}

// console.log(spinner(maxTime1))
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, time += 100);
// }
