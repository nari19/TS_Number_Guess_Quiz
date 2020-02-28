// 即時関数
((): void => {
  // ---------------------------------------------------------------------------------
  // ランダムな数を生成
  let randomNum: number = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);

  // 回答をまとめた配列
  let answerSort: number[] = [];

  // HTMLエレメントの取得・DOM生成
  const htmlGenerate = (idName: string, htmlDate: string): HTMLElement => {
    const getMyElement: HTMLElement = <HTMLElement>(document.getElementById(idName));
    getMyElement.innerHTML = htmlDate;
    return getMyElement;
  };

  // 回答履歴の生成
  const beforeAns: HTMLElement = htmlGenerate('beforeAns', '');
  const afterAns: HTMLElement = htmlGenerate('afterAns', '');

  // 挑戦できる残りの回数
  let clickTimes: number = 10;
  const clickTimesText: HTMLElement = htmlGenerate(
    'clickTimesText',
    `${clickTimes}`
  );

  // ランダムな文字列・挑戦できる残り回数、のリセット
  const reGenerate = (): void => {
    randomNum = Math.floor(Math.random() * 100) + 1;
    clickTimes = 10;
    clickTimesText.innerHTML = `${clickTimes}`;
  };

  // ユーザが負けた時のメッセージ・データの初期化
  const lastMistake = (): void => {
    if (clickTimes == 0) {
      alert(`残念！！10回までに正解できませんでした... 答え[${randomNum}]`);
      reGenerate();
    }
  };
  // ---------------------------------------------------------------------------------


  // "予想を入力"ボタンのクリックイベント
  const btn: HTMLInputElement = <HTMLInputElement>(document.getElementById('btn'));
  btn.onclick = (): void => {
    // 数値の入力フォームから値を取得
    let numberValue: any = document.forms[0].number.value;

    // エラーメッセージ
    if (isNaN(numberValue)) {
      alert('数字で入力してください');
    } else if (numberValue > 100 || numberValue < 1) {
      alert('1から100の数字を入力してください');
    } else {
      // 挑戦できる数を減らす
      clickTimes -= 1;
      clickTimesText.innerHTML = `${clickTimes}`;

      // 回答履歴を追加し、ソートする
      answerSort += numberValue;
      answerSort.sort((a, b) => { return a-b });
      console.log(answerSort);

      // 結果の表示
      if (numberValue > randomNum) {
        alert('答えよりも大きいよ!!');
        afterAns.innerHTML += ` ${numberValue}, `;
        lastMistake();
      } else if (numberValue < randomNum) {
        alert('答えよりも小さいよ!!');
        beforeAns.innerHTML += ` ${numberValue}, `;
        lastMistake();
      } else {
        alert(`正解!! [${randomNum}] (新しい数字を生成します)`);
        reGenerate();
      }
    }
    // 入力フォームの値を空にする
    document.forms[0].number.value = '';
  };
})();
