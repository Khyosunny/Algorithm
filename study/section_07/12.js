// section 07 정렬과 그리디, 결정알고리즘 >> 마구간 정하기(결정알고리즘)

function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);

  let lt = 1,
    rt = Math.max(...stable);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) < c) {
      rt = mid - 1;
    } else {
      answer = mid;
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
