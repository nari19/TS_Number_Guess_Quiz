const main = (): void => {
  const btn: HTMLInputElement = <HTMLInputElement>(document.getElementById('btn'));

  btn.addEventListener('click', (): void => {
    const numberValue: number = document.forms[0].number.value;
    if (isNaN(numberValue)) {
      alert(`数字で入力してください`);
    } else if(numberValue > 100 || numberValue < 1) {
      alert(`1から100の数字を入力してください`);
    } else {
      const randomNum: number = Math.floor(Math.random() * 99) + 1;
      alert(randomNum);
    }
  });

};

main();