console.log('JS works');

let pageVars = new PageVars();

function PageVars() {
	this.gameMode = 'gameSplit.html';
	this.separateScore = document.getElementById('start-button');
	this.vsCpu = document.getElementById('vs-cpu');
	this.twoPlayer = document.getElementById('two-player');

	// - Click Listeners
	document.querySelector('#start-button').addEventListener("click", startTheGame);
	this.separateScore.addEventListener("click", separateGame);
	this.vsCpu.addEventListener("click", cpuGame);
	this.twoPlayer.addEventListener("click", twoGame);
}

function startTheGame() {
	debugger;
	window.location = pageVars.gameMode;
}

function separateGame() {
	if (pageVars.twoPlayer.classList.contains('active')) {
		pageVars.gameMode = 'gameSplit.html';
	} else {
		pageVars.gameMode = 'vsCPUsplit.html';
	}
	pageVars.separateScore.classList.add('active');
	pageVars.sharedScore.classList.remove('active');
}



function cpuGame() {
	pageVars.gameMode = 'vsCPUsplit.html';

	pageVars.vsCpu.classList.add('active');
	pageVars.twoPlayer.classList.remove('active');

}

function twoGame() {
	pageVars.gameMode = 'gameSplit.html';

	pageVars.vsCpu.classList.remove('active');
	pageVars.twoPlayer.classList.add('active');
}