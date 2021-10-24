// section 04 완전 탐색 >> 뒤집은 소수

// 에라토스테네스 체
// function isPrime(n) {
//   let count = 0;
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   for (let i = 2; i <= n; i++) {
//     if (ch[i] === 0) {
//       count++;
//       for (let j = i; j <= n; j += i) {
//         ch[j] = 1;
//       }
//     }
//   }
//   return count;
// }
// console.log(isPrime(4));

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let num = 0;
    while (x) {
      let t = x % 10;
      num = num * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(num)) answer.push(num);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
