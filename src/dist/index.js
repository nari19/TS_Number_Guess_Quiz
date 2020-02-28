"use strict";
(() => {
    // ランダムな数を生成
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
    // 挑戦できる残りの回数
    let clickTimes = 10;
    const clickTimesText = htmlGenerate("clickTimesText", `${clickTimes}`);
    // 回答履歴の生成
    const beforeAns = htmlGenerate("beforeAns", "");
    const afterAns = htmlGenerate("afterAns", "");
    // "予想を入力"ボタンのクリックイベント
    const btn = (document.getElementById('btn'));
    btn.onclick = () => {
        // 数値の入力フォームから値を取得
        let numberValue = document.forms[0].number.value;
        // エラーメッセージ
        if (isNaN(numberValue)) {
            alert("数字で入力してください");
        }
        else if (numberValue > 100 || numberValue < 1) {
            alert("1から100の数字を入力してください");
        }
        else {
            // 挑戦できる数を減らす
            clickTimes -= 1;
            clickTimesText.innerHTML = `${clickTimes}`;
            // 結果の表示
            if (numberValue > randomNum) {
                alert("答えよりも大きいよ!!");
                afterAns.innerHTML += ` ${numberValue}, `;
                lastMistake();
            }
            else if (numberValue < randomNum) {
                alert("答えよりも小さいよ!!");
                beforeAns.innerHTML += ` ${numberValue}, `;
                lastMistake();
            }
            else {
                alert(`正解!! [${randomNum}] (新しい数字を生成します)`);
                reGenerate();
            }
        }
        // 入力フォームの値を空にする
        document.forms[0].number.value = "";
        // ユーザが負けた時のメッセージ・データの初期化
        function lastMistake() {
            if (clickTimes == 0) {
                alert(`残念！！10回までに正解できませんでした... 答え[${randomNum}]`);
                reGenerate();
            }
        }
        ;
        // ランダムな文字列・挑戦できる残り回数、のリセット
        function reGenerate() {
            randomNum = Math.floor(Math.random() * 100) + 1;
            clickTimes = 10;
            clickTimesText.innerHTML = `${clickTimes}`;
        }
        ;
    };
    function htmlGenerate(idName, htmlDate) {
        const getMyElement = document.getElementById(idName);
        getMyElement.innerHTML = htmlDate;
        return getMyElement;
    }
})();
//# sourceMappingURL=index.js.map