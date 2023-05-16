function nextImage(x) {
  document.getElementById(`image${x}`).src=`image${x}next.jpg`;
}
function inversion(x) {
  let imgur = document.getElementById(`image${x}`)
    imgur.style="filter:invert(1)";
  imgur.style.boxShadow = "0px 0px 28px 0px rgba(255,0,255,1)"

}
function unversion(x) {
  document.getElementById(`image${x}`).style="filter:invert(0)";

}
function render(x){
  overlayer(x);
  updateCursor(x);
}
function overlayer(x){
  document.getElementById(`overlay${x}`).style="opacity:1";
  let imgur = document.getElementById(`image${x}`)
    // imgur.style="filter:saturate(2)";
  // document.getElementById('cursor2').style="filter: invert(1)";

}
function overlayerundo(x){
  document.getElementById(`overlay${x}`).style="opacity:0";
    let imgur = document.getElementById(`image${x}`)
    imgur.style="filter:saturate(1)";
  document.getElementById('cursor2').style.backgroundImage = "url('images/pointer.png')"
}

function updateCursor(x){
  let area = x;
  console.log(area);
  if(area == 1 || area == 2|| area == 3||area == 10||area == 11||area == 12||area == 14){
    document.getElementById('cursor2').style.backgroundImage = "url('images/ASpointer.png')";
  }if(area == 5||area == 6||area == 7||area == 8||area == 13){
    document.getElementById('cursor2').style.backgroundImage = "url('images/gpointer.png')"
  }else{
  }
}

function expansion(x){
document.getElementById('expansion').style.display = "block"; 
document.getElementById("expansion").src = `images/image${x}.jpg`;
  document.getElementById('close').style.display = "block"; 

}
function closer(){
  document.getElementById('expansion').style.display = "none"; 
  document.getElementById('close').style.display = "none"; 
}

//cursor
var cursorinner = document.querySelector('.cursor2');




document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});