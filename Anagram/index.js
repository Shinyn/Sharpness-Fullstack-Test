const button = document.querySelector('#checkAnagramButton');
const answer = document.querySelector('#answer');

button.addEventListener('click', () => {
  const wordOne = document.querySelector('#wordOne').value;
  const wordTwo = document.querySelector('#wordTwo').value;

  if (wordOne.length !== wordTwo.length) {
    answer.textContent = `'${wordOne}' and '${wordTwo}' are NOT anagrams!`;
  } else {
    const sortedWordOne = wordOne.toLowerCase().split('').sort().join('');
    const sortedWordTwo = wordTwo.toLowerCase().split('').sort().join('');
    if (sortedWordOne === sortedWordTwo) {
      answer.textContent = `'${wordOne}' and '${wordTwo}' are anagrams!`;
    } else {
      answer.textContent = `'${wordOne}' and '${wordTwo}' are NOT anagrams!`;
    }
  }
});
