/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한
모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우,
3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  var answer = 0;
  if (a >= b) {
    for (b; a >= b; b++) answer += b;
  } else {
    for (a; a <= b; a++) answer += a;
  }
  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));

/*
function adder(a, b){
    var result = 0 
    return (a+b) * (Math.abs(a-b)+1) / 2;
}
*/

/*
function solution(a, b) {
    // a가 항상 작은 값이 되도록 설정
    if (a > b) {
        [a, b] = [b, a];
    }

    // 수학적 공식을 사용해 합을 계산
    return (a + b) * (b - a + 1) / 2;
}
*/
