// section 07 정렬과 그리디, 결정알고리즘 >> 회의실 배정

function solution(meeting) {
  let answer = 0;

  // 종료 시간이 작은 걸 기준으로, 종료 시간이 같으면 시작 시간 오름차순
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [1, 2],
  [2, 3],
  [3, 5],
  [6, 6],
  [7, 7],
];
console.log(solution(arr));
console.log(solution(arr2));
