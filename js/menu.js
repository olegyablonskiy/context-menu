let menu = document.getElementById('context-menu');

document.onclick = function(e){
    menu.style.display = 'none';
}

document.getElementById('link').oncontextmenu = function(e){
 	e.preventDefault();        
    menu.style.left = e.pageX + 'px';
    menu.style.top = e.pageY + 'px';
    menu.style.display = 'block';
}