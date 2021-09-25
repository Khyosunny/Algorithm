// section 01 >> 가운데 문자 출력

function solution(s) {
  let answer;
  let mid;
  if (s.length % 2 === 0) {
    mid = Math.floor(s.length / 2) - 1;
    answer = s.substr(mid, 2);
  } else {
    mid = Math.floor(s.length / 2);
    answer = s[mid];
  }
  return answer;
}
console.log(solution('food'));
