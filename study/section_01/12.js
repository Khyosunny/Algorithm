// section 01 >> 대문자로 통일

// 1)
function solution(s) {
  let answer = '';
  answer = s.toUpperCase();

  return answer;
}

// 2)
// 아스키 코드 소문자 97 ~ 122 / 대문자와 소문자는 32차이
function solution2(s) {
  let answer = '';
  for (let str of s) {
    let num = str.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += str;
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
