
var prefab_sphere : Transform; // Drag the prefab_Sphere to this slot
var prefab_sphere2 : Transform; // Drag the prefab_Sphere to this slot

var player1Gun: Transform;
var player2Gun: Transform;
/*var player2: GameObject;
var player1: GameObject;*/

var shootForce: float = 1000;  // Type some value near 1000 in the slot
var moveSpeed: float = 5; //change to modify how fast the player moves around
private var dice: GameObject;
var turn: boolean;
function start()
{
	dice = GameObject.FindGameObjectWithTag("Dice");
	turn = true;
}
function Update () 
{
	var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
 	var v : float = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;

 	transform.Translate(h, v, 0);
 	
	if(Input.GetButtonDown("Fire1") )
	{
		shoot();
	}
}
function shoot()
{
	if(turn)
		{
			var instanceBullet = Instantiate (prefab_sphere, player1Gun.position, player1Gun.rotation);
			instanceBullet.GetComponent.<Rigidbody>().AddForce(player1Gun.forward*shootForce);
		}
		
		else
		{
			var instanceBullet2 = Instantiate (prefab_sphere2, player2Gun.position, player2Gun.rotation);
			instanceBullet2.GetComponent.<Rigidbody>().AddForce(player2Gun.forward*shootForce);
		}
		
		turn = !turn;
}