// section 04 완전 탐색 >> 뒤집은 소수

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
