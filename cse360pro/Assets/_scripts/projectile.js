#pragma strict
var projectile: GameObject;


function Start () {


}

function Update () {
projectile.transform.LookAt(Input.mousePosition);
	if(Input.GetButtonDown("Fire1"))
	{
		projectile.transform.position += projectile.transform.forward * 0.2;
	}

}