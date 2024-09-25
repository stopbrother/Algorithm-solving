/**
 * 두 정수 left와 right가 매개변수로 주어집니다.
 * left부터 right까지의 모든 수들 중에서,
 * 약수의 개수가 짝수인 수는 더하고,
 * 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(left, right) {
  var answer = 0;
  for (i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      // i가 제곱수인지 확인 (정수이면 제곱수)
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
// Math.squrt() -> 제곱근 반환(루트)

/**
 * 
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

// Number.isInteger() -> 전달된 값이 정수인지 판별
 */
