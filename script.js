let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
       try{
          let buttonText = e.target.innerText;
        if (buttonText === 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText === 'C') {
            screenValue = "";
            screen.value = screenValue;
        }else if(buttonText === "π"){
          const PI = Math.PI.toFixed(3);
          screen.value += PI;
        }
        else if (buttonText === '=') {
            screen.value = eval(screenValue);
        }else if(buttonText === "D"){
          let screenString = screen.value.split("");
          screenString.pop();
          screenString = screenString.join("");
          screen.value = screenString;
          screenValue = screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
       }catch(error){
         if(error){
           screen.value = "Please Enter Valid Operation.";
           setTimeout(() => {
             buttons[0].click();
           }, 1000);
         }
       }

    })
}
