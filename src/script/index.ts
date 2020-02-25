const btn: HTMLInputElement = <HTMLInputElement>document.getElementById('btn');
btn.addEventListener('click', ()=>{
  const numberValue: number = document.forms[0].number.value
  if (isNaN(numberValue)) {
    alert(`数字で入力してください`);
  } else {
    alert('success!!');
  }
})
