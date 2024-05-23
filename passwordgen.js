function generatepassword(length,lowercase,uppercase,num,symbols){
    const lowercasechar="abcdefghijklmnopqrstuvwxyz";
    const uppercasechar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numchar="0123456789";
    const symbolschar="!@#$%^&*()_+=-<>?/,.;[]{}\|`~"
    let allowedChars="";
    let password="";
    allowedChars+=lowercase?lowercasechar:"";
    allowedChars+=uppercase?uppercasechar:"";
    allowedChars+=num?numchar:"";
    allowedChars+=symbols?symbolschar:"";
    if(length<=0){
        return `(password length must be atleast one)`;
    }
    if(allowedChars.length==0){
        return `(Atleast 1 set of character needs to be selected)`;
    }
    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomindex];
    }
    return password;
}

const passlen=12;
const lowercase=true;
const uppercase=true;
const num=true;
const symbols=true;
const password=generatepassword(passlen,lowercase,uppercase, num,symbols);
console.log(`Generated password: ${password}`);