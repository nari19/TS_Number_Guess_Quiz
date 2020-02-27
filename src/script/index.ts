((): void => {
  let randomNum: number = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum); 

  let clickTimes: number = 10;
  const clickTimesText: HTMLElement = <HTMLElement>document.getElementById('clickTimesText');
  clickTimesText.innerHTML = `${clickTimes}`;

  const btn: HTMLInputElement = <HTMLInputElement>(document.getElementById('btn'));
  btn.onclick = (): void => {
    const numberValue: number = document.forms[0].number.value;
    if (isNaN(numberValue)) {
      alert("数字で入力してください");
    } else if (numberValue > 100 || numberValue < 1) {
      alert("1から100の数字を入力してください");
    } else {
      clickTimes -= 1;
      clickTimesText.innerHTML = `${clickTimes}`;
      if (numberValue > randomNum) {
        alert("答えよりも小さいよ!!");
      } else if (numberValue < randomNum) {
        alert("答えよりも大きいよ!!");
      } else {
        alert("正解!! (新しい数字を生成します)");
       randomNum = Math.floor(Math.random() * 100) + 1;
       console.log(randomNum);
      }
    }
  };

})();