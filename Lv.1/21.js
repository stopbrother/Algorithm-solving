/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가
나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고,
18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는
함수, solution을 완성해주세요.
*/

function solution(x) {
  var answer = true;
  stringNumber = x
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  x % stringNumber === 0 ? (answer = true) : (answer = false);

  return answer;
}

console.log(solution(10));
console.log(solution(11));

// split - 문자열을 배열로
// map(Number) - 배열 각 요소에 있는 문자열을 Number로
// reduce - 배열에 있는 각 요소를 더하기
// acc - 누산기, curr - 현재값

/*
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}
*/
