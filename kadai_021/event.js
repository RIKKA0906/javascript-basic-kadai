const btn = document.getElementById('btn');
const text = document.getElementById('text');

const changeText ='ボタンをクリックしました';

btn.addEventListener('click', () => {
setTimeout(() => {
    text.textContent = changeText;}, 2000);

});