/*
함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를
리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

function solution(n) {
  var answer = 0;
  const arrayInt = n.toString().split("");
  arrayInt.sort((a, b) => b - a);

  answer = parseInt(arrayInt.join(""));

  return answer;
}

console.log(solution(118372));

// 정수 -> 문자열 n.toString()
// 문자열 -> 배열 split('')
// 배열 -> 문자열 join('')
// 문자열 -> 숫자 parseInt(n)
// () 처럼 생략되면 ,로 구분함

/*
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}
*/
