// section 07 정렬과 그리디, 결정알고리즘 >> 장난꾸러기 현수

function solution(arr) {
  let answer = [];

  let copyArr = [...arr];
  copyArr.sort();

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] !== arr[i]) answer.push(i + 1);
  }

  return answer;
}

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
