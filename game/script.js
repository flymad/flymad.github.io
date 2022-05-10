let reason=function(choice1,choice2){

    if(choice1===choice2){
    	return "Because both are equal ";
    }

	else if ( (choice1==="scissors" && choice2==="paper") || (choice2==="scissors" && choice1==="paper")    ){
		return " Because Scissors cuts Paper ";
	}

	else if ((choice1==="paper" && choice2==="rock") || (choice2==="paper" && choice1==="rock") ) {
		return "Because Paper covers Rock";
	}

	
	    
    else if( (choice1==="rock" && choice2==="scissors") || (choice2==="rock" && choice1==="scissors") ){
		return "Because Rock crushes Scissors ";
	}


};

let compare= function (choice1 , choice2){


	if (choice1===choice2)
		return "Its a tie"
    
    if (choice1==="rock"){

         if (choice2 ==="paper")
         	return "You lose";
         else
         	return "You won";

    
    }

    else if (choice1==="paper"){

         if (choice2 ==="scissors")
         	return "You lose";
         else
         	return "You won";


    }

    else if (choice1==="scissors"){

         if (choice2 ==="rock")
         	return "You lose";
         else
         	return "You won";
    }
       

    };



document.getElementById('rock').addEventListener('click', function (e) {

	let userChoice= "rock"
	//let computerChoice = Math.random();
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=1){
	computerChoice = "scissors";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose rock " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});


document.getElementById('paper').addEventListener('click', function (e) {
	
	let userChoice= "paper"
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=1){
	computerChoice = "scissors";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose paper " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);


});


document.getElementById('scissors').addEventListener('click', function (e) {
	
	let userChoice= "scissors"
	let computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=1){
	computerChoice = "scissors";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose scissors " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});

