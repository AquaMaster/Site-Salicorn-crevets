mosaique.addEventListener('mouseover', function(e){
    var anim = e.target.id;
    if (anim === '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'){
        imgDyn[parseInt(anim)].src = "Pages/images/mosaiquei"+anim+".png";
    }
    
}, false);

mosaique.addEventListener('mouseout', function(e){
    var anim = e.target.id;
    if (anim === '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'){
        imgDyn[parseInt(anim)].src = "Pages/images/mosaiqueImg"+anim+".png";
    }
    
}, false);
