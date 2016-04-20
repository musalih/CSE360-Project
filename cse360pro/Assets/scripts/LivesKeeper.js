#pragma strict
var redPlayerHP: UI.Image[];
var bluePlayerHP: UI.Image[];
var blueWonText: UI.Text;
var blueLostText: UI.Text;
var redWonText: UI.Text;
var redLostText: UI.Text;

var dice: GameObject;
var damage: int;
private var blueHealth: int;
private var redHealth: int;
private var blueWon: int;
private var blueLost: int;
private var redWon: int;
private var redLost: int;

function Start () {
	blueHealth = 10;
	redHealth = 10;
	blueWon = 0;
	blueLost = 0;
	redWon = 0;
	redLost = 0;
}

function Update () {

}

function redGotShot()
{
	
	var controlscript : DiceController = dice.GetComponent("DiceController"); 
	damage = controlscript.show;
	redHealth -= damage;
	if(redHealth <= 0)
	{
		redHealth = 0;
		redLost++;
		blueWon++;
		Debug.Log("red player lost");
	}
	for(var i=0; i<10-redHealth; i++)
	{
		bluePlayerHP[i].enabled = false;
	}
	updateScore();
	
	if(redHealth == 0)
	{
		blueHealth = 10;
		redHealth = 10;
		for(i=0; i<10; i++)
		{
			redPlayerHP[i].enabled = true;
			bluePlayerHP[i].enabled = true;
		}
	}
}

function blueGotShot()
{
	var controlscript : DiceController = dice.GetComponent("DiceController"); 
	damage = controlscript.show;
	blueHealth -= damage;
	if(blueHealth <= 0)
	{
		blueHealth = 0;
		blueLost++;
		redWon++;
		Debug.Log("blue player lost");
	}
	for(var i=0; i<10-blueHealth; i++)
	{
		redPlayerHP[i].enabled = false;
	}
	updateScore();
	
	if(blueHealth == 0)
	{
		blueHealth = 10;
		redHealth = 10;
		for(i=0; i<10; i++)
		{
			redPlayerHP[i].enabled = true;
			bluePlayerHP[i].enabled = true;
		}
	}
}

function updateScore()
{
	blueWonText.text = "WON: " + blueWon;
	blueLostText.text = "LOST: " + blueLost;
	redWonText.text = "WON: " + redWon;
	redLostText.text = "LOST: " + redLost;
}