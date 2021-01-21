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
const button = document.getElementsByClassName('button');
const buttonInput = document.getElementById('buttonInput');
let screenButtonInput = '';
console.log(typeof(screenButtonInput))
for (let i = 0; i < button.length; i++) {
    const element = button[i];
    element.addEventListener('click',function(event){
        const buttonText =event.target.innerText;
        screenButtonInput += buttonText;
        buttonInput.value=screenButtonInput;
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
        buttonInput.value="";
    }
    else{
        const wrongNotify = document.getElementById('wrongNotify');
        wrongNotify.style.display='block';
        buttonInput.value="";
    }
     }
else{
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled=true;
    submitButton.style.backgroundColor="gray";
}  
})