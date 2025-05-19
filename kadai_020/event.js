// idを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text =document.getElementById('text');

const changeText = 'ボタンをクリックしました';

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    text.textContent = changeText;
});