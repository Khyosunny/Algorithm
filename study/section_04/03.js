// section 04 완전 탐색 >> 멘토링

function solution(test) {
  let answer = 0;
  // n 은 학생 수 4 m 은 테스트 번호 3
  const n = test[0].length;
  const m = test.length;
  // i 는 멘토 j 는 멘티
  // k 는 수학 테스트 번호 s 는 각 테스트 등수
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;

      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          // pi 에 멘토 i의 등수 넣고 pj 에 멘티 j의 등수 입력
          if (i === test[k][s]) pi = s;
          if (j === test[k][s]) pj = s;
        }
        // 멘토의 등수가 멘티보다 높아야됨 ex) 1 < 2
        if (pi < pj) count++;
      }
      // 3단계의 테스트 모두 멘토 i의 등수가 멘티 j보다 높으면 answer 증가
      if (count === m) answer++;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
