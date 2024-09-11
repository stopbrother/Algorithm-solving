/*
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/
function solution(s) {
  var answer = "";
  const mid = Math.floor(s.length / 2);

  if (s.length % 2 === 1) {
    return (answer = s[mid]);
  }
  return (answer = s[mid - 1] + s[mid]);
}

console.log(solution("abcde"));

/*
function solution(s) {
    return s.substring(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
*/
/*
floor - 버림, ceil - 올림
substring - (indexstart, indexend)
*/
