/*
문제 설명
정수 num1, num2가 매개변수로 주어질 때, 
num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

입출력 예
num1	num2	result
10	    5	    2
7	    2	    3

입출력 예 설명
입출력 예 #1

num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
입출력 예 #2

num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.

*/

function solution(num1, num2) {
  var answer = 0;
  if (num1 >= num2) {
    answer = ~~(num1 / num2); //정수형으로 만들어 주는 연산자 (~~)
  } else answer = Math.floor(num2 / num1);

  return answer;
}

/* 
Math.floor, parseInt, ~~ <= 양수일 경우에는 같은 동작
음수일 경우 parseInt와 ~~연산자는 같은 동작
음수일 경우 Math.floor는 작은값을 리턴함 ex) -3.1 => -4

*/
