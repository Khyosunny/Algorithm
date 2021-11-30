// section 06 자료구조(스택, 큐) >> 후위식 연산(postfix)

function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      if (x === '*') stack.push(lt * rt);
      if (x === '-') stack.push(lt - rt);
      if (x === '/') stack.push(lt / rt);
    }
    answer = stack[0];
  }
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
