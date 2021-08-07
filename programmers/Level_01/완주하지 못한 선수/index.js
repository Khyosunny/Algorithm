// Level 01 > 해시 > 완주하지 못한 선수
// <01>
function solution(participant, completion) {
  let answer = "";
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
