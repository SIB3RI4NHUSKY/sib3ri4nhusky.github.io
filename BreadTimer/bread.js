function enableThis(element) {
	document.getElementById(element).style.display = "block";
}

function disableThis(element) {
	document.getElementById(element).style.display = "none";
}

function hideThis(element) {
	document.getElementById(element).style.opacity = "0";
}

function showThis(element) {
	document.getElementById(element).style.opacity = "1";
}



let initialMoreMode = false;

function initialMore() {
	initialMoreMode = !initialMoreMode;
	if (initialMoreMode) {
		document.getElementById('more-left').style.width = "140px";
		document.getElementById('more-right').style.width = "130px";
		setTimeout(hideMoreText, 500)
		setTimeout(showRecipesAndTimeArea, 1000)
		setTimeout(showRecipesAndTimeButtons, 1500)		
	}
	if (!initialMoreMode) {
		hideRecipesAndTimeText();
		
		document.getElementById('more-left').style.marginRight = "0px";
		document.getElementById('more-right').style.marginLeft = "0px";
		document.getElementById('more-left').style.borderTopRightRadius = "0px";
		document.getElementById('more-left').style.borderBottomRightRadius = "0px";
		document.getElementById('more-right').style.borderTopLeftRadius = "0px";
		document.getElementById('more-right').style.borderBottomLeftRadius = "0px";
			

		document.getElementById('more-left').style.width = "68px";
		document.getElementById('more-right').style.width = "58px";		
		setTimeout(disableRecipesAndTimeText, 1000)
		setTimeout(showMoreText, 1500)	
	}
}

function hideMoreText() {	
	document.getElementById('more-left-text').style.opacity = "0";
	document.getElementById('more-right-text').style.opacity = "0";
}

function showMoreText() {
	document.getElementById('more-left-text').style.opacity = "1";
	document.getElementById('more-right-text').style.opacity = "1";
}

function hideRecipesAndTimeText() {
	document.getElementById('show-recipes').style.opacity = "0";
	document.getElementById('set-time').style.opacity = "0";
}

function disableRecipesAndTimeText() {
	document.getElementById('show-recipes').style.display = "none";
	document.getElementById('set-time').style.display = "none";
	document.getElementById('more-left-text').style.display = "block";
	document.getElementById('more-right-text').style.display = "block";
}

function showRecipesAndTimeArea() {
	document.getElementById('more-left-text').style.display = "none";
	document.getElementById('more-right-text').style.display = "none";


	document.getElementById('more-left').style.width = "130px";
	document.getElementById('more-left').style.marginRight = "10px";
	document.getElementById('more-right').style.width = "120px";
	document.getElementById('more-right').style.marginLeft = "10px";

	document.getElementById('more-left').style.borderTopRightRadius = "5px";
	document.getElementById('more-left').style.borderBottomRightRadius = "5px";

	document.getElementById('more-right').style.borderTopLeftRadius = "5px";
	document.getElementById('more-right').style.borderBottomLeftRadius = "5px";

	document.getElementById('show-recipes').style.display = "block";
	document.getElementById('set-time').style.display = "block";
}

function showRecipesAndTimeButtons() {
	document.getElementById('show-recipes').style.opacity = "1";
	document.getElementById('set-time').style.opacity = "1";
}

function getRecipes() {
	document.getElementById('app-background').style.opacity = "0";	
	setTimeout(showBlack, 800)
	setTimeout(openBlack, 1000)
}

function getAppBack() {
	document.getElementById('app-background').style.opacity = "1";
}

function showBlack() {
	document.getElementById('app-background').style.display = "none";
	document.getElementById('black-top').style.display = "block";
	document.getElementById('black-bottom').style.display = "block";
	document.getElementById('black').style.background = "transparent";	
}

function hideBlack() {
	document.getElementById('app-background').style.display = "block";
	document.getElementById('black-top').style.display = "none";
	document.getElementById('black-bottom').style.display = "none";
	document.getElementById('black').style.background = "black";	
}

function openBlack() {	
	document.getElementById('black-top').style.width = "0px";
	document.getElementById('black-bottom').style.width = "0px";	

	setTimeout(enableRecipes, 700)
	setTimeout(showRecipes, 800)
}

function closeBlack() {
	document.getElementById('black-top').style.width = "50%";
	document.getElementById('black-bottom').style.width = "50%";	
}

function enableRecipes() { 	
	document.getElementById('black-top').style.display = "none";
	document.getElementById('black-bottom').style.display = "none";
	document.getElementById('black').style.display = "none";
	document.getElementById('the-recipes').style.display = "flex";
}

function disableRecipes() { 
	document.getElementById('the-recipes').style.display = "none";	
	document.getElementById('black-top').style.display = "block";
	document.getElementById('black-bottom').style.display = "block";
	document.getElementById('black').style.display = "flex";	
}

function showRecipes() { 
	document.getElementById('the-recipes').style.opacity = "1";
}

function hideRecipes() { 
	document.getElementById('the-recipes').style.opacity = "0";
}

function getBackToMain() {
	hideRecipes()
	setTimeout(disableRecipes, 900)
	setTimeout(closeBlack, 1000)
	setTimeout(hideBlack, 1500)
	setTimeout(getAppBack, 2000)
}