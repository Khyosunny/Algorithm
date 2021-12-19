// section 06 자료구조(스택, 큐) >> 교육과정 설계

function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  console.log('큐ㅣ: ', queue);

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }

  if (queue.length) return 'NO';

  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
