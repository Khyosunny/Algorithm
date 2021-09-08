// section 01 >> 대문자 찾기

// 1)
function solution(s) {
  let answer = 0;
  const lower = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== lower[i]) {
      ++answer;
    }
  }
  return answer;
}

// 2)
function solution2(s) {
  let answer = 0;
  for (let str of s) {
    if (/[A-Z]/g.test(str)) {
      ++answer;
    }
  }
  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
