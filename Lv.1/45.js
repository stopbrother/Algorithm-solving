/**
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을
 * 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고,
 * 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수,
 * solution을 완성해 보세요.
 */

function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  return s
    .split("")
    .map((alphabet) => {
      if (upper.includes(alphabet)) {
        return upper[(upper.indexOf(alphabet) + n) % 26];
      }

      if (lower.includes(alphabet)) {
        return lower[(lower.indexOf(alphabet) + n) % 26];
      }

      return alphabet;
    })
    .join("");
}

console.log("solution", solution("AB", 1));
console.log("solution", solution("z", 1));
console.log("solution", solution("a B z", 4));

// % : 나머지를 구하는 연산자
// A % B : A가 B보다 작다면 A반환 = 나눠지는수(A)가 나누는 수(B)보다 작다면 나눌 수 없기에 나눠지는수(A)를 그대로 반환
