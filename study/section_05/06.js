// section 05 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬) >> 학급 회장(해쉬)

// function solution(s) {
//   let answer;
//   let obj = {};

//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]]) {
//       obj[s[i]]++;
//     } else {
//       obj[s[i]] = 1;
//     }
//   }
//   let max = 0;
//   for (let key in obj) {
//     if (max < obj[key]) {
//       max = obj[key];
//       answer = key;
//     }
//   }

//   return answer;
// }

function solution(s) {
  let answer;
  let hash = new Map();
  for (let x of s) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of hash) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
