// section 05 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬) >> 연속 부분수열 1

function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]; // 4 + arr[4] = 5 // 5 + arr[5] = 6 // 5 + arr[6] = 6 // 3 + arr[7] = 5
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++]; // 7 - arr[0] = 6, 6 - arr[1] = 4 sum 은 4 // 6 - arr[2] = 5 // 6 - arr[3] = 3
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
