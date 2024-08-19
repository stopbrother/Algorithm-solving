/*정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록
 solution 함수를 완성해주세요. */

function solution(numbers) {
  var answer = 0;
  for (i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 5.5
// console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])) 94.0
