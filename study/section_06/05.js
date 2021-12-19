// section 06 자료구조(스택, 큐) >> 쇠막대기

function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer++;
    }
    console.log(stack, 'stack.length: ', stack.length, 'answer: ', answer);
  }
  return answer;
}

let a = '()(((()())(())()))(())';
let b = '(((()(()()))(())()))(()())';
console.log(solution(a));
console.log(solution(b));
