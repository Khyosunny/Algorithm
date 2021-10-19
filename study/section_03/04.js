// section 03 문자열 탐색 >> 가장 짧은 문자거리

function solution(s, t) {
  let answer = [];
  let count = 1000;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      count = 0;
      answer.push(count);
    } else {
      answer.push(++count);
    }
  }
  count = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
      if (i === 0) {
        console.log(answer[i], count);
      }
      answer[i] = Math.min(answer[i], count);
    }
  }

  return answer;
}

let str = 'tteachermode';
console.log(solution(str, 'e'));

// count의 초기값은 문자열의 길이보다 큰 값이어야한다.
