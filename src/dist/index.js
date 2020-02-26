"use strict";
const main = () => {
    const randomNum = Math.floor(Math.random() * 99) + 1;
    const btn = (document.getElementById('btn'));
    btn.addEventListener('click', btnClickEvent, false);
    // フォームの値を取得
    function btnClickEvent() {
        const numberValue = document.forms[0].number.value;
        if (isNaN(numberValue)) {
            alert(`数字で入力してください`);
        }
        else if (numberValue > 100 || numberValue < 1) {
            alert(`1から100の数字を入力してください`);
        }
        else {
            alert(randomNum);
        }
    }
};
main();
//# sourceMappingURL=index.js.map