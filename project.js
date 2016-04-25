var _banner;
project.setAttribute("style","margin-top:"+header.offsetHeight+"px");

window.onresize=function(){
	project.setAttribute("style","margin-top:"+header.offsetHeight+"px");
	if (_banner) BannerDiv.setAttribute("style","height:"+Banner.offsetHeight+"px");
}


mnu.onmousedown=function(){
	if (menu.className=="on") menu.removeAttribute("class")
	else menu.className="on";
}

