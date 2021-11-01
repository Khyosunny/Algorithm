// section 05 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬) >> 공통원소 구하기

function solution(arr1, arr2) {
  let answer = [];
  arr1.sort();
  arr2.sort();

  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
