// Level 01 > 해시 > 완주하지 못한 선수
// <01>
function solution(participant, completion) {
  let answer = '';
  participant.sort();
  completion.sort();

  for (let j = 0; j < participant.length; j++) {
    if (participant[j] !== completion[j]) {
      answer = participant[j];
      break;
    }
  }

  return answer;
}

// <02>
function solution2(participant, completion) {
  const obj = {};
  participant.forEach((name) => {
    obj[name] = obj[name] ? ++obj[name] : 1;
  });
  completion.forEach((name) => {
    obj[name] = --obj[name];
  });

  for (let key in obj) {
    if (obj[key] >= 1) {
      return key;
    }
  }
}

// <03> Map으로 풀이
function solution3(participant, completion) {
  const hash = new Map();

  for (let i = 0; i < participant.length; i++) {
    hash.set(participant[i], (hash.get(participant[i]) || 0) + 1);
    hash.set(completion[i], (hash.get(completion[i]) || 0) - 1);
  }

  for (let [key, val] of hash) {
    if (val > 0) return key;
  }
}

console.log(
  solution3(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
