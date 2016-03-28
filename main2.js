// init();

// function init(){
// 	var	A=portfolio.getElementsByTagName("div"),
// 		h=Math.floor(A[0].offsetWidth*348/480);
	
// 	for (var i=0;i<A.length;i++) if (A[i].parentNode==portfolio){
// 		A[i].setAttribute("style","height:"+h+"px")
// 		A[i].addEventListener("mouseenter",function(e){e.target.className="hover"});
// 		A[i].addEventListener("mouseleave",function(e){e.target.className="leave";setTimeout(function(){e.target.removeAttribute("class")},500)})
// 	}
// }

// window.onresize=function(){
// 	var	A=portfolio.getElementsByTagName("div"),
// 		h=Math.floor(A[0].offsetWidth*348/480);
	
// 	for (var i=0;i<A.length;i++)if (A[i].parentNode==portfolio){
// 		A[i].setAttribute("style","height:"+h+"px")
// 	}
// }

// mnu.onmousedown=function(){
// 	if (menu.className=="on") menu.removeAttribute("class")
// 	else menu.className="on";
// }

// face.onload=function(){
// 	cover.className="Off";
// }

// btnCoder.onmousedown=
// btnLeft.onmousedown=function(){
// 	about.className="coder";
// }

// btnDesigner.onmousedown=
// btnRight.onmousedown=function(){
// 	about.className="designer";
// }

// function validate(f){
// 	msg.innerHTML="";
// 	msg.className="error";
// 	if (!validName(f.fname.value))	{msg.innerHTML="Please enter your First Name!";return false;}
// 	if (!validEmail(f.level.value))	{msg.innerHTML="Please enter your Email!";return false;}
// 	if (!validName(f.lname.value))	{msg.innerHTML="Please enter your Last Name!";return false;}
// 	if (!validName(f.fname.value))	{msg.innerHTML="Please enter your First Name!";return false;}
// 	if (f.message.value.length<3)	{msg.innerHTML="Please enter your Message!";return false;}
// 	msg.removeAttribute("class");

// 	var	url="contact.php?fname="+f.fname.value+"&lname="+f.lname.value+"&email="+f.email.value+"&level="+f.level.value+"&company="+f.company.value+"&message="+f.message.value+"&si="+Math.random(),
// 		http=new XMLHttpRequest();

// 	http.onreadystatechange=function(){if (http.readyState==4 && http.status==200) console.log("ok");}
// 	http.open("POST",url,true);
// 	http.send();

// 	f.className="off";
// 	msg.innerHTML="Thank you for contacting me. I will be in touch with you very soon.";
// 	return false;
// }

// function validName(a) {
// 	var re=/^[a-zA-Z ]+$/;
// 	return re.test(a);
// }

// function validEmail(email) {
//     var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//     return re.test(email);
// }

init();

function init(){
	if (!localStorage.ok) {
		document.body.className="login";
		var s=document.createElement("span");
		s.innerHTML="<img src='img/about.png' alt=''/><h2>Brigitte&nbsp;Kozena</h2><p>Please enter the password to view my website:</p><input type='password' id='password'/><br/><br/><button onclick='login()'>Login</button>";
		document.body.appendChild(s);
	}
	var	A=portfolio.getElementsByTagName("div"),
		h=Math.floor(A[0].offsetWidth*348/480);
	
	for (var i=0;i<A.length;i++) if (A[i].parentNode==portfolio) A[i].setAttribute("style","height:"+h+"px");
}

window.onresize=function(){
	banner.setAttribute("style","width:"+header.offsetWidth)
	var	A=portfolio.getElementsByTagName("div"),
		h=Math.floor(A[0].offsetWidth*348/480);
	
	for (var i=0;i<A.length;i++)if (A[i].parentNode==portfolio){
		A[i].setAttribute("style","height:"+h+"px")
	}
	banner.setAttribute("style","height:"+face.height+"px;top:"+header.offsetHeight+"px");
	page.setAttribute("style","margin-top:"+(face.height+50)+"px");
}

mnu.onmousedown=function(){
	if (menu.className=="on") menu.removeAttribute("class")
	else menu.className="on";
}

window.onload=function(){
	banner.setAttribute("style","height:"+face.height+"px;top:"+header.offsetHeight+"px");
	page.setAttribute("style","margin-top:"+(face.height+50)+"px");
	btnCoder.setAttribute("style","margin:0");
	btnDesigner.setAttribute("style","margin:0");
	btnLeft.setAttribute("style","opacity:1");
	btnRight.setAttribute("style","opacity:1");
}

btnCoder.onmousedown=
btnLeft.onmousedown=function(){
	banner.className="coder";
}

btnDesigner.onmousedown=
btnRight.onmousedown=function(){
	banner.className="designer";
}

function validate(f){
	msg.innerHTML="";
	msg.className="error";
	if (!validName(f.fname.value))	{msg.innerHTML="Please enter your First Name!";return false;}
	if (!validEmail(f.level.value))	{msg.innerHTML="Please enter your Email!";return false;}
	if (!validName(f.lname.value))	{msg.innerHTML="Please enter your Last Name!";return false;}
	if (!validName(f.fname.value))	{msg.innerHTML="Please enter your First Name!";return false;}
	if (f.message.value.length<3)	{msg.innerHTML="Please enter your Message!";return false;}
	msg.removeAttribute("class");

	var	url="contact.php?fname="+f.fname.value+"&lname="+f.lname.value+"&email="+f.email.value+"&level="+f.level.value+"&company="+f.company.value+"&message="+f.message.value+"&si="+Math.random(),
		http=new XMLHttpRequest();

	http.onreadystatechange=function(){if (http.readyState==4 && http.status==200) console.log("ok");}
	http.open("POST",url,true);
	http.send();

	f.className="off";
	msg.innerHTML="Thank you for contacting me. I will be in touch with you very soon.";
	return false;
}

function validName(a) {
	var re=/^[a-zA-Z ]+$/;
	return re.test(a);
}

function validEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

function login(){
	if (password.value=='portfolio'){
		localStorage.ok=1;
		document.body.removeAttribute("class");
		banner.removeAttribute("style");
		page.removeAttribute("style");
		var	A=portfolio.getElementsByTagName("div"),
			h=Math.floor(A[0].offsetWidth*348/480);
	
		for (var i=0;i<A.length;i++) if (A[i].parentNode==portfolio) A[i].setAttribute("style","height:"+h+"px");
		setTimeout(function(){
			banner.setAttribute("style","height:"+face.height+"px;top:"+header.offsetHeight+"px");
			page.setAttribute("style","margin-top:"+(face.height+50)+"px");
		},50);
	}
}
