// section 01 >> 중복 단어 제거

function solution(s) {
  let answer;
  // answer = [];
  // for (let i = 0; i < s.length; i++) {
  //   if (!answer.includes(s[i])) {
  //     answer.push(s[i]);
  //   }
  // }

  answer = s.filter((str, i) => {
    if (s.indexOf(str) === i) {
      return str;
    }
  });
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
