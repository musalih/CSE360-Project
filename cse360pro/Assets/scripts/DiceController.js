
var dice : Transform; // Drag the prefab_Sphere to this slot

var rollForce: float = 10;  // Type some value near 1000 in the slot
private var mybool: boolean;
private var result: boolean;
var show: int;
var time: int;
var tim: int;

function start()
{
	mybool = true;
	result = false;
	time = tim + Time.realtimeSinceStartup;
}

function Update () {
	if(Input.GetButtonDown("Fire1"))
	{
		result = false;
		mybool = false;
	}
	
	if(mybool)
	{
		dice.Rotate(new Vector3(90, 90, 90)* Time.deltaTime * rollForce);
		
	}
	if(!mybool)
	{
		if(!result)
		{
			result = true;
			show =  Random.Range(1,7);
			if(show == 1)
			{
				dice.rotation = Quaternion.Euler(0,0,270);
				Debug.Log("1 is up");
			}
			else if(show == 2)
			{
				dice.rotation = Quaternion.Euler(0,90,0);
				Debug.Log("2 is up");
			}
			else if(show == 3)
			{
				dice.rotation = Quaternion.Euler(0,0,180);
				Debug.Log("3 is up");
			}
			else if(show == 4)
			{
				dice.rotation = Quaternion.Euler(0,0,0);					
				Debug.Log("4 is up");
			}
			else if(show == 5)
			{
				dice.rotation = Quaternion.Euler(0,270, 0);
				Debug.Log("5 is up");
			}
			else if(show == 6)
			{
					dice.rotation = Quaternion.Euler(0,0,90);
					Debug.Log("6 is up");
			}
		}
		
		if (time <= Time.realtimeSinceStartup)
		{
			time = tim + Time.realtimeSinceStartup;
			mybool = true;
		}
	}
}