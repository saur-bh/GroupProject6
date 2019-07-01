//function to edit Comments
function funEdit(){
    document.getElementById('textarea').readOnly = false;
    document.getElementById('textarea').focus();
    document.getElementById('textarea').style.border = "0.2px solid rgb(170, 170, 247)";
    document.getElementById('textarea').style.border.color = "blue";

    document.getElementById('textarea1').readOnly = false;
   // document.getElementById('textarea1').focus();
    document.getElementById('textarea1').style.border = "1px solid  rgb(245, 131, 131)";
    document.getElementById('textarea1').style.border.color = "blue";

    document.getElementsByClassName('edit-btn')[0].style.display = 'none';
    document.getElementsByClassName('save-btn')[0].style.display = 'block';
   
}

//function to Save comments
function funSave(){
    document.getElementById('textarea').readOnly = true;
    document.getElementById('textarea1').readOnly = true;
    document.getElementById('textarea').style.border = "0px";
    document.getElementById('textarea1').style.border = "0px";
    
    document.getElementsByClassName('edit-btn')[0].style.display = 'block';
    document.getElementsByClassName('save-btn')[0].style.display = 'none';
}

//Function to add comments to Comments List

function funComment(){
    var comments = document.getElementById('postComment').value;
    document.getElementById('commentList').innerHTML ='<p id="comment">'+ comments + document.getElementById('commentList').innerHTML;
    document.getElementById('postComment').value = '';
}

//Function to count the number of people who likes the blog
var likes = 0;
function funLike(){
    likes = likes + 1;
    if(likes == 1){
        document.getElementsByClassName('like-btn')[0].textContent = "Liked!";
        
        document.getElementById('commentTitle').textContent = likes + " person likes this!";
    }else{
        document.getElementsByClassName('like-btn')[0].textContent = "Liked!";
        document.getElementById('commentTitle').textContent = likes + " people have liked this!";
    }
}