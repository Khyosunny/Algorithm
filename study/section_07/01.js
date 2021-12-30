// section 07 정렬과 그리디, 결정알고리즘 >> 선택정렬

// i 다음부터 끝까지 훑어보고 가장 작은 수를 찾아 i번째에 넣어준다
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
