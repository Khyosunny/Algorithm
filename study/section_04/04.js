// section 04 완전 탐색 >> 졸업 선물

function solution(m, product) {
  let answer = 0;

  const students = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < students; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;
    for (let j = 0; j < students; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
