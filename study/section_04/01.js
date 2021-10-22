// section 04 완전 탐색 >> 자릿수의 합

function solution(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let sum = 0,
      tmp = arr[i];
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      if (arr[i] > answer) answer = arr[i];
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
