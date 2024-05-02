const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1))+min;
let attempt=0;
let guess;
let running=true;
while(running)
{
    guess=window.prompt(`guess a number between ${min} - ${max}`);
    guess=Number(guess);
    if(isNaN(guess))
    {
        window.alert(`please enter a valid number`);
    }
    else if(guess<min || guess>max){
        window.alert(`please enter a valid number`);   
    }
    else
    {
        attempt++;
        if(guess<ans){
            window.alert(`TOO low!Try Again`);
        }
        else if(guess>ans){
            window.alert(`TOO High!Try again`);
        }
        else{
            window.alert(`CORRECT! The answer was ${ans}.It tooks you ${attempt} attempts`);
            running=false;
        }
    }
}