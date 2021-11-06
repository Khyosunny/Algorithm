// section 05 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬) >> 연속 부분수열 2

function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }

    answer += rt - lt + 1;
    // rt = 0 lt = 0 answer = 1
    // rt = 1 lt = 0 answer = 3
    // rt = 2 lt = 0 answer = 6
    // rt = 3 lt = 2 answer = 8
    // rt = 4 lt = 3 answer = 10
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
