// Level 01 > 완전탐색 > 모의고사

function solution(answers) {
  const answer = [];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const one_length = answers.filter(
    (num, i) => num === one[i % one.length]
  ).length;
  const two_length = answers.filter(
    (num, i) => num === two[i % two.length]
  ).length;
  const three_length = answers.filter(
    (num, i) => num === three[i % three.length]
  ).length;

  const MAX_NUMBER = Math.max(one_length, two_length, three_length);

  if (MAX_NUMBER === one_length) {
    answer.push(1);
  }
  if (MAX_NUMBER === two_length) {
    answer.push(2);
  }
  if (MAX_NUMBER === three_length) {
    answer.push(3);
  }

  return answer;
}
