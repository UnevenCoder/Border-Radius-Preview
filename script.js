let b = document.getElementById("b");
function change() {
  let tr = document.getElementById("tr").value,
    br = document.getElementById("br").value,
    tl = document.getElementById("tl").value,
    bl = document.getElementById("bl").value;
  b.style.borderTopRightRadius = tr + "px";
  b.style.borderTopLeftRadius = tl + "px";
  b.style.borderBottomRightRadius = br + "px";
  b.style.borderBottomLeftRadius = bl + "px";
  
  let wtl='-webkit-border-top-left-radius: '+tl+'px',
   wtr='-webkit-border-top-right-radius: '+tr+'px',
   wbr='-webkit-border-bottom-right-radius: '+br+'px',
   wbl='-webkit-border-bottom-left-radius: '+bl+'px',
   mtl = '-moz-border-radius-topleft:'+tl+'px;',
   mtr='-moz-border-radius-topright: '+tr+'px;',
   mbr='-moz-border-radius-bottomright: '+br+'px;',
   mbl='-moz-border-radius-bottomleft: '+bl+'px;',
   ctl = 'border-top-left-radius: '+tl+'px;',
   ctr='border-top-right-radius: '+tr+'px;',
   cbr='border-bottom-right-radius: '+br+'px;',
   cbl='border-bottom-left-radius: '+bl+'px;';
document.getElementById("code").value = '\n'+'Code [CSS-Webkit-Moz]'+'\n'+'\n'+wtr+'\n'+wtl+'\n'+wbr+'\n'+wbl+'\n'+ mtr+'\n'+mtl+'\n'+mbr+'\n'+mbl+'\n'+ ctr+'\n'+ctl+'\n'+cbr+'\n'+cbl;

 // document.getElementById("code").value += wtr+'\n'+wbl ;
}
function copy(){
    document.querySelector("textarea").select();
    document.execCommand('copy');
    alert('Successfully Copied')
}
