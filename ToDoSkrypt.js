"use strict"

var remvd;
var remParent;
function dodajElement() {
	let li = document.createElement("LI");
	let inpt = document.getElementById("textInput").value;
	let t = document.createTextNode(inpt);
	let para = document.createElement("P");
	const d = new Date();
	let dat = document.createTextNode(d.toLocaleDateString());
	para.appendChild(dat);
	li.appendChild(t);
	li.appendChild(para);
	para.style.display = "none";
	const btnX = $('<button id="btnX" class="btn btn-danger">X</button>');
	$(li).append(btnX);

	$(btnX).click(function(){
	remParent = $(this).parent().parent();
	remvd = $(this).parent().detach();
	$('#btn_rev').prop('disabled', false);
	});
	
	

	if (inpt === '') {
		alert ("Nic nie wpisano!");
	} else {
		const choice = document.getElementById("listSelect").value;
		if (choice === '1') {
		document.getElementById("lowList").appendChild(li);
		li.style.display = "block";
		document.getElementById("textInput").value = "";
		}
		else if (choice === '2') {
		document.getElementById("medList").appendChild(li);
		li.style.display = "block";
		document.getElementById("textInput").value = "";
		}
		else if (choice === '3') {
		document.getElementById("highList").appendChild(li);
		li.style.display = "block";
		document.getElementById("textInput").value = "";
		}
		else {
		alert ("Nie wybrano listy!");
		}
	}


}

function revert() {
	$(remParent).append(remvd);
	$('#btn_rev').prop('disabled', true);
}


function hideLow(){
	for (let li of document.getElementById("lowList").getElementsByTagName("li")) {
		if (li.style.display === "block") {li.style.display = "none";}
		else {li.style.display = "block";}
	}
}
function hideMed(){
	for (let li of document.getElementById("medList").getElementsByTagName("li")) {
		if (li.style.display === "block") {li.style.display = "none";}
		else {li.style.display = "block";}
	}
}
function hideHigh(){
	for (let li of document.getElementById("highList").getElementsByTagName("li")) {
		if (li.style.display === "block") {li.style.display = "none";}
		else {li.style.display = "block";}
	}
}

$("li").each(function(){
$('<button id="btnX" class="btn btn-danger">X</button>').appendTo(this);
$(this).css("display","block");
});

$(".btn-danger").each(function(){
$(this).click(function(){
remParent = $(this).parent().parent();
remvd = $(this).parent().detach();
$('#btn_rev').prop('disabled', false);
});
});




const list = document.querySelectorAll('ul');
for (let i=0; i<list.length; i++) {
	list[i].addEventListener('click', function(ev) {
  	if (ev.target.tagName === 'LI') {
	    ev.target.classList.toggle('done');
	    let dat = ev.target.querySelector('p');
	    if (dat.style.display === "none") {
	    const d = new Date();
	    dat.innerText = d.toLocaleDateString();
	    dat.style.display = "block";
	    } else {
	      dat.style.display = "none";
	    }
	  }
	}, false);
}



function search() {
	let checkbox = document.getElementById("caseSens");
	let allLists = document.getElementsByTagName('li');
	let searchText = document.getElementById("search").value;

	if (checkbox.checked) {
	for (let i=0;i<allLists.length;i++) {
		if (allLists[i].textContent.includes(searchText)) {
			allLists[i].style.display = "block";
		} else {
			allLists[i].style.display = "none";
		}
	}
	} else {
	for (let i=0;i<allLists.length;i++) {
		if (allLists[i].textContent.toLowerCase().includes(searchText.toLowerCase())) {
			allLists[i].style.display = "block";
		} else {
			allLists[i].style.display = "none";
		}
	}
	}
}