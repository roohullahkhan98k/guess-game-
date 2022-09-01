let btn = document.getElementById('btn');
let output = document.getElementById('output');
let btn2 = document.getElementById('btn2');
let totalTries = document.getElementById('total-tries')
let number = Math.floor(Math.random()*100);
let currentTries = 0;
totalTries.innerHTML =5;
console.log(number)
//An event listener is a procedure in JavaScript that waits for an event to occur. The simple example of an event is a user clicking the mouse or pressing a key on the keyboard.
btn.addEventListener('click', function(){
    let input = document.getElementById('input');
    
    if (input.value  ===""){
        alert("please enter a number")
        // window.location.reload()
        return
        
    }
     if (input.value > 100){
         alert("please guess between 1 to 100")
        //  window.location.reload()
         input.value = ""
     return
     }

    if (isNaN(input.value)){
    alert("please enter a number")
    // window.location.reload()
    input.value = ""
    return
}

currentTries = currentTries+1
totalTries.innerHTML = 5 - currentTries

if (input.value == number){
    alert("congrates you guessed it right, your number was " + number)
    console.log(currentTries, totalTries) 
    // window.location.reload()
        input.value = ""
     
}
if (input.value < number){
    output.innerHTML = "you guessed too low"
    console.log(currentTries, totalTries)
};
if (input.value > number){
    output.innerHTML = "you guessed too high"
    console.log(currentTries, totalTries)
}
if(parseInt(totalTries.innerHTML) === 0 ){
        alert("tries completed")
        console.log(currentTries, totalTries)
        input.disabled = true;
    }

})
btn2.addEventListener('click', function(){
    totalTries.innerHTML = 5;
    input.value = ""
    input.disabled = false;
}) 

