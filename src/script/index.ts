((): void => {
  const randomNum: number = Math.floor(Math.random() * 99) + 1;
  console.log(randomNum);
  const btn: HTMLInputElement = <HTMLInputElement>(document.getElementById('btn'));

  btn.addEventListener('click', function() {
    const numberValue: number = document.forms[0].number.value;
    if (isNaN(numberValue)) {
      alert("数字で入力してください");
    } else if(numberValue > 100 || numberValue < 1) {
      alert("1から100の数字を入力してください");
    } else {
      if (numberValue > randomNum) {
        alert("大きいよ!!");
      } else if(numberValue < randomNum) {
        alert("小さいよ!!");
      } else {
        alert("正解!!");
      }
    }
  }, false);
})();