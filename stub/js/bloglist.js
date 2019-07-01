

function funSignUp(){

    document.getElementById('myModal').style.display='block';
}

function funSignIn(){
    document.getElementById('myModal1').style.display='block';
}

function showContent(){
    var i=1;
    var dotIcon='dotIcon';
    var postId = 'postId';
    var trash = 'trash';
    
    for(i;i<=5;i++){
    
       var template = '<div class="post">'+
                    '<div class="post-left">'+
                    '<p class="post-username">Jimi</p>'+
                    '</div>'+
                    '<div class="post-content">'+
                        '<i class="fa fa-trash" style="position: absolute;right: 0%; top: 10%; border: 0px; width:30px;" onclick="funDisplay()";></i>'+
                        '<p class="post-title">Hello there ! This is Post '+i+'.'+' </p>'+
                        '<p class="post-desc">Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.</p>'+
                        '<button class="btn" style="position: absolute;right: 2%; top: 80%;border: 0px; width:30px;" onclick="nextPage()";><i class="fa fa-ellipsis-h" ></i></button>'+
                    '</div>'+
                '</div>';
        
        
    document.getElementsByClassName('allPostsContainer')[0].innerHTML += template;
    
    }
}
showContent();
function funDisplay(){
    document.getElementById('myModal2').style.display = 'block';
    
}

function hideDisplay(){
    document.getElementById('myModal2').style.display = 'none';
}
   
function nextPage(){
    
    window.open('post.html');
}

