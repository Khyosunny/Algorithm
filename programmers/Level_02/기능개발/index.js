// Level 02 > 스택/큐 > 기능개발

function solution(progresses, speeds) {
  let answer = [];
  let count = 0;

  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[0] >= 100) {
      count = 0;
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        count++;
      }
      answer.push(count);
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
