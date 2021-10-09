// section 02 >> 점수계산

function solution(arr) {
  let answer = 0,
    cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
