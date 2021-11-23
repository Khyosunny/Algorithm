// section 06 자료구조(스택, 큐) >> 올바른 괄호

function solution(s) {
  let answer = 'YES';
  let array = [];

  for (let x of s) {
    if (x === '(') {
      array.push(x);
    } else {
      if (array.length === 0) return 'NO';
      array.pop();
    }
  }
  if (array.length > 0) return 'NO';
  return answer;
}

console.log(solution('(()(()))(()'));
// console.log(solution('())()'));
