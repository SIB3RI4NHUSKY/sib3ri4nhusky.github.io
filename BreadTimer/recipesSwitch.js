let recipesSwitchCounter = 0;

function recipesSwitch() {
	recipesSwitchCounter += 1;	
	if (recipesSwitchCounter == 1) {
		document.getElementById('usual-bread').style.height = "0";
		document.getElementById('usual-bread-menu').style.height = "0"; 
		document.getElementById('usual-bread-table').style.height = "0"; 
	}
	if (recipesSwitchCounter == 2) {
		document.getElementById('egg-bread').style.height = "0";
		document.getElementById('egg-bread-menu').style.height = "0";
		document.getElementById('egg-bread-table').style.height = "0"; 
	}
	if (recipesSwitchCounter == 3) {
		document.getElementById('usual-bread').style.height = "35px";
		document.getElementById('egg-bread').style.height = "35px";
		document.getElementById('usual-bread-menu').style.height = "23px";
		document.getElementById('egg-bread-menu').style.height = "23px";
		document.getElementById('usual-bread-table').style.height = "278px"; 
		document.getElementById('egg-bread-table').style.height = "278px"; 
		recipesSwitchCounter = 0;
	}	
}