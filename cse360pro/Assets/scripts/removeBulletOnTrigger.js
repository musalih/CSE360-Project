#pragma strict
function Start () {

}

function Update () {

}

function OnTriggerEnter(object: Collider){
	Destroy(object.gameObject);
	Debug.Log("this bullet should be deleted");
}