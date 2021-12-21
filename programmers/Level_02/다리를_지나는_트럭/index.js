// Level 02 > 스택/큐 > 다리를 지나는 트럭

// 1초간 1대
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = Array.from({ length: bridge_length }, () => 0);

  // [0, 0]
  while (queue.length) {
    queue.shift(); // [0] // [7] // [0] // [4] // [5] // [0] // [6]
    answer++;

    if (truck_weights.length) {
      let sum = queue.reduce((sum, cur) => sum + cur);

      if (sum + truck_weights[0] <= weight) {
        queue.push(truck_weights.shift()); // 1초에 [0, 7] // 3초에 [0, 4] // 4초에 [4, 5] // 7초에 [0, 6]
      } else {
        queue.push(0); // 2초에 [7, 0] // 6초에 [5, 0]
      }
    }
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
