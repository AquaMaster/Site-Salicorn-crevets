function colorNav(){
   var item = document.querySelectorAll('header a'), // récupérer les balises a de la balise header
	menu = document.getElementById('Menu');

menu.addEventListener('mouseover', function (e) {
	var selection = e.target.className;
	
				if (selection=='listCre') {
					item[0].style.color ='rgb(15 , 133 , 114)';
					} else {
					item[0].style.color = 'white';}						
				
				if (selection=='listSal') {
					item[1].style.color = 'rgb(15 , 133 , 114)';
					} else {item[1].style.color = 'white';}
					
				if (selection=='listRec') {
						item[2].style.color = 'rgb(15 , 133 , 114)';
					} else {item[2].style.color = 'white';}
				
				if (selection=='listCon') {
					item[3].style.color = 'rgb(15 , 133 , 114)';
					} else {item[3].style.color = 'white';}	
},false);
}

// logo réseaux sociaux
function logoFb() {
var fb = document.getElementById('fb');

fb.addEventListener('mouseover', function(){
	fb.src = "Pages/images/facebook_rond1.png";
}, false);

fb.addEventListener('mouseout', function(){
	fb.src = "Pages/images/fb1.png";
}, false);
}

function logoPint(){
    var pint = document.getElementById('pint');
    
    pint.addEventListener('mouseover', function(){
        pint.src= "Pages/images/pinterest-logo.png";
    }, false);
    
    pint.addEventListener('mouseout', function(){
        pint.src="Pages/images/logopinterest.png"
    }, false);
}

logoFb();
colorNav();
logoPint();

//Animation de la mosaique

var mosaique = document.getElementById('mosaique');
var imgDyn = mosaique.querySelectorAll('img');




