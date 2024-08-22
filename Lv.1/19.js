/*
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지
판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
*/

function solution(n) {
  var answer = Math.sqrt(n);
  Number.isInteger(answer) ? (answer = Math.pow(answer + 1, 2)) : (answer = -1);
  return answer;
}

console.log(solution(121));
console.log(solution(3));

//Math.sqrt 주어진 숫자에 루트를 씌운다.(제곱근을 구한다.) 음수일 경우 NaN 반환
//Math.pow(n, 2) n의 2제곱
//Number.isInteger 정수인지 확인

// const solution = (n) => {
//     return Math.sqrt(n) % 1 == 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
// }
