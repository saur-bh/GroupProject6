// function for SignUp modal

function funSignUp(){
    document.getElementById('myModal1').style.display = 'none';
    document.getElementById('myModal').style.display='block';
    
}

//function for SignIn modal

function funSignIn(){
    document.getElementById('myModal1').style.display='block';
}

//function when X icon is clicked to close the modal
function funClose(){
    
    document.getElementById('myModal1').style.display = 'none';
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('myModal2').style.display = 'none';
    
}
