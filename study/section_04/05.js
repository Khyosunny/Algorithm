// section 04 완전 탐색 >> 졸업 선물

function solution(n, k, card) {
  let answer;
  let tmp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let arr = Array.from(tmp).sort((a, b) => b - a);
  answer = arr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
