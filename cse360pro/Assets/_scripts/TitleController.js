#pragma strict
var instuctionsPanel: GameObject;

function Awake() {//occurs once when the object becomes to existence
	instuctionsPanel.SetActive(false);
}

function playGame() {//custom function called when the play button is pressed 
	Application.LoadLevel("360");
}

function showInstructionsPanel() {
	instuctionsPanel.SetActive(true);
}
function hideInstructionsPanel() {
	instuctionsPanel.SetActive(false);
}