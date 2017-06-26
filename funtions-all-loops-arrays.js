
// Functions

function supBitches(){
	console.log("Sup peeps");
}

supBitches();

function tellMeANumber(){ console.log(9)};

tellMeANumber();

function words(){
	console.log("tell me a tail, this tail.")
}

words();

function adding(){
	var x = 8
	var y = 4
	console.log(x+y);
}

adding();

function subtracting(){
	var x = 7;
	var y = 3;
	console.log(x-y);
}

subtracting();

words();

function eating(){
	return"Eating carrots";
}

console.log(eating())

function mulitiplying (x,y){
	return x*y;
}

console.log(mulitiplying(8,8));

function whatElse(x,y){
	return x+" Hey baby ^^ "+y;
}

console.log(whatElse("rassberries","chocolate"));

// Loops for

for( var b = 0; b< 10; b++){
	console.log("Looking for the best number!", b)
	if(b === 4) {
		console.log("Found it!");
		break;
	}
}

// Loops while

var littleIndians = 0
while(littleIndians <10){
	littleIndians++;
	console.log(littleIndians+" little "+ littleIndians+ "little Indians");if(littleIndians === 10){
		console.log(littleIndians+ "little Indians Boys!")
	}
}

// Array

var thingList = ["thing1","thing2","thing3","thing4",];
var numberList = [04,11,1997];

console.log(thingList);
console.log(numberList);

var foods = ["turky","carrots","ice cream","yams"]

console.log(foods[2])

var Countries = ["Thuriania","Erlin","Eternal land of setting sun","Turtle Island",]

for(var i = 1; i<Countries.length; i++){
	console.log("Land:", i);
	console.log(Countries[i]);
}

