const input = document.getElementById("number_input");
const button = document.getElementById("convert-button");
const output = document.getElementById("output");



const ones = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
const tens = ['', 'десять', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];
const teens = ['', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
const thousands = ['', 'тисяча', 'мільйон', 'мільярд', 'трильйон'];

button.addEventListener('click', function() {
  const number = input.value;
  const result = convertNumberToWords(number);
  output.innerText = result;
});

function convertNumberToWords(number) {
  if (number == 0) return 'нуль';

  const numStr = number.toString();
  if (numStr.length > 15) return 'Число занадто велике';

  const numArr = numStr.padStart(15, '0').match(/(\d{3})/g).map(Number);
  let wordsArr = [];

  for (let i = 0; i < numArr.length; i++) {
    let num = numArr[i];
    if (num === 0) continue;

    let words = '';
    if (num >= 100) {
      words += ones[Math.floor(num / 100)] + ' сот';
      num %= 100;
    }

    if (num >= 20) {
      words += ' ' + tens[Math.floor(num / 10)];
      num %= 10;
    }

    if (num >= 10 && num < 20) {
      words += ' ' + teens[num % 10];
      num = 0;
    }

    if (num > 0) {
      words += ' ' + ones[num];
    }

    words += ' ' + thousands[numArr.length - 1 - i];
    wordsArr.push(words);
  }

  return wordsArr.join(' ').trim();
}