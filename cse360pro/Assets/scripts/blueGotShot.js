#pragma strict
var gameController: GameObject;
function Start () {

}

function Update () {

}

function OnTriggerEnter(object: Collider){
	Destroy(object.gameObject);
	gameController.SendMessage("blueGotShot");
	Debug.Log("this bullet should be deleted & blue health should be reduced");
}