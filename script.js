const input = document.getElementById('input');
const toCharBtn = document.getElementById('toChar');
const toCodeBtn = document.getElementById('toCode');
const result = document.getElementById('result');

// Convert Unicode number → Character
function unicodeToChar(code) {
  try {
    // Handle hex (e.g., 0xEA) or decimal (234)
    let num = parseInt(code, 16) || parseInt(code, 10);
    if (isNaN(num) || num < 0 || num > 0x10FFFF) {
      throw new Error("Invalid Unicode code point");
    }
    return String.fromCodePoint(num);
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

// Convert Character → Unicode
function charToUnicode(char) {
  const code = char.codePointAt(0);
  return `U+${code.toString(16).toUpperCase().padStart(4, '0')} (${code})`;
}

// Event Listeners
toCharBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) {
    result.textContent = "Please enter a number";
    result.classList.add('error');
    return;
  }
  const char = unicodeToChar(val);
  result.textContent = char;
  result.classList.remove('error');
});

toCodeBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) {
    result.textContent = "Please enter a character";
    result.classList.add('error');
    return;
  }
  const code = charToUnicode(val);
  result.textContent = code;
  result.classList.remove('error');
});

// Enter key support
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    toCharBtn.click();
  }
});