#pragma strict
var gameController: GameObject;
function Start () {

}

function Update () {

}

function OnTriggerEnter(object: Collider){
	Destroy(object.gameObject);
	gameController.SendMessage("redGotShot");
	Debug.Log("this bullet should be deleted & red health should be reduced");
}