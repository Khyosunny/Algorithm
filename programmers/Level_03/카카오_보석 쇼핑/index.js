// Level 03 > 2020 카카오 인턴십 > 보석 쇼핑

function solution(gems) {
  let answer = [];
  const kind = new Set(gems).size;
  let check = new Map();

  for (let rt = 0; rt < gems.length; rt++) {
    check.delete(gems[rt]);
    check.set(gems[rt], rt);
    if (check.size === kind) {
      answer.push([check.values().next().value + 1, rt + 1]);
    }
  }

  answer.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[1] - b[1];
    }
    return a[1] - a[0] - (b[1] - b[0]);
  });

  return answer[0];
}

console.log(
  '1: ',
  solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA'])
);
// [3, 7]

console.log('2: ', solution(['AA', 'AB', 'AC', 'AA', 'AC']));
// [1, 3]
