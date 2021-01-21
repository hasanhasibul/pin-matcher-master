// Random Number Generator
const generator = document.getElementById('generator');
let generateRandom;
generator.addEventListener('click',function(){
    const randomNumber = Math.random()*1000+9000;
    const roundedNumber = Math.round(randomNumber);
    const generatorInput = document.getElementById('generatorInput');
    generatorInput.value=roundedNumber;
    generateRandom = generatorInput.value;
})
// Input number Pat Area 
const buttonInput = document.getElementById('buttonInput');
const button = document.getElementsByClassName('button');
let screenButtonInput = '';
for (let i = 0; i < button.length; i++) {
    const element = button[i];
    element.addEventListener('click',function(event){
        const buttonText =event.target.innerText;
        if(buttonText== 'C'){
            screenButtonInput="";
            buttonInput.value = screenButtonInput;
        }
        else if(buttonText == '<'){
            screenButtonInput = screenButtonInput.slice(0,screenButtonInput.length-1);
            buttonInput.value = screenButtonInput;
        }
        else{
            screenButtonInput += buttonText;
            buttonInput.value=screenButtonInput;
        }
    })  
}

// Submit Button Area

document.getElementById('submitButton').addEventListener('click',function(){
    const trySpan = document.getElementById('trySpan').innerText;
    const trySpanValue = parseInt(trySpan);  
     let trySpanNewValue = trySpanValue-1;
     document.getElementById('trySpan').innerText=trySpanNewValue;
     if(trySpanNewValue>0){
        if(generateRandom == screenButtonInput ){
        const rightNotify = document.getElementById('rightNotify');
        rightNotify.style.display='block';
        wrongNotify.style.display='none';
        screenButtonInput="";
        buttonInput.value = screenButtonInput;
    }
    else{
        const wrongNotify = document.getElementById('wrongNotify');
        wrongNotify.style.display='block';
        screenButtonInput="";
        buttonInput.value = screenButtonInput;
    }
     }
else{
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled=true;
    submitButton.style.backgroundColor="gray";
}  
})