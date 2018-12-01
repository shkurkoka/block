var xrasn = 0; var yrasn = 0;
var block = document.getElementById("divmove");
block.addEventListener("mousedown" , function(){
    movecord(this, elem);
});
function movecord(divelem,event){
    var xmouse = event.clientx;
    var ymouse = event.clienty;
    var xmoveblock = divelem.offsetleft;
    var ymoveblock = divelem.offsettop;
    xrasn = xmouse - xmoveblock;
    yrasn = ymouse - ymoveblock;
    divmove.addEventListener("mousemove",mousemoveBI);
    divmove.addEventListener("mouseup",mouseupBI);
    function mousemoveBI(elem){
        divmove.style.left = xmoveblock + (e.clientx - xmouse) + "px";
        divmove.style.top = ymoveblock + (e.clienty - ymouse) + "px";
    };
    function mouseupBI(elem){
        this.removeEventListener(mousemove, mousemoveBI);
    }
};