document.querySelector("button").addEventListener("click", function(){

    //alert("i get clicked !");
    var audio = new Audio("sounds/Murloc-sound.mp3");
                audio.play();


////////////murloc one random

var randomMurloc1=Math.floor(Math.random() * 3) + 1;//regenerate a random number between 1 and 3.

var randomImgMurloc="murloc" + randomMurloc1 + ".jpg";//this will be a string that is from img1.png through to img3.png.

var randomImageSource="images/"+randomImgMurloc;

var randomImg1=document.querySelectorAll("img")[0];//select the tag <img> number one .

randomImg1.setAttribute("src",randomImageSource);//change the source of <img> one to be random when we refresh

////////////murloc two random

var randomMurloc2=Math.floor(Math.random() * 3) + 1;

var randomImgMurloc2="murloc" + randomMurloc2 + ".jpg";

var randomImageSource2="images/"+randomImgMurloc2;

var randomImg2=document.querySelectorAll("img")[1];

randomImg2.setAttribute("src",randomImageSource2);

//////////////murloc three random

var randomMurloc3=Math.floor(Math.random() * 3) + 1;

var randomImgMurloc3="murloc" + randomMurloc3 + ".jpg";

var randomImageSource3="images/"+randomImgMurloc3;

var randomImg3=document.querySelectorAll("img")[2];

randomImg3.setAttribute("src",randomImageSource3);

if(randomMurloc1===randomMurloc2 && randomMurloc1===randomMurloc3 && randomMurloc2===randomMurloc1 && randomMurloc2===randomMurloc3 && randomMurloc3===randomMurloc1 && randomMurloc3===randomMurloc2){
    document.querySelector("h2").innerHTML="🤑well played big win!!!🤑";
}else{
    document.querySelector("h2").innerHTML="🥺Refresh again🥺"; 
}


})



