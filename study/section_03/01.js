// section 03 문자열 탐색 >> 회문 문자열

// 풀이 01
function solution(s) {
  let answer = 'YES';
  let str = '';
  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  if (str.toLowerCase() !== s.toLowerCase()) answer = 'NO';
  return answer;
}

// 풀이 02
function solution2(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let length = s.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (s[i] !== s[length - i - 1]) answer = 'NO';
  }
  return answer;
}

// 풀이 03
function solution3(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  if (s.split('').reverse().join('') !== s) answer = 'NO';
  return answer;
}

let str = 'goooG';
console.log(solution3(str));
