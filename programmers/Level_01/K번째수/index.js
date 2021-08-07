// Level 01 > 정렬 > K번째수

// <01>
function solution(array, commands) {
  let answer = [];
  let _array = [];

  for (let i = 0; i < commands.length; i++) {
    _array = array.slice(commands[i][0] - 1, commands[i][1]);
    _array.sort((a, b) => a - b);
    answer.push(_array[commands[i][2] - 1]);
    _array = [];
  }

  return answer;
}

// <02>
function solution2(array, commands) {
  return commands.map((command) => {
    const [start, end, pick] = command;
    const newArray = array
      .filter((_, index) => index >= start - 1 && index <= end - 1)
      .sort((a, b) => a - b);

    return newArray[pick - 1];
  });
}
