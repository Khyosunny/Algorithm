// section 01 >> 대소문자 변환

function solution(s) {
  let answer = '';

  for (let str of s) {
    if (str === str.toUpperCase()) {
      answer += str.toLowerCase();
    } else {
      answer += str.toUpperCase();
    }
  }

  return answer;
}

console.log(solution('StuDY'));
