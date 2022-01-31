// section 07 정렬과 그리디, 결정알고리즘 >> 뮤직비디오(결정알고리즘)

function count(songs, capacity) {
  let cnt = 1,
    sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

// songs 정렬하면 안됨, 연속된 곡을 넣어야하기 때문
function solution(m, songs) {
  let lt = Math.max(...songs);
  let rt = songs.reduce((sum, cur) => sum + cur, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
