document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#checkAnagramButton');

  button.addEventListener('click', () => {
    const wordOne = document.querySelector('#wordOne').value;
    const wordTwo = document.querySelector('#wordTwo').value;

    updateAnswer(areAnagrams(wordOne, wordTwo));
  });
});

function updateAnswer(result) {
  const answer = document.querySelector('#answer');
  answer.textContent = result;
}

function areAnagrams(wordOne, wordTwo) {
  if (wordOne.length !== wordTwo.length) {
    return `'${wordOne}' and '${wordTwo}' are NOT anagrams!`;
  } else {
    const sortedWordOne = wordOne.toLowerCase().split('').sort().join('');
    const sortedWordTwo = wordTwo.toLowerCase().split('').sort().join('');
    if (sortedWordOne === sortedWordTwo) {
      return `'${wordOne}' and '${wordTwo}' are anagrams!`;
    } else {
      return `'${wordOne}' and '${wordTwo}' are NOT anagrams!`;
    }
  }
}

module.exports = { areAnagrams };
