/**
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
 * 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
 * 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의
 * 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 *
 * "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.
 */

function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? (a > b ? 1 : -1) : a[n] > b[n] ? 1 : -1
  );
}

console.log("solution:", solution(["sun", "bed", "car"], 1));

// a > b가 true를 반환하면 오름차순 false를 반환하면 내림차순
