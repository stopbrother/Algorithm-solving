/*
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로
정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

function solution(arr, divisor) {
  var answer = [];
  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % divisor === 0) answer.push(arr[i]); // % 사용할경우 true,false이기에 arr[i]를 push
    }
    if (answer.length === 0) {
      // answer == null 을 사용할경우 빈배열이기에 null이 될수 없음.
      answer.push(-1);
    }
    answer.sort((a, b) => a - b);
  }
  return answer;
}

console.log(solution([5, 9, 7, 10], 5));

/*
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
*/
