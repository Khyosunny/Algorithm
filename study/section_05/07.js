// section 05 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬) >> 아나그램(해쉬)

function solution(str1, str2) {
  let answer = 'YES';

  let map = new Map();

  for (let x of str1) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }

  for (let x of str2) {
    if (!map.has(x) || map.get(x) === 0) return 'NO';
    map.set(x, map.get(x) - 1);
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
