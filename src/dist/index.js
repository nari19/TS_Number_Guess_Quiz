"use strict";
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const numberValue = document.forms[0].number.value;
    if (isNaN(numberValue)) {
        alert(`数字で入力してください`);
    }
    else {
        alert('success!!');
    }
});
//# sourceMappingURL=index.js.map