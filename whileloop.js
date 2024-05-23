let loggedin=false;
let username;
let pass;
while(!loggedin)
{
    username=window.prompt(`Enter the username`);
    pass=window.prompt(`Enter the password`);
    if(username==="arvind" && pass==="31-Aug-04"){
        loggedin=true;
        console.log(`successfully logged in!`);
    }
    else{
        console.log(`Invalid Credentials!.please try again`);
    }
}