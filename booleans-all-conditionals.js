// booleans
console.log("booleans______________________________________")

var headHurts = true
var hungry = false
var board = true
var sick = false
var hadCabinFeaver = true
var needsSleep = true

console.log(8>5);
console.log(7<4);
var baloons= 5>= 6;
console.log(baloons);

console.log("Are there more red baloons than white ones? " +(1<2));

var myAge = 20
var twenty = "20"

console.log("My age is twenty", myAge == twenty);
console.log("I am twenty", myAge === twenty);

// LOgical Operator

console.log("&& means 'And':", myAge === 20 && 7===7);
console.log("|| means 'Or':", myAge === 21 || 21 ===21);
console.log("!= means 'Not'", myAge !=25);

console.log("Conditionals__________________________________________________")
// Conditionals:

// if

var likesDAndD = true;
var isAtStarBucks = true;
 if(likesDAndD){
 	console.log("Nanette is a Nerd ");
 }
if(likesDAndD === true){
	 	console.log("Nanette has always been a Nerd");

}
if(likesDAndD && isAtStarBucks){
	 	console.log("Nanette is a pretentious nerd");

}
if(likesDAndD || isAtStarBucks){
	 	console.log("Nanette is Nanette");

}
if(!isAtStarBucks){
	 	console.log("A poor Nerd");

}
// if else

if(likesDAndD === true){
	 	console.log("Definately a Nerd");}else{console.log("Might not be a nerd")} 
if(likesDAndD && isAtStarBucks === false){console.log("Not working")}else{ console.log("Is Working")}
// if else elseif

var isPretty = false;
var likesEatingALot = true;

if(isPretty){
	console.log("So pretty");}else if(likesEatingALot){console.log("But getting fat.");} if(likesEatingALot) {
		console.log("Maybe you should cut back a bit")
	}

// switch

var howMuchGasDoIHave = 20

var enoughGas;

switch(howMuchGasDoIHave){
	case 6:
		enoughGas = "No";
		break;
	case 20:
		enoughGas = "Yes";
		break;
	case 10:
		enoughGas = "Maybe";
		break;
default:
	enoughGas = "Go check";
}
console.log("Do I have enough gas:", enoughGas);